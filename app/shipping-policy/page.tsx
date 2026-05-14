import {
  FiTruck,
  FiClock,
  FiAlertCircle,
  FiPackage,
  FiPhone,
} from "react-icons/fi";

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-12">
        <p className="text-xs text-brand-700 tracking-[0.4em] uppercase font-semibold mb-3">
          Legal
        </p>
        <h1 className="text-4xl font-bold text-brand-ink font-serif mb-4">
          Shipping Policy
        </h1>
        <p className="text-gray-400 text-sm mb-4">Last Updated: 3rd March 2026</p>
        <div className="w-16 h-1 rounded-full brand-gradient" />
      </div>

      <div className="space-y-8">
        {[
          {
            icon: <FiClock className="text-brand-700" size={22} />,
            title: "1. Order Processing",
            content: (
              <p className="text-gray-600 leading-relaxed">
                Orders are processed within{" "}
                <span className="font-semibold text-brand-ink">1-3 business days</span>.
              </p>
            ),
          },
          {
            icon: <FiTruck className="text-brand-700" size={22} />,
            title: "2. Delivery Timeline",
            content: (
              <ul className="space-y-2">
                {[
                  ["Estimated delivery", "3-7 business days"],
                  ["Note", "Delivery times may vary based on location"],
                ].map(([place, time]) => (
                  <li key={place} className="flex justify-between items-center py-2 border-b border-red-50 last:border-0 gap-3">
                    <span className="text-gray-600">{place}</span>
                    <span className="text-sm font-semibold text-brand-ink bg-red-50 px-3 py-1 rounded-full">
                      {time}
                    </span>
                  </li>
                ))}
              </ul>
            ),
          },
          {
            icon: <span className="text-brand-700 text-xl font-bold">Rs</span>,
            title: "3. Shipping Charges",
            content: (
              <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                <p className="text-gray-700 font-medium">
                  Shipping charges (if any) will be displayed at checkout.
                </p>
              </div>
            ),
          },
          {
            icon: <FiAlertCircle className="text-brand-700" size={22} />,
            title: "4. Delays",
            content: (
              <div>
                <p className="text-gray-600 mb-3">
                  We are not responsible for delays caused by:
                </p>
                <ul className="space-y-1.5">
                  {["Courier partners", "Natural disasters", "Unforeseen circumstances"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-brand-600 rounded-full shrink-0" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            ),
          },
          {
            icon: <FiPackage className="text-brand-700" size={22} />,
            title: "5. Contact",
            content: (
              <div className="space-y-1 text-sm text-gray-600">
                <p>JGDB Footwear Private Limited</p>
                <p>Email: info@jgdbfootwear.com</p>
                <p>Phone: 9896836869</p>
              </div>
            ),
          },
        ].map((section) => (
          <div key={section.title} className="brand-panel rounded-[1.5rem] p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                {section.icon}
              </div>
              <h2 className="text-lg font-bold text-brand-ink">{section.title}</h2>
            </div>
            {section.content}
          </div>
        ))}

        <div className="brand-panel rounded-[1.5rem] p-6 text-center border-t-4 border-t-brand-600">
          <FiPhone className="text-brand-700 mx-auto mb-3" size={24} />
          <p className="text-brand-ink font-semibold mb-1">Need Help?</p>
          <p className="text-gray-600 text-sm mb-3">Reach out to our support team</p>
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
