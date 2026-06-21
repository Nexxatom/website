export default function ValuesPageContent() {
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
            Values
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight max-w-3xl">
            The principles
            <br />
            <span className="text-[#16203A]">we don't bend on.</span>
          </h1>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 border-t border-l border-[#E4E0D8]">
            {[
              {
                tag: "INNOVATION",
                copy: "We chase better solutions, not just new ones — and we're willing to be wrong on the way there.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3a6 6 0 00-6 6c0 2 1 3.5 2.5 4.5.7.5 1 1 1 2v.5h5v-.5c0-1 .3-1.5 1-2C16 12.5 17 11 17 9a6 6 0 00-6-6z" />
                ),
              },
              {
                tag: "INTEGRITY",
                copy: "We say what's true, even when a simpler story would be easier to sell.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
              },
              {
                tag: "EXCELLENCE",
                copy: "We'd rather ship something smaller and right than something bigger and rough.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                ),
              },
              {
                tag: "GROWTH",
                copy: "We treat every product, and ourselves, as a draft that keeps improving.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                ),
              },
              {
                tag: "CUSTOMER FOCUS",
                copy: "We design around what people actually do, not what a roadmap assumes they'll do.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
              },
            ].map((item) => (
              <div
                key={item.tag}
                className="border-r border-b border-[#E4E0D8] p-8 md:p-10 hover:bg-white transition-colors"
              >
                <div className="flex items-center justify-between mb-8">
                  <svg className="w-7 h-7 text-[#C8742C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#9A9A9F]">
                    {item.tag}
                  </span>
                </div>
                <p className="font-display text-xl leading-snug text-[#16203A]">
                  {item.copy}
                </p>
              </div>
            ))}

            {/* Closing cell completes the grid rhythm */}
            <div className="border-r border-b border-[#E4E0D8] p-8 md:p-10 flex items-center bg-[#16203A]">
              <p className="font-display text-xl leading-snug text-[#FAF9F6]">
                Five principles.
                <br />
                Every decision, every product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Statement */}
      <section className="bg-[#16203A] text-[#FAF9F6] py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-display text-2xl md:text-3xl leading-snug">
              These aren't words on a page. They're the test every decision,
              product, and relationship has to pass.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
