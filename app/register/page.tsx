"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  FiUser,
  FiMail,
  FiLock,
  FiPhone,
  FiEye,
  FiEyeOff,
  FiCheck,
} from "react-icons/fi";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    const result = await register(
      form.name,
      form.email,
      form.password,
      form.phone
    );
    setLoading(false);
    if (result.success) {
      setSuccess("Account created! Redirecting...");
      setTimeout(() => router.push("/"), 1500);
    } else {
      setError(result.message);
    }
  };

  const passwordStrength =
    form.password.length === 0
      ? 0
      : form.password.length < 6
        ? 1
        : form.password.length < 10
          ? 2
          : 3;

  const strengthColors = ["", "bg-red-400", "bg-orange-400", "bg-green-500"];
  const strengthLabels = ["", "Weak", "Good", "Strong"];

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="brand-panel rounded-[2rem] overflow-hidden">
          <div className="h-2 brand-gradient" />

          <div className="px-8 py-10">
            <div className="text-center mb-8">
              <span className="text-3xl font-bold text-brand-700 font-serif tracking-[0.3em]">
                JGDB
              </span>
              <span className="block text-xs tracking-[0.35em] text-gray-400 uppercase mt-1">
                Footwear
              </span>
              <h1 className="text-xl font-bold text-brand-ink mt-4">
                Create Account
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Join the JGDB Footwear family
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 mb-6 text-center">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-600 text-sm rounded-xl px-4 py-3 mb-6 text-center flex items-center justify-center gap-2">
                <FiCheck size={16} /> {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-brand-ink uppercase tracking-[0.24em] mb-1.5 block">
                  Full Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    required
                    placeholder="Rahul Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="brand-input w-full pl-10 pr-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-brand-ink uppercase tracking-[0.24em] mb-1.5 block">
                  Email
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="brand-input w-full pl-10 pr-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-brand-ink uppercase tracking-[0.24em] mb-1.5 block">
                  Phone (Optional)
                </label>
                <div className="relative">
                  <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="brand-input w-full pl-10 pr-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-brand-ink uppercase tracking-[0.24em] mb-1.5 block">
                  Password
                </label>
                <div className="relative">
                  <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type={showPass ? "text" : "password"}
                    required
                    placeholder="Min 6 characters"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="brand-input w-full pl-10 pr-10 py-3 rounded-xl text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-ink"
                  >
                    {showPass ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                  </button>
                </div>
                {form.password.length > 0 && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex gap-1 flex-1">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                            i <= passwordStrength
                              ? strengthColors[passwordStrength]
                              : "bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span
                      className={`text-xs font-semibold ${
                        passwordStrength === 1
                          ? "text-red-500"
                          : passwordStrength === 2
                            ? "text-orange-500"
                            : "text-green-500"
                      }`}
                    >
                      {strengthLabels[passwordStrength]}
                    </span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full brand-button font-bold py-3.5 rounded-xl text-sm tracking-[0.28em] uppercase disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Already have an account?{" "}
              <Link href="/login" className="brand-link font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
