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
            Last Updated: 3rd March 2026
          </span>
        </div>

        <p className="text-gray-600 leading-relaxed max-w-2xl">
          Welcome to{" "}
          <span className="font-semibold text-brand-ink">
            JGDB Footwear Private Limited
          </span>
          . These Terms and Conditions govern your use of our website and
          services. By accessing or using our website, you agree to comply with
          these Terms.
        </p>

        <div className="w-16 h-1 rounded-full brand-gradient mt-5" />
      </div>

      <div className="space-y-8">
        {[
          {
            icon: <FiFileText className="text-brand-700" size={22} />,
            title: "1. Company Information",
            content: (
              <ul className="space-y-2">
                {[
                  "JGDB Footwear Private Limited is a company incorporated under the laws of India, with its registered office in the State of Haryana.",
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
            icon: <FiUser className="text-brand-700" size={22} />,
            title: "2. Use of the Website",
            content: (
              <ul className="space-y-2">
                {[
                  "Use the website only for lawful purposes.",
                  "Do not engage in any activity that disrupts or interferes with the website.",
                  "Do not attempt unauthorized access to any part of the website or systems.",
                  "We reserve the right to suspend or terminate access if these terms are violated.",
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
            title: "3. Products and Services",
            content: (
              <ul className="space-y-2">
                {[
                  "All products listed, including footwear and related items, are subject to availability.",
                  "We reserve the right to modify or discontinue products without prior notice.",
                  "Prices are subject to change at any time without notice.",
                  "We strive to display product details accurately, but descriptions, images, or other content may not be error-free.",
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
            title: "4. Orders and Payments",
            content: (
              <div className="space-y-3">
                {[
                  "By placing an order, you agree that all information provided is accurate and complete.",
                  "We reserve the right to cancel or refuse any order at our discretion.",
                  "Payment must be made through the approved payment methods available on the website.",
                  "In case of cancellation by us, any payment made will be refunded as per our refund policy.",
                ].map((item) => (
                  <div key={item} className="bg-red-50 border border-red-100 rounded-xl p-4 text-sm text-gray-700">
                    {item}
                  </div>
                ))}
              </div>
            ),
          },
          {
            icon: <FiTruck className="text-brand-700" size={22} />,
            title: "5. Shipping and Delivery",
            content: (
              <ul className="space-y-2">
                {[
                  "Delivery timelines are estimates and may vary based on location and external factors.",
                  "We are not liable for delays caused by courier services or unforeseen circumstances.",
                  "Risk of loss passes to the customer upon delivery.",
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
            title: "6. Returns and Refunds",
            content: (
              <div className="space-y-3">
                {[
                  "Returns and refunds are governed by our Return Policy.",
                  "Products must be returned in unused condition with original packaging.",
                  "Refund timelines may vary depending on the payment method.",
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
                  All content on this website, including logos, images, product
                  designs, text, and graphics, is the property of{" "}
                  <span className="text-brand-ink font-semibold">
                    JGDB Footwear Private Limited
                  </span>{" "}
                  and is protected under applicable intellectual property laws.
                  You may not reproduce, distribute, or use any content without
                  prior written consent.
                </p>
              </div>
            ),
          },
          {
            icon: <FiAlertTriangle className="text-brand-700" size={22} />,
            title: "8. Limitation of Liability",
            content: (
              <div className="space-y-3">
                <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                  <p className="text-sm text-gray-700">
                    We shall not be liable for any indirect, incidental, or
                    consequential damages.
                  </p>
                </div>
                <div className="bg-white border border-red-100 rounded-xl p-4">
                  <p className="text-sm text-gray-700">
                    We do not guarantee uninterrupted or error-free website
                    operation. Your use of the website is at your own risk.
                  </p>
                </div>
              </div>
            ),
          },
          {
            icon: <FiLock className="text-brand-700" size={22} />,
            title: "9. User Accounts",
            content: (
              <ul className="space-y-2">
                {[
                  "You are responsible for maintaining confidentiality of your login details.",
                  "You agree to accept responsibility for all activities under your account.",
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
            icon: <FiGlobe className="text-brand-700" size={22} />,
            title: "10. Third-Party Links",
            content: (
              <ul className="space-y-2">
                {[
                  "Our website may contain links to third-party websites.",
                  "We do not control or endorse those websites.",
                  "We are not responsible for their content or practices.",
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
            icon: <FiShield className="text-brand-700" size={22} />,
            title: "11. Privacy",
            content: (
              <p className="text-gray-600 leading-relaxed text-sm">
                Your use of our website is also governed by our Privacy Policy,
                which outlines how we collect and use your data.
              </p>
            ),
          },
          {
            icon: <FiPhone className="text-brand-700" size={22} />,
            title: "12. Governing Law and Jurisdiction",
            content: (
              <div className="space-y-3">
                <p className="text-gray-600 text-sm">
                  These Terms shall be governed by the laws of India.
                </p>
                <div className="bg-white border border-red-100 rounded-xl p-4">
                  <p className="text-sm text-gray-700">
                    Any disputes arising shall be subject to the exclusive
                    jurisdiction of the courts in{" "}
                    <span className="font-semibold text-brand-ink">
                      Haryana, India
                    </span>
                    .
                  </p>
                </div>
              </div>
            ),
          },
          {
            icon: <FiSlash className="text-brand-700" size={22} />,
            title: "13. Changes to Terms",
            content: (
              <p className="text-gray-600 leading-relaxed text-sm">
                We reserve the right to update or modify these Terms at any
                time. Changes will be effective upon posting on this page.
              </p>
            ),
          },
          {
            icon: <FiPhone className="text-brand-700" size={22} />,
            title: "14. Contact Us",
            content: (
              <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                <p className="text-sm text-gray-700 mb-3">
                  For any questions regarding these Terms, please contact:
                </p>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>JGDB Footwear Private Limited</p>
                  <p>House No 126, Ward No. 6, Mata Gate, Jhajjar, Haryana - 124103</p>
                  <p>India</p>
                </div>
                <a
                  href="mailto:info@jgdbfootwear.com"
                  className="brand-link font-semibold text-sm block mt-3"
                >
                  info@jgdbfootwear.com
                </a>
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

        <div className="brand-panel rounded-[1.5rem] p-8 text-center border-t-4 border-t-brand-600">
          <FiShield className="text-brand-700 mx-auto mb-4" size={28} />
          <h3 className="text-brand-ink text-lg font-semibold mb-2">
            Thank You for Trusting JGDB Footwear
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
