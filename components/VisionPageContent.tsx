export default function VisionPageContent() {
  return (
    <div
      className="min-h-screen bg-[#FAF9F6] text-[#14161A]"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', system-ui, sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      {/* Hero */}
      <section className="border-b border-[#E4E0D8]">
        <div className="container mx-auto px-6 md:px-10 py-20 md:py-28">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
            Vision
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight max-w-3xl">
            Technology people
            <br />
            <span className="text-[#16203A]">trust by default.</span>
          </h1>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="relative pl-8 md:pl-10 border-l-2 border-[#C8742C]">
            <p className="font-display text-2xl md:text-4xl leading-snug text-[#16203A]">
              To become a globally trusted technology company that empowers
              businesses and individuals through innovative digital
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* What We Aspire To — dark section */}
      <section className="bg-[#16203A] text-[#FAF9F6] py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-4">
            What We Aspire To
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-16 max-w-xl">
            Trust, earned at three scales.
          </h2>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[
              {
                tag: "GLOBAL",
                label: "Global Trust",
                copy: "Partnerships and platforms businesses worldwide can rely on without a second thought.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
              },
              {
                tag: "BUSINESS",
                label: "Empower Businesses",
                copy: "Technology that lets organizations move on their goals, not around our limitations.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 21V8a1 1 0 011-1h6a1 1 0 011 1v13M16 21V11a1 1 0 011-1h3a1 1 0 011 1v10M9 9h.01M9 13h.01M4 21h16" />
                ),
              },
              {
                tag: "INDIVIDUAL",
                label: "Empower Individuals",
                copy: "Tools built for the person using them, not just the org chart that bought them.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#16203A] p-8 md:p-10 hover:bg-[#1C2A4A] transition-colors"
              >
                <div className="flex items-center justify-between mb-8">
                  <svg className="w-8 h-8 text-[#C8742C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#6B7280]">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-display text-lg font-medium mb-3">{item.label}</h3>
                <p className="text-[#B8BCC8] text-sm leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach — genuine sequence, numbered with intent */}
      <section className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-4">
            Our Approach
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-14 text-[#16203A]">
            How the vision becomes a product.
          </h2>

          <div className="divide-y divide-[#E4E0D8] border-t border-b border-[#E4E0D8]">
            {[
              {
                step: "01",
                label: "Innovation-First",
                copy: "We start by pushing on what's possible, not what's comfortable to build.",
              },
              {
                step: "02",
                label: "Scalable Solutions",
                copy: "Then we make it hold — platforms built to grow with clients, not be rebuilt for them.",
              },
              {
                step: "03",
                label: "Long-Term Impact",
                copy: "And we measure it over years, weighing sustainable value over short-term wins.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 md:gap-10 py-8 items-baseline">
                <span className="font-mono text-sm text-[#C8742C] shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium mb-2 text-[#16203A]">
                    {item.label}
                  </h3>
                  <p className="text-[#4A4A52] leading-relaxed">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
