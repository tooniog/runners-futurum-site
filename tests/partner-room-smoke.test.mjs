import test, { before, after } from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";
import { setTimeout as sleep } from "node:timers/promises";

const port = 3137;
const host = "127.0.0.1:" + port;
const url = "http://" + host;
const origin = "https://" + host;
let server;

before(async () => {
  server = spawn("npm", ["run", "start", "--", "-p", String(port)], {
    stdio: "ignore", env: { ...process.env, PORT: String(port) },
  });
  for (let i = 0; i < 80; i++) {
    if (server.exitCode !== null) throw new Error("Next.js server exited unexpectedly");
    try { const r = await fetch(url + "/"); if (r.status === 200) return; }
    catch {}
    await sleep(250);
  }
  throw new Error("Next.js did not become ready");
});
after(async () => { if (server) { server.kill("SIGTERM"); await sleep(150); } });

test("public entry source does not include private catalogue or old browser password", async () => {
  const page = await readFile("app/page.js", "utf8");
  assert.doesNotMatch(page, /PARTNER_PASSWORD|RUNNERS2026|BOI — Enterprise Development|AMCON — Recovery Intelligence|CSL — Runnerbot 2/);
  assert.match(page, /\/api\/partner\/session/);
});

test("anonymous visitor cannot access institutional catalogue", async () => {
  const r = await fetch(url + "/api/partner/session");
  assert.equal(r.status, 401);
  assert.match(r.headers.get("cache-control") || "", /no-store/);
  const data = await r.json();
  assert.equal(data.authenticated, false);
  assert.equal(data.cards, undefined);
});

test("invalid code and non-JSON requests fail without session", async () => {
  const wrong = await fetch(url + "/api/partner/login", {
    method: "POST", headers: { origin, "content-type": "application/json" },
    body: JSON.stringify({ code: "invalid-code" }),
  });
  assert.equal(wrong.status, 401);
  assert.equal(wrong.headers.get("set-cookie"), null);
  const badType = await fetch(url + "/api/partner/login", {
    method: "POST", headers: { origin, "content-type": "text/plain" }, body: "bad",
  });
  assert.equal(badType.status, 415);
});

test("cross-site origin is rejected", async () => {
  const r = await fetch(url + "/api/partner/login", {
    method: "POST", headers: { origin: "https://evil.example", "content-type": "application/json" },
    body: JSON.stringify({ code: process.env.PARTNER_ACCESS_CODE }),
  });
  assert.equal(r.status, 403);
  assert.equal(r.headers.get("set-cookie"), null);
});

test("login provides protected catalogue; logout revokes browser cookie", async () => {
  assert.ok(process.env.PARTNER_ACCESS_CODE?.length >= 32, "CI fixture must be strong");
  const login = await fetch(url + "/api/partner/login", {
    method: "POST", headers: { origin, "content-type": "application/json" },
    body: JSON.stringify({ code: process.env.PARTNER_ACCESS_CODE }),
  });
  assert.equal(login.status, 200);
  const setCookie = login.headers.get("set-cookie") || "";
  assert.match(setCookie, /__Host-rf_partner=/);
  assert.match(setCookie, /HttpOnly/i);
  assert.match(setCookie, /Secure/i);
  assert.match(setCookie, /SameSite=Strict/i);
  assert.match(setCookie, /Max-Age=1800/i);
  const cookie = setCookie.split(";")[0];
  const auth = await fetch(url + "/api/partner/session", { headers: { cookie } });
  assert.equal(auth.status, 200);
  const data = await auth.json();
  assert.equal(data.authenticated, true);
  assert.ok(Array.isArray(data.cards) && data.cards.length > 0);
  assert.ok(data.cards.some((x) => x.name.includes("BOI")));
  assert.match(auth.headers.get("cache-control") || "", /no-store/);
  const forgery = await fetch(url + "/api/partner/session", {
    headers: { cookie: cookie + "tampered" },
  });
  assert.equal(forgery.status, 401);
  const logout = await fetch(url + "/api/partner/logout", {
    method: "POST", headers: { origin, cookie },
  });
  assert.equal(logout.status, 200);
  assert.match(logout.headers.get("set-cookie") || "", /Max-Age=0/i);
  const postLogout = await fetch(url + "/api/partner/session", {
    headers: { cookie: "__Host-rf_partner=" },
  });
  assert.equal(postLogout.status, 401);
});
