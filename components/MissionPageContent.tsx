export default function MissionPageContent() {
  return (
    <div
      className="min-h-screen bg-[#FAF9F6] text-[#14161A]"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', system-ui, sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        @keyframes drift { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .drift-track { animation: drift 22s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .drift-track { animation: none; }
        }
      `}</style>

      {/* Hero */}
      <section className="border-b border-[#E4E0D8]">
        <div className="container mx-auto px-6 md:px-10 py-20 md:py-28">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
            Mission
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight max-w-3xl">
            Build the core.
            <br />
            <span className="text-[#16203A]">Let ventures orbit.</span>
          </h1>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="relative pl-8 md:pl-10 border-l-2 border-[#C8742C]">
            <p className="font-display text-2xl md:text-4xl leading-snug text-[#16203A]">
              We design, develop, and scale technology-driven platforms
              that create value, improve efficiency, and unlock new
              opportunities in the digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* How We Deliver — dark section, scanning-line motif */}
      <section className="bg-[#16203A] text-[#FAF9F6] py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-4">
            How We Deliver
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-16 max-w-xl">
            Three commitments behind every product we ship.
          </h2>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[
              {
                tag: "VALUE",
                label: "Create Value",
                copy: "Solutions built for tangible business impact and results you can measure, not just ship.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m-7-7h14M9 8l3-3 3 3M9 16l3 3 3-3" />
                ),
              },
              {
                tag: "EFFICIENCY",
                label: "Improve Efficiency",
                copy: "Workflows and systems re-engineered so operations get quieter, not heavier, as you grow.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12a8 8 0 0114.93-4M20 12a8 8 0 01-14.93 4M9 8H4V3m11 13h5v5" />
                ),
              },
              {
                tag: "GROWTH",
                label: "Unlock Opportunities",
                copy: "New pathways for growth opened deliberately — strategy first, scale second.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 19L19 5M19 5H9M19 5v10" />
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

      {/* Closing line — quiet, no new visual gimmick */}
      <section className="border-t border-[#E4E0D8] py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-display text-2xl md:text-3xl leading-snug text-[#16203A]">
              Every venture we build is judged the same way: does it create
              value, run efficiently, and open a real opportunity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
