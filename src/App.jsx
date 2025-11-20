// src/App.jsx
export default function App() {
  const GALLERY = [
    "https://flowerwallvancouver.com/cdn/shop/files/ombre1_800x.jpg?v=1749713745",
    "https://flowerwallvancouver.com/cdn/shop/files/blue_ombre_800x.png?v=1758314713",
    "https://flowerwallvancouver.com/cdn/shop/files/white-flower-wall_800x.jpg?v=1750060307",
    "https://flowerwallvancouver.com/cdn/shop/files/preview-img-big-1_800x.jpg?v=1745233128",
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Top Bar */}
      <div className="w-full bg-gradient-to-r from-rose-100 to-pink-100 text-zinc-800 text-sm">
        <div className="mx-auto max-w-6xl px-4 py-2.5 flex items-center justify-between">
          <span className="font-medium">✉︎ info@flowerwallvancouver.com</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-rose-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-rose-600 transition-colors">TikTok</a>
            <a href="#" className="hover:text-rose-600 transition-colors">Pinterest</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="font-serif text-2xl tracking-tight">
            FLOWERWALL <span className="font-sans text-sm align-top text-rose-600 font-semibold">Vancouver</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700">
            <a href="#packages" className="hover:text-rose-600 transition-colors">Packages</a>
            <a href="#usecases" className="hover:text-rose-600 transition-colors">Use Cases</a>
            <a href="#portfolio" className="hover:text-rose-600 transition-colors">Portfolio</a>
            <a href="#how" className="hover:text-rose-600 transition-colors">How It Works</a>
            <a href="#areas" className="hover:text-rose-600 transition-colors">Service Areas</a>
          </nav>
          <a
            href="#quote"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-rose-600 to-rose-500 px-6 py-2.5 text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:from-rose-700 hover:to-rose-600 transition-all duration-300 transform hover:scale-105"
          >
            Get Instant Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <img
          src="https://flowerwallvancouver.com/cdn/shop/files/banner_20.jpg?v=1747916929"
          alt="flower wall hero"
          className="h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-6xl px-4 pb-12 w-full">
            <div className="max-w-2xl rounded-3xl bg-white/95 backdrop-blur-sm p-8 shadow-2xl">
              <h1 className="text-4xl md:text-5xl font-serif leading-tight text-zinc-900">
                Flower Wall Rentals in Vancouver — installed on time, every time.
              </h1>
              <p className="mt-3 text-lg text-zinc-700">
                Pick a look, pick a date, and get a price in 30 seconds.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="#quote"
                  className="rounded-full bg-gradient-to-r from-rose-600 to-rose-500 px-7 py-3.5 text-white font-semibold shadow-lg hover:shadow-xl hover:from-rose-700 hover:to-rose-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Instant Quote
                </a>
                <a
                  href="#packages"
                  className="rounded-full border-2 border-rose-600 px-7 py-3.5 text-rose-700 font-semibold hover:bg-rose-50 transition-all duration-300"
                >
                  See Packages
                </a>
              </div>
              <div className="mt-5 flex items-center gap-4 text-sm text-zinc-600 font-medium">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  On-Time or $50 Credit
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Fully Installed
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Licensed & Insured
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="border-b bg-gradient-to-r from-zinc-50 to-rose-50/30">
        <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 items-center gap-6 text-sm">
          <div className="flex items-center gap-2 font-medium">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-zinc-800">4.9 Google rating</span>
          </div>
          <div className="text-zinc-700 font-medium">Fairmont • Paradox • JW Marriott</div>
          <div className="text-zinc-700 font-medium">On-time guarantee</div>
          <div className="text-zinc-700 font-medium">Serving GVA & Fraser Valley</div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-zinc-900">Packages</h2>
            <p className="mt-2 text-zinc-600">
              Transparent pricing with delivery &amp; setup included
            </p>
          </div>
          <a href="#quote" className="hidden md:flex text-rose-700 hover:text-rose-800 font-semibold text-sm items-center gap-1 transition-colors">
            Hold Your Date for $50
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* IMPORTANT: wrapper has id="packages-grid" */}
        <div id="packages-grid" className="mt-8 grid gap-5">
          {[
            {
              name: "Mid-Week Mini",
              price: "from $299",
              features: ["Tue–Thu only", "Lightweight 6×6", "Selfie-ready"],
              popular: false,
            },
            {
              name: "Basic",
              price: "from $449",
              features: ["8×8 classic wall", "Delivery & setup", "2 add-on slots"],
              popular: false,
            },
            {
              name: "Signature",
              price: "from $699",
              features: ["8×8 premium florals", "Delivery & setup", "Lighting included"],
              popular: true,
            },
            {
              name: "Luxe",
              price: "from $999",
              features: ["10×10 grand look", "Premium textures", "VIP install times"],
              popular: false,
            },
          ].map((p, i) => (
            <div
              key={i}
              className={`relative rounded-3xl border-2 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                p.popular
                  ? "border-rose-500 bg-gradient-to-br from-rose-50 to-white"
                  : "border-zinc-200 bg-white hover:border-rose-300"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-600 to-rose-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
                  MOST POPULAR
                </div>
              )}
              <div className="text-sm uppercase tracking-wide text-rose-700 font-bold">
                {p.name}
              </div>
              <div className="mt-2 text-3xl font-bold text-zinc-900">{p.price}</div>
              <ul className="mt-5 space-y-3 text-sm text-zinc-700">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-rose-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className={`mt-6 block text-center rounded-2xl px-5 py-3 font-semibold transition-all duration-300 transform hover:scale-105 ${
                  p.popular
                    ? "bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-lg hover:shadow-xl"
                    : "bg-rose-600 text-white hover:bg-rose-700 shadow-md hover:shadow-lg"
                }`}
              >
                Select Package
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center p-6 bg-zinc-50 rounded-2xl">
          <p className="text-sm text-zinc-700">
            <span className="font-semibold text-zinc-900">Need something custom?</span> Ask about modular walls, arches, tunnels, and brand signage.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section id="usecases" className="bg-gradient-to-b from-rose-50/40 to-white border-y">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-serif text-zinc-900">Popular Setups</h2>
          <p className="mt-2 text-zinc-600">Perfect for every occasion</p>
          
          {/* Fixed grid: 2 columns on mobile/tablet, 4 on desktop */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Weddings", img: GALLERY[0], desc: "Create magical moments" },
              { title: "Corporate", img: GALLERY[1], desc: "Impress your clients" },
              { title: "Birthdays", img: GALLERY[2], desc: "Make it memorable" },
              { title: "Hotels & Lobbies", img: GALLERY[3], desc: "Elevate your space" },
            ].map((c, i) => (
              <a
                key={i}
                href="#quote"
                className="group overflow-hidden rounded-3xl border-2 border-zinc-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-rose-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-44 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <div className="font-semibold text-lg text-zinc-900">{c.title}</div>
                  <div className="text-sm text-zinc-600 mt-1">{c.desc}</div>
                  <div className="text-sm text-rose-600 font-semibold mt-2 flex items-center gap-1">
                    View options
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Instant Quote */}
      <section id="quote" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border-2 border-rose-200 bg-gradient-to-br from-rose-50 via-white to-pink-50 p-8 shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-3xl md:text-4xl font-serif text-zinc-900">Get Your Instant Quote</h3>
            <p className="text-zinc-600 mt-2">
              Date &amp; Location → Wall &amp; Size → Add-ons → Price + $50 deposit
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-semibold text-zinc-800 block mb-2">Event date</label>
              <input
                type="date"
                className="w-full rounded-xl border-2 border-zinc-200 px-4 py-3 focus:outline-none focus:border-rose-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-zinc-800 block mb-2">City</label>
              <select className="w-full rounded-xl border-2 border-zinc-200 px-4 py-3 focus:outline-none focus:border-rose-500 transition-colors">
                <option>Vancouver</option>
                <option>Burnaby</option>
                <option>Richmond</option>
                <option>Surrey</option>
                <option>Coquitlam</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-zinc-800 block mb-2">Package</label>
              <select className="w-full rounded-xl border-2 border-zinc-200 px-4 py-3 focus:outline-none focus:border-rose-500 transition-colors">
                <option>Mid-Week Mini</option>
                <option>Basic</option>
                <option>Signature</option>
                <option>Luxe</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 px-6 py-3 text-white font-bold shadow-lg hover:shadow-xl hover:from-rose-700 hover:to-rose-600 transition-all duration-300 transform hover:scale-105">
                Get Price Now
              </button>
            </div>
          </div>
          <div className="mt-5 text-center bg-white/80 rounded-xl p-4">
            <p className="text-sm text-zinc-700">
              <span className="font-semibold text-rose-700">Hold your date for just $50</span> — fully applied to your total, refundable up to 14 days prior.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-serif text-zinc-900">Recent Installs</h2>
        <p className="mt-2 text-zinc-600">See what we've created for our clients</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
              <img
                src={src}
                alt={`flower wall ${i + 1}`}
                className="aspect-square w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <button className="text-white font-semibold text-sm">View Details →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-gradient-to-b from-zinc-50 to-white border-y">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 text-center">How It Works</h2>
          <p className="mt-2 text-zinc-600 text-center">Four simple steps to your perfect flower wall</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Pick a look",
                desc: "Choose a package and any add-ons that match your vision.",
                icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
              },
              {
                step: "2",
                title: "Get your price",
                desc: "Enter date & location for an instant, transparent quote.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                step: "3",
                title: "We install",
                desc: "Delivery, professional setup, and teardown all included.",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
              },
              {
                step: "4",
                title: "Shine",
                desc: "On-time or $50 credit — we guarantee it.",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
              },
            ].map((s, i) => (
              <div key={i} className="relative rounded-3xl border-2 border-zinc-200 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 text-white font-bold text-2xl mb-4 shadow-lg">
                  {s.step}
                </div>
                <div className="font-semibold text-xl text-zinc-900">{s.title}</div>
                <div className="mt-2 text-zinc-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas & Footer */}
      <footer id="areas" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-rose-100 to-pink-100 p-8 shadow-lg">
          <div className="font-semibold text-xl text-zinc-900">Service Areas</div>
          <p className="text-zinc-700 mt-2 leading-relaxed">
            Vancouver • Burnaby • Richmond • Surrey • Coquitlam • North Vancouver •
            West Vancouver • Langley • New Westminster • Delta
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-zinc-700">
          <div>
            <div className="font-semibold text-lg text-zinc-900">Flowerwall Vancouver</div>
            <p className="mt-2 text-sm">
              Beautiful backdrops for events of all sizes. Fully installed, on time, every time.
            </p>
          </div>
          <div>
            <div className="font-semibold text-lg text-zinc-900">Contact</div>
            <p className="mt-2 text-sm">
              info@flowerwallvancouver.com
              <br />
              +1 (604) 555-0199
            </p>
          </div>
          <div>
            <div className="font-semibold text-lg text-zinc-900">Follow Us</div>
            <p className="mt-2 text-sm">Instagram • TikTok • Pinterest</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-200 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Flowerwall Vancouver — All rights reserved. Licensed & Insured.
        </div>
      </footer>
    </div>
  );
}