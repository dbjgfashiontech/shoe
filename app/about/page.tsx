import { FiMapPin, FiPhone, FiAward, FiHeart, FiTruck } from "react-icons/fi";

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-red-100" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgba(216,35,42,0.14), transparent 24%), linear-gradient(135deg, rgba(255,255,255,0.35) 25%, transparent 25%)",
            backgroundSize: "auto, 28px 28px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-brand-700 text-xs tracking-[0.4em] uppercase font-semibold mb-4">
            About Us
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-ink font-serif mb-5">
            Our Story
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Welcome to JGDB Footwear Private Limited, a trusted footwear
            company based in Haryana, India.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-brand-700 text-xs tracking-[0.4em] uppercase font-semibold mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl font-bold text-brand-ink font-serif mb-5 leading-snug">
            JGDB Footwear Private Limited
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            JGDB Footwear Private Limited is dedicated to delivering
            high-quality, stylish, and comfortable footwear for everyday use.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Founded with a vision to combine durability, design, and
            affordability, we strive to create footwear that meets the evolving
            needs of modern consumers. Whether it is casual wear, daily
            essentials, or trend-focused designs, our products are crafted with
            attention to detail and quality materials.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              icon: <FiAward className="text-brand-700" size={22} />,
              title: "Quality Craftsmanship",
              desc: "We focus on high product standards, comfort, and durable footwear.",
            },
            {
              icon: <FiHeart className="text-brand-700" size={22} />,
              title: "Customer First",
              desc: "Affordable pricing and customer satisfaction remain at the center of our work.",
            },
            {
              icon: <FiTruck className="text-brand-700" size={22} />,
              title: "Reliable Delivery",
              desc: "We are committed to reliable delivery, service, and continuously improving our designs.",
            },
          ].map((v) => (
            <div key={v.title} className="brand-panel flex gap-4 rounded-[1.5rem] p-5">
              <div className="mt-0.5 shrink-0">{v.icon}</div>
              <div>
                <h3 className="font-semibold text-brand-ink text-sm mb-1">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-4">
        <div className="max-w-5xl mx-auto brand-panel rounded-[2rem] py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-brand-700 text-xs tracking-[0.4em] uppercase font-semibold mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl font-bold text-brand-ink font-serif mb-8">
              Visit or Contact Us
            </h2>
            <div className="bg-red-50 border border-red-100 rounded-[1.75rem] p-8 text-left space-y-5">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 border border-red-100">
                  <FiMapPin className="text-brand-700" size={18} />
                </div>
                <div>
                  <p className="text-brand-ink font-semibold text-sm mb-1">
                    Registered Address
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    House No 126, Ward No. 6, Mata Gate,
                    <br />
                    Jhajjar, Haryana - 124103
                    <br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 border border-red-100">
                  <FiPhone className="text-brand-700" size={18} />
                </div>
                <div>
                  <p className="text-brand-ink font-semibold text-sm mb-1">
                    Mobile / WhatsApp
                  </p>
                  <a
                    href="tel:+919896836869"
                    className="text-brand-700 text-sm hover:text-brand-800"
                  >
                    +91 9896836869
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
