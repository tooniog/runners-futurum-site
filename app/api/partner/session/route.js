import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PARTNER_COOKIE, validPartnerSession } from "../../../../lib/partner-auth";
import { partnerCards } from "../../../../lib/partner-catalogue";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function GET() {
  const jar = await cookies();
  if (!validPartnerSession(jar.get(PARTNER_COOKIE)?.value)) {
    return NextResponse.json({ authenticated: false }, { status: 401, headers: { "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff" } });
  }
  return NextResponse.json({ authenticated: true, cards: partnerCards }, { headers: { "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff" } });
}
