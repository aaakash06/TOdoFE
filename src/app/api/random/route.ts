import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.redirect(new URL("/", req.url));
  return NextResponse.json({ message: "hit random route" });
}
