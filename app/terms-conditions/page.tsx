import {
  FiFileText,
  FiShield,
  FiShoppingBag,
  FiCreditCard,
  FiTruck,
  FiRefreshCw,
  FiLock,
  FiUser,
  FiAlertTriangle,
  FiPhone,
  FiSlash,
  FiGlobe,
} from "react-icons/fi";

export default function TermsConditionsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-12">
        <p className="text-xs text-brand-700 tracking-[0.4em] uppercase font-semibold mb-3">
          Legal
        </p>

        <h1 className="text-4xl font-bold text-brand-ink font-serif mb-4">
          Terms & Conditions
        </h1>

        <div className="flex items-center gap-3 text-sm text-gray-500 mb-5">
          <span className="bg-red-50 text-brand-700 px-3 py-1 rounded-full font-medium">
            Last Updated: 04th April 2026
          </span>
        </div>

        <p className="text-gray-600 leading-relaxed max-w-2xl">
          Welcome to <span className="font-semibold text-brand-ink">DBJG Fashion</span>.
          These Terms and Conditions govern your use of our website and
          services. By accessing or purchasing from our website, you agree to
          comply with these Terms.
        </p>

        <div className="w-16 h-1 rounded-full brand-gradient mt-5" />
      </div>

      <div className="space-y-8">
        {[
          {
            icon: <FiFileText className="text-brand-700" size={22} />,
            title: "1. General",
            content: (
              <ul className="space-y-2">
                {[
                  "This website is operated by DBJG Fashion.",
                  "You must be at least 15 years old or using the website under parental supervision.",
                  "We reserve the right to update or modify these Terms at any time.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            ),
          },
          {
            icon: <FiShoppingBag className="text-brand-700" size={22} />,
            title: "2. Products & Services",
            content: (
              <ul className="space-y-2">
                {[
                  "All products are subject to availability.",
                  "Product colors/images may vary depending on device screens.",
                  "We reserve the right to discontinue products without notice.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            ),
          },
          {
            icon: <FiCreditCard className="text-brand-700" size={22} />,
            title: "3. Pricing & Payments",
            content: (
              <div className="space-y-3">
                {[
                  "All prices are listed in INR and GST details will be specified where applicable.",
                  "Prices may change without prior notice.",
                  "Payments are accepted through approved methods like UPI, Debit/Credit Cards, Net Banking, and Wallets.",
                  "DBJG Fashion is not responsible for payment failures caused by third-party gateways.",
                ].map((item) => (
                  <div key={item} className="bg-red-50 border border-red-100 rounded-xl p-4 text-sm text-gray-700">
                    {item}
                  </div>
                ))}
              </div>
            ),
          },
          {
            icon: <FiShoppingBag className="text-brand-700" size={22} />,
            title: "4. Orders",
            content: (
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Once an order is placed, you will receive confirmation via
                  email or SMS.
                </p>
                <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                  <p className="text-sm font-semibold text-red-700 mb-3">
                    Orders may be cancelled due to:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Product unavailability",
                      "Pricing errors",
                      "Suspicious or fraudulent activity",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-gray-600">
                  If an order is cancelled after payment, a refund will be
                  processed.
                </p>
              </div>
            ),
          },
          {
            icon: <FiTruck className="text-brand-700" size={22} />,
            title: "5. Shipping & Delivery",
            content: (
              <ul className="space-y-2">
                {[
                  "Delivery timelines are estimates and may vary.",
                  "DBJG Fashion is not liable for delays caused by logistics partners.",
                  "Shipping charges (if applicable) will be displayed during checkout.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            ),
          },
          {
            icon: <FiRefreshCw className="text-brand-700" size={22} />,
            title: "6. Returns & Refunds",
            content: (
              <div className="space-y-3">
                {[
                  "Returns are accepted only according to our Return Policy.",
                  "Products must be unused and returned with original packaging and tags.",
                  "Refunds are processed within 15 business days after approval.",
                  "Certain items like innerwear or sale products may not be eligible for return.",
                ].map((item) => (
                  <div key={item} className="border border-red-100 rounded-xl p-4 bg-white text-sm text-gray-700">
                    {item}
                  </div>
                ))}
              </div>
            ),
          },
          {
            icon: <FiShield className="text-brand-700" size={22} />,
            title: "7. Intellectual Property",
            content: (
              <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                <p className="text-gray-700 text-sm leading-relaxed">
                  All images, logos, graphics, text, and website content are
                  the intellectual property of <span className="text-brand-ink font-semibold">DBJG Fashion</span>.
                  Unauthorized use, reproduction, or distribution is strictly
                  prohibited.
                </p>
              </div>
            ),
          },
          {
            icon: <FiUser className="text-brand-700" size={22} />,
            title: "8. User Conduct",
            content: (
              <div>
                <p className="text-gray-600 mb-3 text-sm">You agree not to:</p>
                <ul className="space-y-2">
                  {[
                    "Use the website for unlawful activities",
                    "Upload harmful or malicious content",
                    "Attempt unauthorized access to our systems",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ),
          },
          {
            icon: <FiLock className="text-brand-700" size={22} />,
            title: "9. Privacy",
            content: (
              <p className="text-gray-600 leading-relaxed text-sm">
                Your personal information is governed by our Privacy Policy. We
                are committed to protecting your data in accordance with
                applicable Indian laws.
              </p>
            ),
          },
          {
            icon: <FiAlertTriangle className="text-brand-700" size={22} />,
            title: "10. Limitation of Liability",
            content: (
              <div className="space-y-3">
                <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                  <p className="text-sm text-gray-700">
                    DBJG Fashion shall not be liable for indirect, incidental,
                    or consequential damages arising from website or product
                    usage.
                  </p>
                </div>
                <div className="bg-white border border-red-100 rounded-xl p-4">
                  <p className="text-sm text-gray-700">
                    Our total liability shall not exceed the amount paid for
                    the purchased product.
                  </p>
                </div>
              </div>
            ),
          },
          {
            icon: <FiGlobe className="text-brand-700" size={22} />,
            title: "11. Governing Law",
            content: (
              <div className="space-y-3">
                <p className="text-gray-600 text-sm">
                  These Terms shall be governed by the laws of India.
                </p>
                <div className="bg-white border border-red-100 rounded-xl p-4">
                  <p className="text-sm text-gray-700">
                    Any disputes shall be subject to the jurisdiction of courts
                    in <span className="font-semibold text-brand-ink">Bhubaneswar, Odisha</span>.
                  </p>
                </div>
              </div>
            ),
          },
          {
            icon: <FiPhone className="text-brand-700" size={22} />,
            title: "12. Contact Information",
            content: (
              <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                <p className="text-sm text-gray-700 mb-3">
                  For questions regarding these Terms, contact us:
                </p>
                <a href="mailto:info@dgjbfashion.com" className="brand-link font-semibold text-sm">
                  info@dgjbfashion.com
                </a>
              </div>
            ),
          },
          {
            icon: <FiAlertTriangle className="text-brand-700" size={22} />,
            title: "13. Force Majeure",
            content: (
              <p className="text-gray-600 leading-relaxed text-sm">
                DBJG Fashion shall not be held responsible for delays or
                failure caused by events beyond our control, including natural
                disasters, pandemics, strikes, or government restrictions.
              </p>
            ),
          },
          {
            icon: <FiSlash className="text-brand-700" size={22} />,
            title: "14. Termination",
            content: (
              <p className="text-gray-600 leading-relaxed text-sm">
                We reserve the right to terminate or suspend access to our
                website immediately without prior notice for violations of these
                Terms.
              </p>
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

        <div className="brand-panel rounded-[1.5rem] p-8 text-center border-t-4 border-t-brand-600">
          <FiShield className="text-brand-700 mx-auto mb-4" size={28} />
          <h3 className="text-brand-ink text-lg font-semibold mb-2">
            Thank You for Trusting DBJG Fashion
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto">
            By continuing to use our website, you acknowledge that you have
            read, understood, and agreed to these Terms & Conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
