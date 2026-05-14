import Link from "next/link";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-red-100 bg-white text-brand-ink">
      <div className="h-1 brand-gradient" />
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="mb-3">
            <span className="text-2xl font-bold text-brand-700 font-serif tracking-[0.3em]">
              DBJG
            </span>
            <span className="block text-xs tracking-[0.35em] text-gray-500 uppercase mt-1">
              Fashion Private Limited
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Bringing premium fashion to every doorstep.
          </p>
          <div className="flex gap-3 mt-5">
            {[{ icon: <FaInstagram />, label: "Instagram" }].map((s) => (
              <a
                key={s.label}
                href="https://www.instagram.com/dgjb_fashion_"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-red-100 bg-white text-brand-700 flex items-center justify-center hover:border-brand-700 hover:bg-red-50"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-brand-700 font-semibold uppercase tracking-[0.28em] text-xs mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "Men", href: "/#men" },
              { label: "Women", href: "/#women" },
              { label: "Accessories", href: "/#accessories" },
              { label: "About Us", href: "/about" },
              { label: "Cart", href: "/cart" },
            ].map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-gray-600 hover:text-brand-700">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-brand-700 font-semibold uppercase tracking-[0.28em] text-xs mb-4">
            Account
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Login", href: "/login" },
              { label: "Register", href: "/register" },
            ].map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-gray-600 hover:text-brand-700">
                  {l.label}
                </Link>
              </li>
            ))}
            {[
              { label: "Terms & Conditions", href: "/terms-conditions" },
              { label: "Shipping Policy", href: "/shipping-policy" },
              { label: "Return Policy", href: "/return-policy" },
              { label: "Privacy Policy", href: "/privacy-policy" },
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-gray-600 hover:text-brand-700">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-brand-700 font-semibold uppercase tracking-[0.28em] text-xs mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2 items-start">
              <FiMapPin className="mt-0.5 shrink-0 text-brand-700" />
              <span className="text-gray-600">
                House No 126, Ward No. 6, Mata Gate, Jhajjar, Haryana - 124103
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <FiPhone className="shrink-0 text-brand-700" />
              <a href="tel:+918708813685" className="text-gray-600 hover:text-brand-700">
                +91 8708813685
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FiMail className="shrink-0 text-brand-700" />
              <a
                href="mailto:info@dbjgfashion.com"
                className="text-gray-600 hover:text-brand-700"
              >
                info@dbjgfashion.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 text-center text-xs text-gray-500 py-4">
        Copyright {new Date().getFullYear()} DBJG Fashion Private Limited. All
        rights reserved.
      </div>
    </footer>
  );
}
