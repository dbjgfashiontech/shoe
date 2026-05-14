import {
  FiAlertCircle,
  FiCheckCircle,
  FiXCircle,
  FiRefreshCw,
  FiDollarSign,
  FiMail,
} from "react-icons/fi";

export default function ReturnPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-12">
        <p className="text-xs text-brand-700 tracking-[0.4em] uppercase font-semibold mb-3">
          Legal
        </p>
        <h1 className="text-4xl font-bold text-brand-ink font-serif mb-2">
          Return & Refund Policy
        </h1>
        <p className="text-gray-400 text-sm mb-4">Last Updated: 04th April 2026</p>
        <div className="w-16 h-1 rounded-full brand-gradient" />
        <p className="text-gray-600 mt-4 leading-relaxed">
          At DBJG Fashion, we strive to ensure customer satisfaction. If you
          are not completely satisfied with your purchase, you may request a
          return or refund under the conditions below.
        </p>
      </div>

      <div className="space-y-6">
        {[
          {
            icon: <FiCheckCircle className="text-brand-700" size={22} />,
            title: "1. Return Eligibility",
            content: (
              <div>
                <p className="text-gray-600 text-sm mb-3">
                  Returns must be requested within{" "}
                  <span className="font-semibold text-brand-ink">07 days of delivery</span>.
                  Items must be:
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Unused, unworn, and unwashed",
                    "In original packaging with tags intact",
                    "Free from damage or stains",
                  ].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ),
          },
          {
            icon: <FiXCircle className="text-red-400" size={22} />,
            title: "2. Non-Returnable Items",
            content: (
              <ul className="space-y-1.5">
                {[
                  "Innerwear, lingerie, and accessories",
                  'Items marked as "Non-Returnable" or "Final Sale"',
                  "Gift cards or promotional items",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            ),
          },
          {
            icon: <FiRefreshCw className="text-brand-700" size={22} />,
            title: "3. Return Process",
            content: (
              <div>
                <p className="text-gray-600 text-sm mb-3">
                  Email us at{" "}
                  <a href="mailto:info@dgjbfashion.com" className="brand-link font-semibold">
                    info@dgjbfashion.com
                  </a>{" "}
                  with:
                </p>
                <ul className="space-y-1.5 mb-3">
                  {["Order ID", "Reason for return", "Product images (if damaged/defective)"].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-brand-600 rounded-full shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-xs">
                  Our team will arrange a pickup or guide you for self-shipping.
                </p>
              </div>
            ),
          },
          {
            icon: <FiDollarSign className="text-brand-700" size={22} />,
            title: "4. Refunds",
            content: (
              <div className="space-y-3">
                <p className="text-gray-600 text-sm">
                  Refunds are processed after quality inspection within{" "}
                  <span className="font-semibold text-brand-ink">
                    5-10 business days
                  </span>{" "}
                  after approval.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500 mb-1">Prepaid Orders</p>
                    <p className="text-sm font-semibold text-brand-ink">
                      Original Payment Method
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500 mb-1">COD Orders</p>
                    <p className="text-sm font-semibold text-brand-ink">
                      Bank Transfer / UPI
                    </p>
                  </div>
                </div>
              </div>
            ),
          },
          {
            icon: <FiRefreshCw className="text-brand-700" size={22} />,
            title: "5. Exchange Policy",
            content: (
              <ul className="space-y-1.5">
                {[
                  "Exchanges are subject to product availability.",
                  "If unavailable, a refund will be issued.",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-brand-600 rounded-full shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            ),
          },
          {
            icon: <FiAlertCircle className="text-red-400" size={22} />,
            title: "6. Damaged or Incorrect Products",
            content: (
              <ul className="space-y-1.5">
                {[
                  "Report within 48 hours of delivery.",
                  "Provide clear images/videos for verification.",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
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
          <p className="text-brand-ink font-semibold mb-1">Questions about a return?</p>
          <a href="mailto:info@dgjbfashion.com" className="brand-link text-sm font-semibold">
            info@dgjbfashion.com
          </a>
        </div>
      </div>
    </div>
  );
}
