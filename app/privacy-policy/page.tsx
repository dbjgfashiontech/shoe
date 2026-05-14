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
        <p className="text-gray-400 text-sm mb-4">Last Updated: 3rd March 2026</p>
        <div className="w-16 h-1 rounded-full brand-gradient" />
        <p className="text-gray-600 mt-4 leading-relaxed text-sm">
          JGDB Footwear Private Limited values your privacy and is committed to
          protecting your personal data.
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
                  "Personal details (Name, Email, Phone Number, Address)",
                  "Payment information (processed securely via third-party gateways)",
                  "Device and browsing data (IP address, browser type, cookies)",
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
                  "Process orders and deliver products",
                  "Communicate order updates",
                  "Improve our website and services",
                  "Send promotional offers (only if opted-in)",
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
            title: "3. Sharing of Information",
            content: (
              <div>
                <p className="text-gray-600 text-sm mb-3">We may share it with:</p>
                <ul className="space-y-1.5 mb-3">
                  {[
                    "Payment gateways",
                    "Logistics partners",
                    "Legal authorities if required",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-brand-600 rounded-full shrink-0 mt-1.5" />
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-2 rounded-lg inline-block">
                  We do not sell your data.
                </p>
              </div>
            ),
          },
          {
            icon: <FiLock className="text-brand-700" size={22} />,
            title: "4. Data Security",
            content: (
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  We implement appropriate security measures to protect your
                  data.
                </p>
                <p className="text-gray-400 text-xs">
                  No method of transmission over the internet is 100% secure.
                </p>
              </div>
            ),
          },
          {
            icon: <FiSettings className="text-brand-700" size={22} />,
            title: "5. Cookies",
            content: (
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  We use cookies to enhance user experience and analyze website
                  traffic.
                </p>
              </div>
            ),
          },
          {
            icon: <FiUser className="text-brand-700" size={22} />,
            title: "6. Your Rights",
            content: (
              <div>
                <p className="text-gray-600 text-sm mb-3">You may:</p>
                <ul className="space-y-1.5">
                  {[
                    "Request access to your data",
                    "Request correction or deletion",
                    "Opt out of marketing communications",
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
              <div className="space-y-1 text-sm text-gray-600">
                <p>JGDB Footwear Private Limited</p>
                <p>House No 126, Ward No. 6, Mata Gate, Jhajjar, Haryana - 124103</p>
                <p>India</p>
                <a
                  href="mailto:info@jgdbfootwear.com"
                  className="brand-link font-semibold text-sm"
                >
                  info@jgdbfootwear.com
                </a>
                <p>Phone: 9896836869</p>
              </div>
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
          <a
            href="mailto:info@jgdbfootwear.com"
            className="brand-link text-sm font-semibold"
          >
            info@jgdbfootwear.com
          </a>
        </div>
      </div>
    </div>
  );
}
