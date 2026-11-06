import "server-only";
import { createHmac, createHash, timingSafeEqual } from "node:crypto";

export const PARTNER_COOKIE = "__Host-rf_partner";
const SESSION_SECONDS = 30 * 60;
const encoder = (value) => Buffer.from(value).toString("base64url");
const decode = (value) => Buffer.from(value, "base64url").toString("utf8");
const fingerprint = (value) => createHash("sha256").update(value).digest();

function configured() {
  return !!(process.env.PARTNER_ACCESS_CODE && process.env.PARTNER_SESSION_SECRET && process.env.PARTNER_SESSION_SECRET.length >= 32);
}
function signature(payload) {
  return createHmac("sha256", process.env.PARTNER_SESSION_SECRET).update(payload).digest("base64url");
}
export function validAccessCode(submitted) {
  if (!configured() || typeof submitted !== "string" || submitted.length > 256) return false;
  return timingSafeEqual(fingerprint(submitted), fingerprint(process.env.PARTNER_ACCESS_CODE));
}
export function newPartnerSession() {
  if (!configured()) throw new Error("Partner authentication is not configured");
  const payload = encoder(JSON.stringify({ v: 1, exp: Math.floor(Date.now() / 1000) + SESSION_SECONDS }));
  return payload + "." + signature(payload);
}
export function validPartnerSession(token) {
  if (!configured() || typeof token !== "string" || token.length > 1024) return false;
  try {
    const parts = token.split(".");
    if (parts.length !== 2) return false;
    const expected = signature(parts[0]);
    if (!timingSafeEqual(Buffer.from(parts[1]), Buffer.from(expected))) return false;
    const data = JSON.parse(decode(parts[0]));
    return data.v === 1 && Number.isSafeInteger(data.exp) && data.exp > Date.now() / 1000 && data.exp <= Date.now() / 1000 + SESSION_SECONDS;
  } catch { return false; }
}
export const cookieOptions = {
  httpOnly: true, secure: true, sameSite: "strict", path: "/", maxAge: SESSION_SECONDS,
};
