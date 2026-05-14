"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FiShoppingCart,
  FiMenu,
  FiX,
  FiLogOut,
  FiChevronDown,
} from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Men", href: "/#men" },
  { label: "Women", href: "/#women" },
  { label: "About Us", href: "/about" },
];

export default function Header() {
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    setDropOpen(false);
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-red-100/80 bg-white/95 shadow-[0_10px_32px_rgba(127,29,29,0.08)] backdrop-blur">
      <div className="brand-gradient text-center text-xs py-2 font-semibold tracking-[0.28em] uppercase text-white">
        Free Shipping on Orders Above Rs.1999 | Call: +91 9896836869
      </div>

      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-18">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-[0.35em] text-brand-700 font-serif">
            JGDB
          </span>
          <span className="text-[10px] tracking-[0.38em] text-gray-500 uppercase mt-1">
            Footwear
          </span>
        </Link>

        <nav className="hidden md:flex gap-7 items-center">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-gray-600 hover:text-brand-700 text-sm font-semibold tracking-wide"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative text-gray-500 hover:text-brand-700">
            <FiShoppingCart size={21} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-sm">
                {totalItems}
              </span>
            )}
          </Link>

          <Link
            href="/my-orders"
            className="hidden sm:block text-sm font-semibold text-gray-600 hover:text-brand-700"
          >
            My Orders
          </Link>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropOpen(!dropOpen)}
                className="flex items-center gap-1.5 text-gray-600 hover:text-brand-700 text-sm"
              >
                <div className="w-8 h-8 rounded-full brand-gradient flex items-center justify-center text-white font-bold text-xs shadow-sm">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="hidden md:block max-w-[100px] truncate">
                  {user.name}
                </span>
                <FiChevronDown size={14} />
              </button>
              {dropOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-red-100 py-1 z-50 overflow-hidden">
                  <div className="h-1 brand-gradient" />
                  <div className="px-4 py-3 border-b border-red-50">
                    <p className="text-xs font-semibold text-brand-ink truncate">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-400 truncate mt-1">
                      {user.email}
                    </p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <FiLogOut size={14} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="/login"
                className="text-gray-600 hover:text-brand-700 text-sm font-semibold"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="brand-button text-xs font-bold px-4 py-2 rounded-full"
              >
                Register
              </Link>
            </div>
          )}

          <button
            className="md:hidden text-gray-600 hover:text-brand-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-red-100 px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-600 hover:text-brand-700 border-b border-red-50 text-sm font-semibold"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/my-orders"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-gray-600 hover:text-brand-700 border-b border-red-50 text-sm font-semibold"
          >
            My Orders
          </Link>
          {!user && (
            <div className="flex gap-3 pt-3">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center brand-button-secondary py-2.5 rounded-full text-sm font-semibold"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center brand-button py-2.5 rounded-full text-sm font-bold"
              >
                Register
              </Link>
            </div>
          )}
          {user && (
            <button
              onClick={handleLogout}
              className="w-full mt-3 text-red-600 border border-red-200 py-2 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-red-50"
            >
              <FiLogOut size={14} /> Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
