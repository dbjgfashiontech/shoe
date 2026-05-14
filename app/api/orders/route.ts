import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";
import { getUser } from "@/lib/getUser";

// GET — only return orders for logged-in user
export async function GET() {
  try {
    const user = await getUser();

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Not logged in" },
        { status: 401 }
      );
    }

    await connectDB();

    const orders = await Order.find({ userId: user.userId })
      .sort({ createdAt: -1 })
      .lean();

    const now = new Date();
    const updated = orders.map((order: any) => {
      const delivery = new Date(order.deliveryDate);
      const hoursSince =
        (now.getTime() - new Date(order.createdAt).getTime()) / (1000 * 60 * 60);

      let status = order.status;
      if (now >= delivery) status = "Delivered";
      else if (hoursSince >= 48) status = "Out for Delivery";
      else if (hoursSince >= 12) status = "Order Packed";

      return { ...order, status };
    });

    return NextResponse.json({ success: true, orders: updated });
  } catch (err) {
    console.error("GET /api/orders error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}

// POST — attach order to logged-in user
export async function POST(req: NextRequest) {
  try {
    const user = await getUser();

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Please login to place an order" },
        { status: 401 }
      );
    }

    await connectDB();
    const body = await req.json();

    const orderId = "DBJG" + Math.floor(100000 + Math.random() * 900000);
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 4);

    const order = await Order.create({
      ...body,
      orderId,
      deliveryDate,
      userId: user.userId, // ✅ attach to logged-in user
    });
console.log("📦 order saved with userId:", order.userId); // ← ADD THIS

    return NextResponse.json(
      { success: true, orderId: order.orderId },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/orders error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to place order" },
      { status: 500 }
    );
  }
}