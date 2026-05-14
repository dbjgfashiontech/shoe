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
        <p className="text-gray-400 text-sm mb-4">Last Updated: 3rd March 2026</p>
        <div className="w-16 h-1 rounded-full brand-gradient" />
      </div>

      <div className="space-y-6">
        {[
          {
            icon: <FiCheckCircle className="text-brand-700" size={22} />,
            title: "1. Returns",
            content: (
              <ul className="space-y-1.5">
                {[
                  "Returns are accepted within 7 days of delivery.",
                  "Products must be unused and in original packaging.",
                  "Items showing signs of wear will not be accepted.",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            ),
          },
          {
            icon: <FiDollarSign className="text-brand-700" size={22} />,
            title: "2. Refunds",
            content: (
              <ul className="space-y-1.5">
                {[
                  "Refunds will be processed after inspection of returned items.",
                  "Refunds will be issued to the original payment method.",
                  "Processing time: 5-10 business days.",
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
            icon: <FiXCircle className="text-red-400" size={22} />,
            title: "3. Non-Returnable Items",
            content: (
              <ul className="space-y-1.5">
                {["Used or damaged products", "Items without original packaging"].map(
                  (i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                      {i}
                    </li>
                  )
                )}
              </ul>
            ),
          },
          {
            icon: <FiRefreshCw className="text-brand-700" size={22} />,
            title: "4. Cancellation",
            content: (
              <ul className="space-y-1.5">
                {[
                  "Orders can be cancelled before shipment.",
                  "Once shipped, cancellation is not allowed.",
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
            icon: <FiAlertCircle className="text-brand-700" size={22} />,
            title: "5. Contact",
            content: (
              <div className="space-y-1 text-sm text-gray-600">
                <p>For return requests:</p>
                <p>Email: info@jgdbfootwear.com</p>
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
          <p className="text-brand-ink font-semibold mb-1">Questions about a return?</p>
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
