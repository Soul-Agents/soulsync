import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { sign } from "jsonwebtoken";

const limiter = rateLimit({
  interval: 60 * 1000,
  limit: 5,
});

const JWT_SECRET = process.env["JWT_SECRET"] || "your-secret-key";

type RequestBody = {
  password: string;
};

// Define a custom error type
interface RateLimitError extends Error {
  status?: number;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "anonymous";
    await limiter.check(1, ip);

    const { password } = (await req.json()) as RequestBody;

    if (password !== process.env["DECK_PASSWORD"]) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const token = sign({ authorized: true }, JWT_SECRET, { expiresIn: "24h" });

    return NextResponse.json({ token });
  } catch (error: unknown) {
    const err = error as RateLimitError; // Cast to the custom error type
    if (err.status === 429) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again later." },
        { status: 429 },
      );
    }

    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
