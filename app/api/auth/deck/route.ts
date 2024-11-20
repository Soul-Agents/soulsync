import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { sign } from "jsonwebtoken";

const limiter = rateLimit({
  interval: 60 * 1000,
});

const JWT_SECRET = process.env["JWT_SECRET"] || "your-secret-key";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "anonymous";
    await limiter.check(5, ip);

    const { password } = await req.json();

    if (password !== process.env["DECK_PASSWORD"]) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const token = sign({ authorized: true }, JWT_SECRET, { expiresIn: "24h" });

    return NextResponse.json({ token });
  } catch (error: any) {
    if (error?.status === 429) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again later." },
        { status: 429 },
      );
    }

    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
