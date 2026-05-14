"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FiTrash2,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiArrowLeft,
  FiMapPin,
  FiUser,
  FiPhone,
  FiChevronRight,
} from "react-icons/fi";

interface AddressForm {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice, totalItems } =
    useCart();
  const router = useRouter();

  const [step, setStep] = useState<"cart" | "address">("cart");
  const [form, setForm] = useState<AddressForm>({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [errors, setErrors] = useState<Partial<AddressForm>>({});
  const [loading, setLoading] = useState(false);

  const shipping = totalPrice >= 1999 ? 0 : 99;
  const grandTotal = totalPrice + shipping;

  const validate = () => {
    const e: Partial<AddressForm> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone)) {
      e.phone = "Enter valid 10-digit mobile number";
    }
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.state.trim()) e.state = "State is required";
    if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode)) {
      e.pincode = "Enter valid 6-digit pincode";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePlaceOrder = async () => {
    if (!validate()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: form.name,
          phone: form.phone,
          address: form.address,
          city: form.city,
          state: form.state,
          pincode: form.pincode,
          items: cart,
          subtotal: totalPrice,
          shipping,
          grandTotal,
        }),
      });

      const data = await res.json();

      if (data.success) {
        clearCart();
        router.push(`/order-confirmed/${data.orderId}`);
      } else {
        alert("Please LOGIN to Place Order.");
        setLoading(false);
      }
    } catch {
      alert("Network error. Please try again.");
      setLoading(false);
    }
  };

  if (cart.length === 0 && step === "cart") {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="brand-panel rounded-[2rem] px-10 py-12 max-w-lg">
          <FiShoppingBag size={64} className="text-red-200 mb-6 mx-auto" />
          <h2 className="text-2xl font-bold text-brand-ink font-serif mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-8">
            Looks like you haven&apos;t added anything yet.
          </p>
          <Link
            href="/"
            className="inline-block brand-button font-bold px-8 py-3 rounded-full text-sm tracking-[0.28em] uppercase"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 mb-8 text-sm">
        <button
          onClick={() => setStep("cart")}
          className={`font-semibold transition-colors ${
            step === "cart" ? "text-brand-700" : "text-gray-400 hover:text-brand-700"
          }`}
        >
          1. Cart
        </button>
        <FiChevronRight className="text-gray-300" size={16} />
        <span className={`font-semibold ${step === "address" ? "text-brand-700" : "text-gray-400"}`}>
          2. Delivery Address
        </span>
        <FiChevronRight className="text-gray-300" size={16} />
        <span className="text-gray-400 font-semibold">3. Order Confirmed</span>
      </div>

      {step === "cart" && (
        <>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <h1 className="text-3xl font-bold text-brand-ink font-serif">
              Shopping Cart{" "}
              <span className="text-base font-normal text-gray-400">
                ({totalItems} items)
              </span>
            </h1>
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm brand-link font-medium"
            >
              <FiArrowLeft size={16} /> Continue Shopping
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="brand-panel rounded-[1.5rem] p-4 flex gap-4"
                >
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-brand-700 font-semibold uppercase tracking-[0.24em]">
                      {item.category}
                    </p>
                    <h3 className="font-semibold text-brand-ink text-sm mt-1 truncate">
                      {item.name}
                    </h3>
                    <p className="text-lg font-bold text-brand-ink mt-2">
                      Rs.{item.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-600 p-1"
                    >
                      <FiTrash2 size={16} />
                    </button>
                    <div className="flex items-center gap-2 border border-red-100 bg-white rounded-full px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-brand-ink hover:text-brand-700"
                      >
                        <FiMinus size={13} />
                      </button>
                      <span className="text-sm font-semibold w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-brand-ink hover:text-brand-700"
                      >
                        <FiPlus size={13} />
                      </button>
                    </div>
                    <p className="text-sm font-bold text-brand-ink">
                      Rs.{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
              <button
                onClick={clearCart}
                className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1.5 mt-2 font-medium"
              >
                <FiTrash2 size={14} /> Clear Cart
              </button>
            </div>

            <div className="lg:col-span-1">
              <div className="brand-panel rounded-[1.75rem] p-6 sticky top-24">
                <h2 className="text-lg font-bold text-brand-ink font-serif mb-5 pb-3 border-b border-red-50">
                  Order Summary
                </h2>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({totalItems} items)</span>
                    <span className="font-semibold text-brand-ink">
                      Rs.{totalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className={`font-semibold ${shipping === 0 ? "text-green-600" : "text-brand-ink"}`}>
                      {shipping === 0 ? "FREE" : `Rs.${shipping}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-brand-700 bg-red-50 rounded-lg p-3">
                      Add Rs.{(1999 - totalPrice).toLocaleString()} more for free
                      shipping!
                    </p>
                  )}
                  <div className="border-t border-red-50 pt-3 flex justify-between font-bold text-brand-ink text-base">
                    <span>Grand Total</span>
                    <span className="text-brand-700">
                      Rs.{grandTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setStep("address")}
                  className="w-full brand-button font-bold py-3.5 rounded-xl text-sm tracking-[0.28em] uppercase"
                >
                  Cash on Delivery (COD)
                </button>
                <p className="text-xs text-gray-400 text-center mt-3">
                  Pay when your order arrives
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {step === "address" && (
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setStep("cart")}
            className="flex items-center gap-1.5 text-sm brand-link font-medium mb-6"
          >
            <FiArrowLeft size={16} /> Back to Cart
          </button>

          <div className="brand-panel rounded-[2rem] overflow-hidden">
            <div className="h-1.5 brand-gradient" />
            <div className="p-8">
              <h2 className="text-2xl font-bold text-brand-ink font-serif mb-1">
                Delivery Address
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                We&apos;ll deliver your order to this address
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-brand-ink uppercase tracking-[0.24em] mb-1.5 block">
                    Full Name *
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm ${
                        errors.name ? "border border-red-400" : "brand-input"
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-brand-ink uppercase tracking-[0.24em] mb-1.5 block">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="tel"
                      placeholder="9876543210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm ${
                        errors.phone ? "border border-red-400" : "brand-input"
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-brand-ink uppercase tracking-[0.24em] mb-1.5 block">
                    Full Address *
                  </label>
                  <div className="relative">
                    <FiMapPin className="absolute left-3.5 top-3.5 text-gray-400" size={16} />
                    <textarea
                      placeholder="House No, Street, Locality..."
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      rows={3}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm resize-none ${
                        errors.address ? "border border-red-400" : "brand-input"
                      }`}
                    />
                  </div>
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>

                {(["city", "state", "pincode"] as const).map((field) => (
                  <div key={field}>
                    <label className="text-xs font-semibold text-brand-ink uppercase tracking-[0.24em] mb-1.5 block">
                      {field} *
                    </label>
                    <input
                      type="text"
                      placeholder={
                        field === "city"
                          ? "Jhajjar"
                          : field === "state"
                            ? "Haryana"
                            : "124103"
                      }
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm ${
                        errors[field] ? "border border-red-400" : "brand-input"
                      }`}
                    />
                    {errors[field] && (
                      <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-red-50 border border-red-100 rounded-xl p-4 flex justify-between items-center gap-4">
                <div className="text-sm text-gray-600">
                  <p className="font-semibold text-brand-ink">
                    {totalItems} item{totalItems > 1 ? "s" : ""} · Cash on Delivery
                  </p>
                  {shipping === 0 ? (
                    <p className="text-green-600 text-xs font-medium mt-0.5">
                      Free Shipping Applied
                    </p>
                  ) : (
                    <p className="text-gray-400 text-xs mt-0.5">
                      Shipping: Rs.{shipping}
                    </p>
                  )}
                </div>
                <p className="text-xl font-bold text-brand-ink">
                  Rs.{grandTotal.toLocaleString()}
                </p>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={loading}
                className="w-full mt-6 brand-button font-bold py-4 rounded-xl text-sm tracking-[0.28em] uppercase disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Placing Your Order...
                  </>
                ) : (
                  "Place Order"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
