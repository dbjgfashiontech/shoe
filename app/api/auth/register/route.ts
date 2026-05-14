import { NextRequest, NextResponse } from "next/server";
import { connectDB} from "@/lib/mongodb";
import User from "@/models/User";
import { signToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { name, email, password, phone } = await req.json();

    if (!name || !email || !password)
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });

    if (password.length < 6)
      return NextResponse.json({ message: "Password must be at least 6 characters" }, { status: 400 });

    const existing = await User.findOne({ email });
    if (existing)
      return NextResponse.json({ message: "Email already registered" }, { status: 409 });

    const user = await User.create({ name, email, password, phone });
const token = signToken({ userId: user._id.toString(), name: user.name, email: user.email });
    const response = NextResponse.json(
      { message: "Account created successfully", user: { id: user._id, name: user.name, email: user.email } },
      { status: 201 }
    );
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    return response;
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}