import { NextResponse } from "next/server";
import { PARTNER_COOKIE, cookieOptions } from "../../../../lib/partner-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function POST(request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host || new URL(origin).host !== host || !origin.startsWith("https://")) {
    return NextResponse.json({ error: "Request rejected" }, { status: 403 });
  }
  const response = NextResponse.json({ ok: true }, { headers: { "Cache-Control": "private, no-store" } });
  response.cookies.set(PARTNER_COOKIE, "", { ...cookieOptions, maxAge: 0 });
  return response;
}
