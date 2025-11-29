// src/App.jsx
import { useState, useEffect } from "react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const GALLERY = [
    "https://flowerwallvancouver.com/cdn/shop/files/ombre1_800x.jpg?v=1749713745",
    "https://flowerwallvancouver.com/cdn/shop/files/blue_ombre_800x.png?v=1758314713",
    "https://flowerwallvancouver.com/cdn/shop/files/white-flower-wall_800x.jpg?v=1750060307",
    "https://flowerwallvancouver.com/cdn/shop/files/preview-img-big-1_800x.jpg?v=1745233128",
  ];

  // same info as before
  const packages = [
    {
      name: "Pop-up Photo Ops",
      price: "$1,050–$1,200",
      features: [
        "Standard wall (8x8)",
        "Brand acrylic/neon logo signage",
        "Photo props/Fairy Lights",
        "Hosting staff for guest photos and engagement",
      ],
    },
    {
      name: "Corporate Celebration",
      price: "$1,200–$1,350",
      features: [
        "Standard wall (8x8)",
        "Entrance Flower Arch",
        "Marquis letters, signage, balloons",
        "Photo props/LED Lights",
      ],
    },
    {
      name: "Formal Event Package",
      price: "$1,800–$2,150",
      features: [
        "Standard wall (8x8)",
        "LED signage",
        "Photo props",
        "Hosting Staff",
        "Professional Photographer",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Top Bar */}
      <div className="w-full bg-gradient-to-r from-rose-200/70 via-pink-200/60 to-rose-200/70 text-zinc-800 text-sm overflow-hidden relative">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between relative z-10">
          <span className="font-medium">✉︎ info@flowerwallvancouver.com</span>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="hover:text-rose-600 transition-all duration-300 hover:scale-110 inline-block"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-rose-600 transition-all duration-300 hover:scale-110 inline-block"
            >
              TikTok
            </a>
            <a
              href="#"
              className="hover:text-rose-600 transition-all duration-300 hover:scale-110 inline-block"
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-md" : "bg-white/90"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="font-serif text-2xl tracking-tight transform hover:scale-105 transition-transform cursor-pointer">
            FLOWERWALL{" "}
            <span className="font-sans text-sm align-top text-rose-500">
              Vancouver
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-700">
            {["Packages", "Use Cases", "Portfolio", "How It Works", "Service Areas"].map(
              (item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase().replace(/ /g, "")}`}
                  className="relative group"
                >
                  <span className="hover:text-zinc-950 transition-colors">
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-600 group-hover:w-full transition-all duration-300" />
                </a>
              )
            )}
          </nav>
          <a
            href="#quote"
            className="inline-flex items-center rounded-2xl bg-rose-600 px-4 py-2 text-white font-bold shadow-lg hover:shadow-xl hover:bg-rose-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
          >
            Get Instant Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden group">
        <img
          src="https://flowerwallvancouver.com/cdn/shop/files/banner_20.jpg?v=1747916929"
          alt="flower wall hero"
          className="h-[52vh] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-6xl px-4 pb-10 w-full">
            <div className="max-w-2xl rounded-2xl bg-white/90 backdrop-blur-sm p-6 shadow-xl">
              <h1 className="text-3xl md:text-4xl font-serif leading-tight text-zinc-900">
                Flower Wall Rentals in Vancouver — installed on time, every
                time.
              </h1>
              <p className="mt-2 text-zinc-700">
                Pick a look, pick a date, and get a price in 30 seconds.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="#quote"
                  className="group/btn rounded-2xl bg-white px-5 py-2.5 text-rose-600 border-2 border-rose-600 hover:bg-rose-600 hover:text-white font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  <span className="inline-block group-hover/btn:scale-110 transition-transform">
                    Get Instant Quote
                  </span>
                </a>
                <a
                  href="#packages"
                  className="rounded-2xl border-2 border-rose-600 px-5 py-2.5 text-rose-700 hover:bg-rose-50 font-bold transition-all duration-300 hover:border-rose-700"
                >
                  See Packages
                </a>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-700">
                {[
                  "On-Time or $50 Credit",
                  "Fully Installed",
                  "Licensed & Insured",
                ].map((text, idx) => (
                  <span key={idx} className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="border-b bg-gradient-to-r from-white via-rose-50/30 to-white">
        <div className="mx-auto max-w-6xl px-4 py-4 grid grid-cols-2 md:grid-cols-4 items-center gap-4 text-sm">
          <div className="flex items-center gap-2 hover:scale-105 transition-transform cursor-default">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-zinc-900 font-medium">4.9 Google rating</span>
          </div>
          <div className="text-zinc-900 hover:text-rose-600 transition-colors cursor-default">
            Fairmont • Paradox • JW Marriott
          </div>
          <div className="text-zinc-900 hover:text-rose-600 transition-colors cursor-default">
            On-time guarantee
          </div>
          <div className="text-zinc-900 hover:text-rose-600 transition-colors cursor-default">
            Serving GVA & Fraser Valley
          </div>
        </div>
      </section>

      {/* Packages – style like screenshot, info unchanged */}
      <section id="packages" className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-zinc-900">
              Packages
            </h2>
            <p className="mt-1 text-zinc-700 text-sm">
              Transparent pricing with delivery &amp; setup included
            </p>
          </div>
          <a
            href="#quote"
            className="text-rose-700 hover:text-rose-800 text-sm hidden md:flex items-center gap-1 transition-all group"
          >
            Hold Your Date for $50 →
          </a>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {packages.map((p, i) => {
            const isFeatured = i === 1; // middle card slightly highlighted
            return (
              <div
                key={i}
                className={`relative flex flex-col rounded-[28px] border px-7 pt-6 pb-7 shadow-sm transition-all duration-300 bg-white
                ${
                  isFeatured
                    ? "border-rose-500 shadow-md"
                    : "border-zinc-200 hover:border-rose-300 hover:shadow-md"
                }`}
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-600">
                  {p.name}
                </div>

                <div className="mt-2 text-xl md:text-2xl font-bold text-zinc-900">
                  {p.price}
                </div>

                <ul className="mt-4 space-y-2 text-sm text-zinc-700 mb-6">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 mt-0.5 text-rose-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-auto w-full rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white hover:bg-rose-700 transition-all duration-300 shadow-md hover:shadow-lg">
                  Select Package
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-sm text-zinc-700 bg-gradient-to-r from-zinc-50 via-rose-50/30 to-zinc-50 p-5 rounded-2xl border border-zinc-200 hover:border-rose-300 transition-all duration-300 hover:shadow-md">
          <span className="font-semibold text-zinc-900">Need something custom?</span>{" "}
          Ask about modular walls, arches, tunnels, and brand signage.
        </div>
      </section>

      {/* Use Cases */}
      <section
        id="usecases"
        className="bg-gradient-to-b from-rose-50/40 to-white border-y"
      >
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-serif text-zinc-900">
            Popular Setups
          </h2>
          <p className="mt-1 text-zinc-600">Perfect for every occasion</p>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Weddings", img: GALLERY[0], icon: "💐", color: "rose" },
              { title: "Corporate", img: GALLERY[1], icon: "💼", color: "blue" },
              { title: "Birthdays", img: GALLERY[2], icon: "🎉", color: "pink" },
              {
                title: "Hotels & Lobbies",
                img: GALLERY[3],
                icon: "🏨",
                color: "purple",
              },
            ].map((c, i) => (
              <a
                key={i}
                href="#quote"
                className="group overflow-hidden rounded-2xl border-2 border-zinc-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:border-rose-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-36 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-2 right-2 text-3xl transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                    {c.icon}
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-semibold text-lg text-zinc-900 group-hover:text-rose-600 transition-colors">
                    {c.title}
                  </div>
                  <div className="text-sm text-zinc-600 mt-1 flex items-center gap-1 group-hover:gap-2 transition-all">
                    See looks &amp; pricing
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Instant Quote */}
      <section id="quote" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border-2 border-rose-200 bg-gradient-to-br from-rose-50 via-white to-pink-50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-serif text-zinc-900">
              Get Your Instant Quote
            </h3>
            <p className="text-zinc-600 mt-2">
              Date &amp; Location → Wall &amp; Size → Add-ons → Price + $50
              deposit
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="group">
              <label className="text-sm font-semibold text-zinc-800 block mb-2">
                Event date
              </label>
              <input
                type="date"
                className="w-full rounded-xl border-2 border-zinc-200 px-4 py-3 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all hover:border-rose-300"
              />
            </div>
            <div className="group">
              <label className="text-sm font-semibold text-zinc-800 block mb-2">
                City
              </label>
              <select className="w-full rounded-xl border-2 border-zinc-200 px-4 py-3 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all hover:border-rose-300 cursor-pointer">
                <option>Vancouver</option>
                <option>Burnaby</option>
                <option>Richmond</option>
                <option>Surrey</option>
                <option>Coquitlam</option>
              </select>
            </div>
            <div className="group">
              <label className="text-sm font-semibold text-zinc-800 block mb-2">
                Package
              </label>
              <select className="w-full rounded-xl border-2 border-zinc-200 px-4 py-3 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all hover:border-rose-300 cursor-pointer">
                <option>Pop-up Photo Ops</option>
                <option>Corporate Celebration</option>
                <option>Formal Event Package</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 px-6 py-3 text-white font-bold shadow-lg hover:shadow-xl hover:from-rose-700 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
                Get Price Now
              </button>
            </div>
          </div>
          <div className="mt-5 text-center bg-white/80 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-sm text-zinc-700">
              <span className="font-semibold text-rose-700">
                Hold your date for just $50
              </span>{" "}
              — fully applied to your total, refundable up to 14 days prior.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-serif text-zinc-900">
          Recent Installs
        </h2>
        <p className="mt-1 text-zinc-600">
          See what we've created for our clients
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY.map((src, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(src)}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
            >
              <img
                src={src}
                alt={`flower wall ${i + 1}`}
                className="aspect-square w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <button className="text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40 hover:bg-white/30 transition-all">
                  View Full Size
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-rose-400 transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* How It Works */}
      <section
        id="howitworks"
        className="bg-gradient-to-b from-zinc-50 to-white border-y"
      >
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-serif text-zinc-900 text-center">
            How It Works
          </h2>
          <p className="text-center text-zinc-700 text-sm mt-1">
            Four simple steps to your perfect flower wall
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Pick a look",
                desc: "Choose a package and any add-ons that match your vision.",
              },
              {
                step: "2",
                title: "Get your price",
                desc: "Enter date & location for an instant, transparent quote.",
              },
              {
                step: "3",
                title: "We install",
                desc: "Delivery, professional setup, and teardown all included.",
              },
              {
                step: "4",
                title: "Shine",
                desc: "On-time or $50 credit — guaranteed.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="group rounded-2xl border-2 border-zinc-200 bg-white p-6 hover:border-rose-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 text-rose-600 font-bold text-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                  {s.step}
                </div>
                <div className="font-semibold text-lg text-zinc-900 group-hover:text-rose-600 transition-colors">
                  {s.title}
                </div>
                <div className="mt-2 text-sm text-zinc-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas & Footer */}
      <footer id="serviceareas" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl bg-gradient-to-br from-rose-100 via-pink-50 to-rose-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-rose-200">
          <div className="font-semibold text-lg text-zinc-900">
            Service Areas
          </div>
          <p className="text-zinc-700 mt-2 leading-relaxed">
            Vancouver • Burnaby • Richmond • Surrey • Coquitlam • North
            Vancouver • West Vancouver • Langley • New Westminster • Delta
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-zinc-700">
          <div className="group">
            <div className="font-semibold text-lg text-zinc-900 group-hover:text-rose-600 transition-colors">
              Flowerwall Vancouver
            </div>
            <p className="mt-2 text-sm">
              Beautiful backdrops for events of all sizes. Fully installed, on
              time, every time.
            </p>
          </div>
          <div className="group">
            <div className="font-semibold text-lg text-zinc-900 group-hover:text-rose-600 transition-colors">
              Contact
            </div>
            <p className="mt-2 text-sm">
              <a
                href="mailto:info@flowerwallvancouver.com"
                className="hover:text-rose-600 transition-colors"
              >
                info@flowerwallvancouver.com
              </a>
              <br />
              <a
                href="tel:+16045550199"
                className="hover:text-rose-600 transition-colors"
              >
                +1 (604) 555-0199
              </a>
            </p>
          </div>
          <div className="group">
            <div className="font-semibold text-lg text-zinc-900 group-hover:text-rose-600 transition-colors">
              Follow Us
            </div>
            <p className="mt-2 text-sm">Instagram • TikTok • Pinterest</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-200 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Flowerwall Vancouver — All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
