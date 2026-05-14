import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET!;

export function signToken(payload: { userId: string; email: string; name: string }) {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): { userId: string; email: string; name: string } | null {
  try {
    const decoded = jwt.verify(token, SECRET) as any;
    return {
      userId: decoded.userId || decoded.id, 
      email: decoded.email,
      name: decoded.name,
    };
  } catch {
    return null;
  }
}
