"use client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  FiCheckCircle,
  FiPackage,
  FiTruck,
  FiHome,
  FiPhone,
  FiRefreshCw,
} from "react-icons/fi";

interface Order {
  orderId: string;
  customerName: string;
  city: string;
  grandTotal: number;
  status: string;
  deliveryDate: string;
  createdAt: string;
  items: { id: string; name: string; price: number; quantity: number; image: string }[];
}

const ALL_STEPS = ["Order Placed", "Order Packed", "Out for Delivery", "Delivered"];

const STEP_ICONS = [
  <FiCheckCircle size={18} key="0" />,
  <FiPackage size={18} key="1" />,
  <FiTruck size={18} key="2" />,
  <FiHome size={18} key="3" />,
];

const STEP_DESCS = [
  "We have received your order",
  "Your items are being packed",
  "Your order is on the way",
  "Your order has been delivered",
];

export default function OrderConfirmedPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const fetchOrder = useCallback(async (showSpinner = false) => {
    if (showSpinner) setRefreshing(true);
    try {
      const res = await fetch(`/api/orders/${orderId}`);
      const data = await res.json();
      if (data.success) setOrder(data.order);
      else setError("Order not found.");
    } catch {
      setError("Failed to load order.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [orderId]);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      void fetchOrder();
    }, 0);
    const interval = setInterval(() => {
      void fetchOrder();
    }, 60000);
    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [fetchOrder]);

  if (loading) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-2 border-brand-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <p className="text-gray-400 text-lg mb-4">{error}</p>
        <Link
          href="/"
          className="brand-button font-bold px-8 py-3 rounded-full text-sm uppercase tracking-[0.28em]"
        >
          Go Home
        </Link>
      </div>
    );
  }

  const currentStepIndex = ALL_STEPS.indexOf(order.status);
  const isDelivered = order.status === "Delivered";

  const deliveryDate = new Date(order.deliveryDate);
  const deliveryStr = deliveryDate.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <div className="brand-panel rounded-[2rem] overflow-hidden">
          <div className={`h-2 ${isDelivered ? "bg-green-500" : "brand-gradient"}`} />

          <div
            className={`px-8 pt-10 pb-6 text-center ${
              isDelivered
                ? "bg-gradient-to-b from-green-50 to-white"
                : "bg-gradient-to-b from-red-50 to-white"
            }`}
          >
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 ${
                isDelivered ? "bg-green-100" : "bg-red-100"
              }`}
            >
              {isDelivered ? (
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <FiTruck size={36} className="text-brand-700" />
              )}
            </div>
            <h1 className="text-2xl font-bold text-brand-ink font-serif mb-1">
              {isDelivered ? "Order Delivered!" : "Order Confirmed!"}
            </h1>
            <p className="text-gray-500 text-sm">
              {isDelivered
                ? `Hey ${order.customerName}, your order has been delivered successfully.`
                : `Thank you, ${order.customerName}! We are processing your order.`}
            </p>
          </div>

          <div className="px-8 pb-8 space-y-6">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase tracking-[0.24em] font-semibold">
                  Order ID
                </span>
                <span className="text-sm font-bold text-brand-ink font-mono">
                  #{order.orderId}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase tracking-[0.24em] font-semibold">
                  Amount
                </span>
                <span className="text-sm font-bold text-brand-700">
                  Rs.{order.grandTotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase tracking-[0.24em] font-semibold">
                  Payment
                </span>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-ink">
                  <span className="w-2 h-2 bg-green-500 rounded-full" /> Cash on
                  Delivery
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase tracking-[0.24em] font-semibold">
                  Deliver To
                </span>
                <span className="text-sm font-semibold text-brand-ink">
                  {order.city}
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs text-gray-400 uppercase tracking-[0.24em] font-semibold">
                  Order Status
                </h3>
                <button
                  onClick={() => fetchOrder(true)}
                  className="flex items-center gap-1 text-xs brand-link font-medium"
                >
                  <FiRefreshCw size={12} className={refreshing ? "animate-spin" : ""} />
                  Refresh
                </button>
              </div>

              <div>
                {ALL_STEPS.map((stepName, i) => {
                  const isDone = i <= currentStepIndex;
                  const isCurrent = i === currentStepIndex;

                  return (
                    <div key={stepName} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                            isDone
                              ? isDelivered && i === ALL_STEPS.length - 1
                                ? "bg-green-500 text-white"
                                : "brand-gradient text-white"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {STEP_ICONS[i]}
                        </div>
                        {i < ALL_STEPS.length - 1 && (
                          <div
                            className={`w-0.5 h-8 mt-1 transition-all duration-500 ${
                              isDone ? "bg-brand-600" : "bg-gray-200"
                            }`}
                          />
                        )}
                      </div>
                      <div className="pb-6">
                        <p
                          className={`text-sm font-semibold ${
                            isDone ? "text-brand-ink" : "text-gray-400"
                          }`}
                        >
                          {stepName}
                          {isCurrent && (
                            <span
                              className={`ml-2 text-xs font-medium px-2 py-0.5 rounded-full ${
                                isDelivered
                                  ? "text-green-700 bg-green-100"
                                  : "text-brand-700 bg-red-100"
                              }`}
                            >
                              {isDelivered ? "Delivered" : "Current"}
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {i === ALL_STEPS.length - 1
                            ? isDelivered
                              ? `Delivered on ${deliveryStr}`
                              : `Expected by ${deliveryStr}`
                            : STEP_DESCS[i]}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className={`rounded-2xl p-5 text-center ${
                isDelivered ? "bg-green-600" : "brand-gradient"
              }`}
            >
              <p
                className={`text-xs tracking-[0.3em] uppercase font-semibold mb-1 ${
                  isDelivered ? "text-green-100" : "text-red-100"
                }`}
              >
                {isDelivered ? "Delivered On" : "Estimated Delivery"}
              </p>
              <p className="text-white font-bold text-lg">{deliveryStr}</p>
              {!isDelivered && (
                <p className="text-red-100/80 text-xs mt-1">
                  Between 10:00 AM - 7:00 PM
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-500 bg-gray-50 rounded-xl p-4">
              <FiPhone className="text-brand-700 shrink-0" size={18} />
              <span>
                Need help? Call{" "}
                <a href="tel:+918708813685" className="brand-link font-semibold">
                  +91 8708813685
                </a>
              </span>
            </div>

            <Link
              href="/"
              className="block w-full text-center brand-button font-bold py-3.5 rounded-xl text-sm tracking-[0.28em] uppercase"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
