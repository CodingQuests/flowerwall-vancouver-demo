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
      <div className="w-full bg-rose-200/70 text-zinc-800 text-sm">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between">
          <span>✉︎ info@flowerwallvancouver.com</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">TikTok</a>
            <a href="#" className="hover:underline">Pinterest</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="font-serif text-2xl tracking-tight">
            FLOWERWALL <span className="font-sans text-sm align-top text-rose-500">Vancouver</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
            <a href="#packages" className="hover:text-zinc-950">Packages</a>
            <a href="#usecases" className="hover:text-zinc-950">Use Cases</a>
            <a href="#portfolio" className="hover:text-zinc-950">Portfolio</a>
            <a href="#how" className="hover:text-zinc-950">How It Works</a>
            <a href="#areas" className="hover:text-zinc-950">Service Areas</a>
          </nav>
          <a
            href="#quote"
            className="inline-flex items-center rounded-2xl bg-rose-600 px-4 py-2 text-white shadow hover:bg-rose-700"
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
          className="h-[52vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-6xl px-4 pb-10">
            <div className="max-w-2xl rounded-2xl bg-white/90 p-6 shadow">
              <h1 className="text-3xl md:text-4xl font-serif leading-tight text-zinc-900">
                Flower Wall Rentals in Vancouver — installed on time, every time.
              </h1>
              <p className="mt-2 text-zinc-700">
                Pick a look, pick a date, and get a price in 30 seconds.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="#quote"
                  className="rounded-2xl bg-white px-5 py-2.5 text-rose-600 border-2 border-rose-600 hover:bg-rose-50 font-medium"
                >
                  Get Instant Quote
                </a>
                <a
                  href="#packages"
                  className="rounded-2xl border-2 border-rose-600 px-5 py-2.5 text-rose-600 hover:bg-rose-50 font-medium"
                >
                  See Packages
                </a>
              </div>
              <div className="mt-4 flex items-center gap-3 text-xs text-zinc-700">
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
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 grid grid-cols-2 md:grid-cols-4 items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-zinc-900">4.9 Google rating</span>
          </div>
          <div className="text-zinc-900">Fairmont • Paradox • JW Marriott</div>
          <div className="text-zinc-900">On-time guarantee</div>
          <div className="text-zinc-900">Serving GVA & Fraser Valley</div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-zinc-900">Packages</h2>
            <p className="mt-1 text-zinc-700 text-sm">
              Transparent pricing with delivery &amp; setup included
            </p>
          </div>
          <a href="#quote" className="text-rose-700 hover:underline text-sm hidden md:block">
            Hold Your Date for $50 →
          </a>
        </div>

        {/* IMPORTANT: wrapper has id="packages-grid" */}
        <div id="packages-grid" className="mt-6 grid gap-4">
          {[
            {
              name: "MID-WEEK MINI",
              price: "from $299",
              features: ["Tue–Thu only", "Lightweight 6×6", "Selfie-ready"],
              popular: false,
            },
            {
              name: "BASIC",
              price: "from $449",
              features: ["8×8 classic wall", "Delivery & setup", "2 add-on slots"],
              popular: false,
            },
            {
              name: "SIGNATURE",
              price: "from $699",
              features: ["8×8 premium florals", "Delivery & setup", "Lighting included"],
              popular: true,
            },
            {
              name: "LUXE",
              price: "from $999",
              features: ["10×10 grand look", "Premium textures", "VIP install times"],
              popular: false,
            },
          ].map((p, i) => (
            <div
              key={i}
              className={`rounded-2xl border-2 p-5 shadow-sm hover:shadow-md transition ${
                p.popular
                  ? "border-rose-600"
                  : "border-zinc-200"
              }`}
            >
              {p.popular && (
                <div className="text-xs uppercase tracking-wide text-rose-600 font-bold mb-2">
                  MOST POPULAR
                </div>
              )}
              <div className="text-xs uppercase tracking-wide text-rose-600 font-bold">
                {p.name}
              </div>
              <div className="mt-2 text-2xl font-bold text-zinc-900">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-rose-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className="mt-5 block text-center rounded-2xl bg-rose-600 px-4 py-3 text-white hover:bg-rose-700 font-medium"
              >
                Select Package
              </a>
            </div>
          ))}
        </div>

        <div className="mt-6 text-sm text-zinc-700 bg-zinc-50 p-4 rounded-lg">
          <span className="font-semibold text-zinc-900">Need something custom?</span> Ask about modular walls, arches, tunnels, and brand signage.
        </div>
      </section>

      {/* Use Cases */}
      <section id="usecases" className="bg-rose-50/40 border-y">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-serif text-zinc-900">Popular Setups</h2>
          {/* Fixed grid: 2 columns on mobile/tablet, 4 on desktop */}
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Weddings", img: GALLERY[0] },
              { title: "Corporate", img: GALLERY[1] },
              { title: "Birthdays", img: GALLERY[2] },
              { title: "Hotels & Lobbies", img: GALLERY[3] },
            ].map((c, i) => (
              <a
                key={i}
                href="#quote"
                className="group overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-lg transition"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-32 w-full object-cover group-hover:scale-105 transition"
                />
                <div className="p-3">
                  <div className="font-medium text-zinc-900">{c.title}</div>
                  <div className="text-sm text-zinc-600">
                    See looks &amp; pricing →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Instant Quote */}
      <section id="quote" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border bg-gradient-to-br from-rose-50 to-white p-6 shadow-sm">
          <h3 className="text-xl md:text-2xl font-serif text-zinc-900">Instant Quote</h3>
          <p className="text-sm text-zinc-700 mt-1">
            Date &amp; Location → Wall &amp; Size → Add-ons → Price + $50 deposit
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm text-zinc-700">Event date</label>
              <input
                type="date"
                className="mt-1 w-full rounded-xl border px-3 py-2"
              />
            </div>
            <div>
              <label className="text-sm text-zinc-700">City</label>
              <select className="mt-1 w-full rounded-xl border px-3 py-2">
                <option>Vancouver</option>
                <option>Burnaby</option>
                <option>Richmond</option>
                <option>Surrey</option>
                <option>Coquitlam</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-zinc-700">Package</label>
              <select className="mt-1 w-full rounded-xl border px-3 py-2">
                <option>Mid-Week Mini</option>
                <option>Basic</option>
                <option>Signature</option>
                <option>Luxe</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full rounded-xl bg-rose-600 px-4 py-2 text-white hover:bg-rose-700 font-medium">
                Get Price
              </button>
            </div>
          </div>
          <div className="mt-3 text-xs text-zinc-600">
            Hold your date for $50 — fully applied to your total, refundable up
            to 14 days prior.
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-serif text-zinc-900">Recent Installs</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`flower wall ${i + 1}`}
              className="aspect-square w-full rounded-xl object-cover"
            />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-zinc-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-serif text-zinc-900 text-center">How It Works</h2>
          <p className="text-center text-zinc-700 text-sm mt-1">Four simple steps to your perfect flower wall</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
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
              <div key={i} className="rounded-2xl border bg-white p-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 text-zinc-500 font-bold text-lg mb-3">
                  {s.step}
                </div>
                <div className="font-semibold text-lg text-zinc-900">{s.title}</div>
                <div className="mt-2 text-sm text-zinc-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas & Footer */}
      <footer id="areas" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl bg-rose-50 p-6">
          <div className="font-semibold text-zinc-900">Service Areas</div>
          <p className="text-sm text-zinc-700 mt-1">
            Vancouver • Burnaby • Richmond • Surrey • Coquitlam • North Vancouver •
            West Vancouver • Langley
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-zinc-700">
          <div>
            <div className="font-semibold text-zinc-900">Flowerwall Vancouver</div>
            <p className="mt-1">
              Beautiful backdrops for events of all sizes. Fully installed, on time.
            </p>
          </div>
          <div>
            <div className="font-semibold text-zinc-900">Contact</div>
            <p className="mt-1">
              info@flowerwallvancouver.com
              <br />
              +1 (604) 555-0199
            </p>
          </div>
          <div>
            <div className="font-semibold text-zinc-900">Follow</div>
            <p className="mt-1">Instagram • TikTok • Pinterest</p>
          </div>
        </div>

        <div className="mt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} Flowerwall Vancouver — All rights reserved.
        </div>
      </footer>
    </div>
  );
}