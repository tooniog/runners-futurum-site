import { NextResponse } from "next/server";
import { validAccessCode, newPartnerSession, PARTNER_COOKIE, cookieOptions } from "../../../../lib/partner-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const headers = { "Cache-Control": "no-store, private", "X-Content-Type-Options": "nosniff" };
export async function POST(request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host || new URL(origin).host !== host || !origin.startsWith("https://")) {
    return NextResponse.json({ error: "Request rejected" }, { status: 403, headers });
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return NextResponse.json({ error: "Unsupported request" }, { status: 415, headers });
  }
  const length = Number(request.headers.get("content-length") || 0);
  if (length > 1024) return NextResponse.json({ error: "Invalid request" }, { status: 413, headers });
  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400, headers }); }
  if (!validAccessCode(body?.code)) {
    return NextResponse.json({ error: "Access code not recognised" }, { status: 401, headers });
  }
  const response = NextResponse.json({ ok: true }, { headers });
  response.cookies.set(PARTNER_COOKIE, newPartnerSession(), cookieOptions);
  return response;
}
