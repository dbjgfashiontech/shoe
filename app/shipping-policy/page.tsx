import {
  FiTruck,
  FiClock,
  FiMapPin,
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
        <div className="w-16 h-1 rounded-full brand-gradient" />
      </div>

      <div className="space-y-8">
        {[
          {
            icon: <FiMapPin className="text-brand-700" size={22} />,
            title: "1. Shipping Coverage",
            content: (
              <p className="text-gray-600 leading-relaxed">
                We deliver across <span className="font-semibold text-brand-ink">India</span> from metro cities to remote locations.
              </p>
            ),
          },
          {
            icon: <FiClock className="text-brand-700" size={22} />,
            title: "2. Processing Time",
            content: (
              <p className="text-gray-600 leading-relaxed">
                Orders are processed within{" "}
                <span className="font-semibold text-brand-ink">1-3 business days</span>{" "}
                after confirmation.
              </p>
            ),
          },
          {
            icon: <FiTruck className="text-brand-700" size={22} />,
            title: "3. Delivery Time",
            content: (
              <ul className="space-y-2">
                {[
                  ["Metro cities", "3-5 business days"],
                  ["Non-metro areas", "5-8 business days"],
                  ["Remote locations", "May take longer"],
                ].map(([place, time]) => (
                  <li key={place} className="flex justify-between items-center py-2 border-b border-red-50 last:border-0">
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
            title: "4. Shipping Charges",
            content: (
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-green-50 border border-green-100 rounded-xl p-4 gap-3">
                  <span className="text-gray-700 font-medium">Orders above Rs.5,000</span>
                  <span className="text-green-700 font-bold text-sm bg-green-100 px-3 py-1 rounded-full">
                    FREE Shipping
                  </span>
                </div>
                <div className="flex items-center justify-between bg-red-50 border border-red-100 rounded-xl p-4 gap-3">
                  <span className="text-gray-700 font-medium">Orders below Rs.5,000</span>
                  <span className="text-brand-700 font-bold text-sm bg-white px-3 py-1 rounded-full">
                    Rs.250 flat fee
                  </span>
                </div>
              </div>
            ),
          },
          {
            icon: <FiPackage className="text-brand-700" size={22} />,
            title: "5. Order Tracking",
            content: (
              <p className="text-gray-600 leading-relaxed">
                Tracking details will be shared via{" "}
                <span className="font-semibold text-brand-ink">SMS/email</span> after dispatch.
              </p>
            ),
          },
          {
            icon: <FiAlertCircle className="text-brand-700" size={22} />,
            title: "6. Delays",
            content: (
              <div>
                <p className="text-gray-600 mb-3">Delivery may be delayed due to:</p>
                <ul className="space-y-1.5">
                  {["Weather conditions", "Logistics issues", "Public holidays or strikes"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-brand-600 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ),
          },
          {
            icon: <FiTruck className="text-brand-700" size={22} />,
            title: "7. Failed Deliveries",
            content: (
              <div>
                <p className="text-gray-600 mb-3">
                  If delivery fails due to incorrect address or unavailability:
                </p>
                <ul className="space-y-1.5">
                  {["Re-delivery may be attempted", "Additional charges may apply"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-brand-600 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ),
          },
          {
            icon: <FiAlertCircle className="text-brand-700" size={22} />,
            title: "8. Damaged Packages",
            content: (
              <ul className="space-y-1.5">
                {[
                  "Do not accept visibly damaged packages.",
                  "Report immediately to our support team.",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
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
          <a href="mailto:info@DBJGfashion.com" className="brand-link text-sm font-semibold">
            info@DBJGfashion.com
          </a>
        </div>
      </div>
    </div>
  );
}
