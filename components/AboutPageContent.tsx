export default function AboutPageContent() {
  return (
    <div
      className="min-h-screen bg-[#FAF9F6] text-[#14161A]"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', system-ui, sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        @keyframes orbit-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes orbit-slow-rev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .orbit-ring-1 { animation: orbit-slow 26s linear infinite; transform-origin: 200px 200px; }
        .orbit-ring-2 { animation: orbit-slow-rev 38s linear infinite; transform-origin: 200px 200px; }
        @media (prefers-reduced-motion: reduce) {
          .orbit-ring-1, .orbit-ring-2 { animation: none; }
        }
      `}</style>

      {/* Hero — orbital diagram as thesis statement */}
      <section className="relative overflow-hidden border-b border-[#E4E0D8]">
        <div className="container mx-auto px-6 md:px-10 py-20 md:py-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
              Nexxatom — Technology &amp; Innovation
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight mb-8">
              A nucleus for
              <br />
              ventures that
              <br />
              <span className="text-[#16203A]">create orbit.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A52] max-w-md leading-relaxed">
              Nexxatom builds the core technology and infrastructure that
              lets new ventures launch, grow, and hold their own orbit —
              starting with QBriz.
            </p>
          </div>

          {/* Signature orbital SVG: Nexxatom as nucleus, ventures as orbiting nodes */}
          <div className="flex justify-center lg:justify-end">
            <svg
              viewBox="0 0 400 400"
              className="w-full max-w-md"
              role="img"
              aria-label="Diagram of Nexxatom as a central node with venture nodes orbiting around it"
            >
              <circle cx="200" cy="200" r="150" fill="none" stroke="#E4E0D8" strokeWidth="1" />
              <circle cx="200" cy="200" r="95" fill="none" stroke="#E4E0D8" strokeWidth="1" />

              <g className="orbit-ring-2">
                <circle cx="200" cy="105" r="5" fill="#E4E0D8" />
                <circle cx="200" cy="295" r="5" fill="#E4E0D8" />
              </g>

              {/* QBriz orbiting node */}
              <g className="orbit-ring-1">
                <circle cx="350" cy="200" r="14" fill="#C8742C" />
                <text
                  x="350"
                  y="204"
                  textAnchor="middle"
                  fontSize="9"
                  fontFamily="'JetBrains Mono', monospace"
                  fill="#FAF9F6"
                >
                  QB
                </text>
              </g>

              {/* Nucleus */}
              <circle cx="200" cy="200" r="48" fill="#16203A" />
              <text
                x="200"
                y="197"
                textAnchor="middle"
                fontSize="13"
                fontFamily="'Space Grotesk', sans-serif"
                fontWeight="600"
                fill="#FAF9F6"
              >
                NEXX
              </text>
              <text
                x="200"
                y="212"
                textAnchor="middle"
                fontSize="13"
                fontFamily="'Space Grotesk', sans-serif"
                fontWeight="600"
                fill="#FAF9F6"
              >
                ATOM
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-[200px_1fr] gap-10 max-w-4xl">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] pt-1">
            Who We Are
          </p>
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-display leading-snug text-[#16203A]">
              We're a technology and innovation company that turns ideas
              into products businesses can actually run on.
            </p>
            <p className="text-lg text-[#4A4A52] leading-relaxed">
              Nexxatom combines technology, strategy, and product thinking
              to build solutions that simplify operations, improve customer
              experience, and open up sustainable growth — across
              industries, not just one.
            </p>
            <p className="text-lg text-[#4A4A52] leading-relaxed">
              Our flagship venture, <span className="text-[#16203A] font-medium">QBriz</span>,
              is where that thinking takes its first concrete shape: modern
              digital commerce and business tools built for the next
              generation of entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do — dark section, copper accents */}
      <section className="bg-[#16203A] text-[#FAF9F6] py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-4">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-14 max-w-xl">
            Four disciplines, one venture engine.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[
              {
                label: "Technology Development",
                copy: "Reliable, scalable platforms built to outlast a launch.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17l-5-5 5-5M15 7l5 5-5 5" />
                ),
              },
              {
                label: "Product Innovation",
                copy: "Turning raw ideas into products people actually need.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3a6 6 0 00-6 6c0 2 1 3.5 2.5 4.5.7.5 1 1 1 2v.5h5v-.5c0-1 .3-1.5 1-2C16 12.5 17 11 17 9a6 6 0 00-6-6z" />
                ),
              },
              {
                label: "Business Infrastructure",
                copy: "The systems behind the systems — built so ops run quietly.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 21V8a1 1 0 011-1h6a1 1 0 011 1v13M16 21V11a1 1 0 011-1h3a1 1 0 011 1v10M9 9h.01M9 13h.01M4 21h16" />
                ),
              },
              {
                label: "Digital Growth",
                copy: "Strategy and execution that compound, not just launch numbers.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 19h16M7 19V9m5 10V5m5 14v-7" />
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#16203A] p-8 md:p-10 hover:bg-[#1C2A4A] transition-colors"
              >
                <svg className="w-8 h-8 text-[#C8742C] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                <h3 className="font-display text-lg font-medium mb-3">{item.label}</h3>
                <p className="text-[#B8BCC8] text-sm leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QBriz Spotlight — orbiting node made concrete */}
      <section className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto rounded-3xl border border-[#E4E0D8] bg-white p-10 md:p-14 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 rounded-full bg-[#C8742C]" />
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#4A4A52]">
              First Venture
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-[#16203A]">
            QBriz
          </h2>
          <p className="text-lg text-[#4A4A52] leading-relaxed mb-4 max-w-2xl">
            QBriz is the first venture built on Nexxatom's core — a digital
            commerce platform connecting businesses and customers through
            technology-driven experiences.
          </p>
          <p className="text-lg text-[#4A4A52] leading-relaxed max-w-2xl">
            As our flagship product, it's the clearest proof of what
            Nexxatom is built to do: take a venture from idea to
            infrastructure to long-term value.
          </p>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="border-t border-[#E4E0D8] py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
              Looking Forward
            </p>
            <p className="font-display text-2xl md:text-3xl leading-snug text-[#16203A]">
              We're building technology that solves today's problems and
              holds room for tomorrow's ventures — one orbit at a time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
