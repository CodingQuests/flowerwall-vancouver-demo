const HERO =
  "https://flowerwallvancouver.com/cdn/shop/files/banner_20.jpg?v=1747916929";

const GALLERY = [
  "https://flowerwallvancouver.com/cdn/shop/files/ombre1_800x.jpg?v=1749713745",
  "https://flowerwallvancouver.com/cdn/shop/files/blue_ombre_800x.png?v=1758314713",
  "https://flowerwallvancouver.com/cdn/shop/files/white-flower-wall_800x.jpg?v=1750060307",
  "https://flowerwallvancouver.com/cdn/shop/files/preview-img-big-1_800x.jpg?v=1745233128",
];

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Top bar */}
      <div className="w-full bg-rose-200/70 text-zinc-800 text-sm">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between">
          <span>✉︎ info@flowerwallvancouver.com</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">
              Instagram
            </a>
            <a href="#" className="hover:underline">
              TikTok
            </a>
            <a href="#" className="hover:underline">
              Pinterest
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="font-serif text-2xl tracking-tight">
            FLOWERWALL{" "}
            <span className="font-sans text-sm align-top text-rose-500">
              Vancouver
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
            <a href="#packages" className="hover:text-zinc-950">
              Packages
            </a>
            <a href="#usecases" className="hover:text-zinc-950">
              Use Cases
            </a>
            <a href="#portfolio" className="hover:text-zinc-950">
              Portfolio
            </a>
            <a href="#how" className="hover:text-zinc-950">
              How It Works
            </a>
            <a href="#areas" className="hover:text-zinc-950">
              Service Areas
            </a>
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
          src={HERO}
          alt="Bride and groom in front of flower wall"
          className="h-[52vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-6xl px-4 pb-10">
            <div className="max-w-2xl rounded-2xl bg-white/90 p-6 shadow">
              <h1 className="text-3xl md:text-4xl font-serif leading-tight">
                Flower Wall Rentals in Vancouver — installed on time, every
                time.
              </h1>
              <p className="mt-2 text-zinc-700">
                Pick a look, pick a date, and get a price in 30 seconds.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="#quote"
                  className="rounded-2xl bg-rose-600 px-5 py-2.5 text-white shadow hover:bg-rose-700"
                >
                  Get Instant Quote
                </a>
                <a
                  href="#packages"
                  className="rounded-2xl border border-rose-600 px-5 py-2.5 text-rose-700 hover:bg-rose-50"
                >
                  See Packages
                </a>
              </div>
              <div className="mt-4 text-xs text-zinc-600">
                On-Time or $50 Credit • Fully Installed • Licensed & Insured
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust row */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 grid grid-cols-2 md:grid-cols-4 items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">★★★★★</span>
            <span>4.9 Google rating</span>
          </div>
          <div className="opacity-80">Fairmont • Paradox • JW Marriott</div>
          <div className="opacity-80">On-time guarantee</div>
          <div className="opacity-80">Serving GVA & Fraser Valley</div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-serif">Packages</h2>
          <a href="#quote" className="text-rose-700 hover:underline">
            Hold Your Date for $50 →
          </a>
        </div>

        <p className="mt-2 text-zinc-700">
          Transparent pricing with delivery &amp; setup. Customize with neon
          signs, balloons, pedestals, and uplights.
        </p>

        {/* 1 col mobile • 2 col md • 4 col xl */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {[
            {
              name: "Mid-Week Mini",
              price: "from $299",
              features: ["Tue–Thu only", "Lightweight 6×6", "Selfie-ready"],
            },
            {
              name: "Basic",
              price: "from $449",
              features: ["8×8 classic wall", "Delivery & setup", "2 add-on slots"],
            },
            {
              name: "Signature",
              price: "from $699",
              features: ["8×8 premium florals", "Delivery & setup", "Lighting included"],
            },
            {
              name: "Luxe",
              price: "from $999",
              features: ["10×10 grand look", "Premium textures", "VIP install times"],
            },
          ].map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-zinc-200 p-5 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-rose-700">
                {p.name}
              </div>
              <div className="mt-1 text-2xl font-semibold">{p.price}</div>
              <ul className="mt-3 space-y-1 text-sm text-zinc-700">
                {p.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>
              <a
                href="#quote"
                className="mt-4 inline-block rounded-xl bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700"
              >
                Select
              </a>
            </div>
          ))}
        </div>

        <div className="mt-5 text-sm text-zinc-600">
          Need something custom? Ask about modular walls, arches, tunnels, and
          brand signage.
        </div>
      </section>

      {/* Use cases */}
      <section id="usecases" className="bg-rose-50/40 border-y">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-serif">Popular Setups</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { title: "Weddings", img: GALLERY[0] },
              { title: "Corporate", img: GALLERY[1] },
              { title: "Birthdays & Showers", img: GALLERY[2] },
              { title: "Hotels & Lobbies", img: GALLERY[3] },
            ].map((c, i) => (
              <a
                key={i}
                href="#quote"
                className="group overflow-hidden rounded-2xl border bg-white shadow-sm"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-40 w-full object-cover group-hover:scale-105 transition"
                />
                <div className="p-4">
                  <div className="font-medium">{c.title}</div>
                  <div className="text-sm text-zinc-600">
                    See looks &amp; pricing →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Instant quote */}
      <section id="quote" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border bg-gradient-to-br from-rose-50 to-white p-6 shadow-sm">
          <h3 className="text-xl md:text-2xl font-serif">Instant Quote</h3>
          <p className="text-sm text-zinc-700 mt-1">
            Date &amp; location → wall &amp; size → add-ons → price + $50 deposit.
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
              <button className="w-full rounded-xl bg-rose-600 px-4 py-2 text-white hover:bg-rose-700">
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
        <h2 className="text-2xl md:text-3xl font-serif">Recent Installs</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Flower wall ${i + 1}`}
              className="aspect-square w-full rounded-xl object-cover"
            />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-zinc-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-serif">How It Works</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-zinc-700">
            {[
              {
                step: "1",
                title: "Pick a look",
                desc: "Choose a package and any add-ons.",
              },
              {
                step: "2",
                title: "Get your price",
                desc: "Enter date & location for an instant quote.",
              },
              {
                step: "3",
                title: "We install",
                desc: "Delivery, setup, and teardown included.",
              },
              {
                step: "4",
                title: "Shine",
                desc: "On-time or $50 credit — guaranteed.",
              },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border bg-white p-5">
                <div className="text-rose-600 font-semibold">Step {s.step}</div>
                <div className="mt-1 font-medium">{s.title}</div>
                <div className="mt-1 text-zinc-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / service areas */}
      <footer id="areas" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl bg-rose-50 p-6">
          <div className="font-medium">Service Areas</div>
          <p className="text-sm text-zinc-700 mt-1">
            Vancouver • Burnaby • Richmond • Surrey • Coquitlam • North
            Vancouver • West Vancouver • Langley
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-zinc-700">
          <div>
            <div className="font-semibold">Flowerwall Vancouver</div>
            <p className="mt-1">
              Beautiful backdrops for events of all sizes. Fully installed, on
              time.
            </p>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <p className="mt-1">
              info@flowerwallvancouver.com
              <br />
              +1 (604) 555-0199
            </p>
          </div>
          <div>
            <div className="font-semibold">Follow</div>
            <p className="mt-1">Instagram • TikTok • Pinterest</p>
          </div>
        </div>

        <div className="mt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} Flowerwall Vancouver — All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
