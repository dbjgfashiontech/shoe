import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";
import { getUser } from "@/lib/getUser";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    const user = await getUser();
console.log("🔍 user from token:", user);
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Not logged in" },
        { status: 401 }
      );
    }

    await connectDB();
    const { orderId } = await params;
    console.log("🔍 looking for orderId:", orderId, "userId:", user.userId); // ← ADD THIS

    // ✅ Only find order if it belongs to this user
    const order = await Order.findOne({
      orderId,
      userId: user.userId,
    }).lean();
    console.log("🔍 order found without userId filter:", order); // ← ADD THIS

    if (!order) {
      return NextResponse.json(
        { success: false, message: "Order not found" },
        { status: 404 }
      );
    }

    const now = new Date();
    const delivery = new Date((order as any).deliveryDate);
    const hoursSince =
      (now.getTime() - new Date((order as any).createdAt).getTime()) /
      (1000 * 60 * 60);

    let status = (order as any).status;
    if (now >= delivery) status = "Delivered";
    else if (hoursSince >= 48) status = "Out for Delivery";
    else if (hoursSince >= 12) status = "Order Packed";

    if (status !== (order as any).status) {
      await Order.updateOne({ orderId }, { status });
    }

    return NextResponse.json({
      success: true,
      order: { ...(order as any), status },
    });
  } catch (err) {
    console.error("GET /api/orders/[orderId] error:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}