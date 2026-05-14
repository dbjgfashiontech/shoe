"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiPackage,
  FiChevronRight,
  FiClock,
  FiCheckCircle,
  FiTruck,
} from "react-icons/fi";

interface Order {
  orderId: string;
  customerName: string;
  city: string;
  grandTotal: number;
  status: string;
  deliveryDate: string;
  createdAt: string;
  items: { name: string; image: string; quantity: number }[];
}

const STATUS_COLOR: Record<string, string> = {
  "Order Placed": "bg-blue-100 text-blue-700",
  "Order Packed": "bg-orange-100 text-orange-700",
  "Out for Delivery": "bg-red-100 text-red-700",
  Delivered: "bg-green-100 text-green-700",
};

const STATUS_ICON: Record<string, React.ReactElement> = {
  "Order Placed": <FiClock size={13} />,
  "Order Packed": <FiPackage size={13} />,
  "Out for Delivery": <FiTruck size={13} />,
  Delivered: <FiCheckCircle size={13} />,
};

export default function MyOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"All" | "Active" | "Delivered">("All");

  useEffect(() => {
    fetch("/api/orders")
      .then(async (r) => {
        const text = await r.text();
        if (!text) return;
        const data = JSON.parse(text);

        if (r.status === 401) {
          window.location.href = "/login";
          return;
        }

        if (data.success) setOrders(data.orders);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = orders.filter((o) => {
    if (filter === "Delivered") return o.status === "Delivered";
    if (filter === "Active") return o.status !== "Delivered";
    return true;
  });

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-2 border-brand-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-ink font-serif mb-2">
        My Orders
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        Track all your orders in one place
      </p>

      <div className="flex gap-2 mb-6 flex-wrap">
        {(["All", "Active", "Delivered"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
              filter === tab
                ? "brand-button border-transparent shadow"
                : "bg-white border-red-100 text-gray-500 hover:border-brand-500 hover:text-brand-700"
            }`}
          >
            {tab}
            <span className="ml-1.5 text-xs opacity-70">
              (
              {tab === "All"
                ? orders.length
                : tab === "Delivered"
                  ? orders.filter((o) => o.status === "Delivered").length
                  : orders.filter((o) => o.status !== "Delivered").length}
              )
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="brand-panel rounded-[2rem] text-center py-20 px-6">
          <FiPackage size={48} className="text-red-200 mx-auto mb-4" />
          <p className="text-gray-500 font-medium">No orders found</p>
          <Link href="/" className="mt-4 inline-block text-sm brand-link font-semibold">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((order) => {
            const isDelivered = order.status === "Delivered";
            const deliveryDate = new Date(order.deliveryDate).toLocaleDateString(
              "en-IN",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
              }
            );
            const placedDate = new Date(order.createdAt).toLocaleDateString(
              "en-IN",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
              }
            );

            return (
              <Link
                key={order.orderId}
                href={`/order-confirmed/${order.orderId}`}
                className="block brand-panel rounded-[1.5rem] overflow-hidden hover:-translate-y-0.5 transition-all"
              >
                <div className={`h-1 ${isDelivered ? "bg-green-500" : "brand-gradient"}`} />

                <div className="p-5 flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-sm font-bold text-brand-ink font-mono">
                        #{order.orderId}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                          STATUS_COLOR[order.status] || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {STATUS_ICON[order.status]}
                        {order.status}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 truncate mb-2">
                      {order.items.map((i) => `${i.name} x${i.quantity}`).join(", ")}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-gray-400 flex-wrap">
                      <span>Placed: {placedDate}</span>
                      <span className="text-gray-200">|</span>
                      <span className={isDelivered ? "text-green-600 font-medium" : "text-brand-700 font-medium"}>
                        {isDelivered
                          ? `Delivered on ${deliveryDate}`
                          : `Expected: ${deliveryDate}`}
                      </span>
                      <span className="text-gray-200">|</span>
                      <span className="font-semibold text-brand-ink">
                        Rs.{order.grandTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <FiChevronRight className="text-gray-300 shrink-0" size={20} />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
