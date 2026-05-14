import {
  FiShield,
  FiEye,
  FiShare2,
  FiLock,
  FiSettings,
  FiUser,
  FiMail,
} from "react-icons/fi";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-12">
        <p className="text-xs text-brand-700 tracking-[0.4em] uppercase font-semibold mb-3">
          Legal
        </p>
        <h1 className="text-4xl font-bold text-brand-ink font-serif mb-2">
          Privacy Policy
        </h1>
        <div className="w-16 h-1 rounded-full brand-gradient" />
        <p className="text-gray-600 mt-4 leading-relaxed text-sm">
          At DBJG Fashion, we respect your privacy and are committed to
          protecting your personal data in accordance with applicable Indian
          laws, including the Information Technology Act, 2000.
        </p>
      </div>

      <div className="space-y-6">
        {[
          {
            icon: <FiEye className="text-brand-700" size={22} />,
            title: "1. Information We Collect",
            content: (
              <ul className="space-y-1.5">
                {[
                  "Name, phone number, email address",
                  "Shipping/billing address",
                  "Payment details (processed securely via third-party gateways)",
                  "Device and browsing information",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-brand-600 rounded-full shrink-0 mt-1.5" />
                    {i}
                  </li>
                ))}
              </ul>
            ),
          },
          {
            icon: <FiSettings className="text-brand-700" size={22} />,
            title: "2. How We Use Your Information",
            content: (
              <ul className="space-y-1.5">
                {[
                  "To process and deliver orders",
                  "To communicate order updates",
                  "To improve our website and services",
                  "To send promotional offers (only with consent)",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-brand-600 rounded-full shrink-0 mt-1.5" />
                    {i}
                  </li>
                ))}
              </ul>
            ),
          },
          {
            icon: <FiShare2 className="text-brand-700" size={22} />,
            title: "3. Data Sharing",
            content: (
              <div>
                <p className="text-gray-600 text-sm mb-3">
                  We may share your data with:
                </p>
                <ul className="space-y-1.5 mb-3">
                  {[
                    "Payment gateway providers",
                    "Logistics/delivery partners",
                    "Legal authorities (if required by law)",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-brand-600 rounded-full shrink-0 mt-1.5" />
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-2 rounded-lg inline-block">
                  We do not sell your personal data.
                </p>
              </div>
            ),
          },
          {
            icon: <FiLock className="text-brand-700" size={22} />,
            title: "4. Data Security",
            content: (
              <div className="space-y-2 text-sm text-gray-600">
                <p>We implement reasonable security measures to protect your data.</p>
                <p className="text-gray-400 text-xs">
                  Note: No online transmission is 100% secure.
                </p>
              </div>
            ),
          },
          {
            icon: <FiSettings className="text-brand-700" size={22} />,
            title: "5. Cookies",
            content: (
              <div className="space-y-2 text-sm text-gray-600">
                <p>We use cookies to enhance user experience and analyze traffic.</p>
                <p>You can disable cookies via your browser settings.</p>
              </div>
            ),
          },
          {
            icon: <FiUser className="text-brand-700" size={22} />,
            title: "6. Your Rights",
            content: (
              <div>
                <p className="text-gray-600 text-sm mb-3">You have the right to:</p>
                <ul className="space-y-1.5">
                  {[
                    "Access or update your information",
                    "Request deletion of your data",
                    "Opt-out of marketing communications",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-brand-600 rounded-full shrink-0 mt-1.5" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ),
          },
          {
            icon: <FiShield className="text-brand-700" size={22} />,
            title: "7. Contact Us",
            content: (
              <a href="mailto:info@dgjbfashion.com" className="brand-link font-semibold text-sm">
                info@dgjbfashion.com
              </a>
            ),
          },
        ].map((s) => (
          <div key={s.title} className="brand-panel rounded-[1.5rem] p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                {s.icon}
              </div>
              <h2 className="text-lg font-bold text-brand-ink">{s.title}</h2>
            </div>
            {s.content}
          </div>
        ))}

        <div className="brand-panel rounded-[1.5rem] p-6 text-center border-t-4 border-t-brand-600">
          <FiMail className="text-brand-700 mx-auto mb-3" size={24} />
          <p className="text-brand-ink font-semibold mb-1">Privacy Concerns?</p>
          <a href="mailto:info@dgjbfashion.com" className="brand-link text-sm font-semibold">
            info@dgjbfashion.com
          </a>
        </div>
      </div>
    </div>
  );
}
