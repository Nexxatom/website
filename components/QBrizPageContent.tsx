import Link from 'next/link';

export default function QBrizPageContent() {
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

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#E4E0D8]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] via-[#3B82F6] to-[#1E40AF] opacity-10"></div>
        <div className="container mx-auto px-6 md:px-10 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
              QBriz
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.02] tracking-tight mb-8 text-[#16203A]">
              Empowering Businesses
              <br />
              <span className="text-[#7C3AED]">Through Digital Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A52] max-w-2xl mb-10 leading-relaxed">
              QBriz is a technology-driven platform designed to simplify how businesses operate, connect with customers, and grow in the digital economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="px-8 py-4 bg-[#16203A] text-[#FAF9F6] rounded-lg font-semibold hover:bg-[#1C2A4A] transition-colors font-display text-lg"
              >
                Join the Journey
              </Link>
              <Link
                href="#what-is-qbriz"
                className="px-8 py-4 border-2 border-[#16203A] text-[#16203A] rounded-lg font-semibold hover:bg-[#16203A] hover:text-[#FAF9F6] transition-colors font-display text-lg"
              >
                Learn More
              </Link>
              <Link
                href="/pitch/qbriz-seed"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all font-display text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Pitch Deck
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#0891B2] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is QBriz */}
      <section id="what-is-qbriz" className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
            What is QBriz?
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-[#16203A]">
            A Smarter Business Ecosystem
          </h2>
          <p className="text-lg text-[#4A4A52] leading-relaxed mb-6">
            QBriz is being developed as a modern digital platform that brings together technology, business solutions, and customer engagement into one connected ecosystem.
          </p>
          <p className="text-lg text-[#4A4A52] leading-relaxed">
            Our goal is to reduce complexity, increase accessibility, and create opportunities for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Why QBriz Exists */}
      <section className="bg-[#16203A] text-[#FAF9F6] py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
                The Problem
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8">
                Businesses today often struggle with:
              </h2>
              <ul className="space-y-4">
                {[
                  "Fragmented digital tools",
                  "High operational complexity",
                  "Limited growth opportunities",
                  "Customer acquisition challenges",
                  "Technology barriers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C8742C] mt-2 shrink-0" />
                    <span className="text-[#B8BCC8]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
                Our Response
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8">
                QBriz is being built to bridge these gaps through:
              </h2>
              <ul className="space-y-4">
                {[
                  "Innovation",
                  "Accessibility",
                  "Scalable technology",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C8742C] mt-2 shrink-0" />
                    <span className="text-[#B8BCC8]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
            Vision
          </p>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#16203A]">
            To become a trusted digital ecosystem that empowers businesses and consumers through technology, connectivity, and innovation.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#FAF9F6] py-20 md:py-28 border-y border-[#E4E0D8]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
              Mission
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#16203A]">
              Our mission in action.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E4E0D8] rounded-2xl overflow-hidden max-w-5xl mx-auto">
            {[
              {
                label: "Simplify Digital Operations",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                ),
              },
              {
                label: "Enable Business Growth",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                ),
              },
              {
                label: "Improve Customer Experiences",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
              },
              {
                label: "Foster Innovation",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3a6 6 0 00-6 6c0 2 1 3.5 2.5 4.5.7.5 1 1 1 2v.5h5v-.5c0-1 .3-1.5 1-2C16 12.5 17 11 17 9a6 6 0 00-6-6z" />
                ),
              },
              {
                label: "Build Sustainable Solutions",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#FAF9F6] p-8 hover:bg-white transition-colors"
              >
                <svg className="w-8 h-8 text-[#C8742C] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                <p className="font-display text-lg font-medium text-[#16203A]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Level Solution */}
      <section className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
            Our Solution
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-[#16203A]">
            A More Connected Digital Experience
          </h2>
          <p className="text-lg text-[#4A4A52] leading-relaxed">
            QBriz aims to provide a more connected and efficient digital experience that helps businesses operate, engage customers, and grow.
          </p>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-[#FAF9F6] py-20 md:py-28 border-y border-[#E4E0D8]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
              Roadmap
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#16203A]">
              Our Journey Ahead
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                phase: "Foundation",
                description: "Building the core infrastructure and technology backbone.",
              },
              {
                phase: "Launch",
                description: "Introducing QBriz to the market with initial features.",
              },
              {
                phase: "Growth",
                description: "Expanding capabilities and growing our user base.",
              },
              {
                phase: "Expansion",
                description: "Scaling across industries and new markets.",
              },
            ].map((item) => (
              <div
                key={item.phase}
                className="bg-white p-8 rounded-xl shadow-sm border border-[#E4E0D8]"
              >
                <p className="font-mono text-xs text-[#C8742C] mb-3">PHASE</p>
                <h3 className="font-display text-xl font-semibold mb-3 text-[#16203A]">{item.phase}</h3>
                <p className="text-[#4A4A52] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#16203A] text-[#FAF9F6] py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-4">
              Core Values
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              The Principles That Guide Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[
              {
                label: "Innovation",
                copy: "Building future-ready solutions.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3a6 6 0 00-6 6c0 2 1 3.5 2.5 4.5.7.5 1 1 1 2v.5h5v-.5c0-1 .3-1.5 1-2C16 12.5 17 11 17 9a6 6 0 00-6-6z" />
                ),
              },
              {
                label: "Trust",
                copy: "Creating reliable and transparent experiences.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
              },
              {
                label: "Transparency",
                copy: "Open and honest in everything we do.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                ),
              },
              {
                label: "Customer Focus",
                copy: "Putting our users at the center of every decision.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
              },
              {
                label: "Excellence",
                copy: "Committed to quality and continuous improvement.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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

      {/* The Future of QBriz */}
      <section className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
            Looking Ahead
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-[#16203A]">
            The Future of QBriz
          </h2>
          <p className="text-lg text-[#4A4A52] leading-relaxed mb-6">
            QBriz is more than a platform.
          </p>
          <p className="text-lg text-[#4A4A52] leading-relaxed mb-6">
            It is a long-term vision to create an ecosystem where businesses, entrepreneurs, and consumers can interact, grow, and succeed together through technology.
          </p>
          <p className="text-lg text-[#4A4A52] leading-relaxed">
            As we continue to evolve, our focus remains on innovation, customer value, and sustainable growth.
          </p>
        </div>
      </section>

      {/* Relationship with Nexxatom */}
      <section className="bg-[#FAF9F6] py-16 border-y border-[#E4E0D8]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
              Built by Nexxatom
            </p>
            <p className="text-lg text-[#4A4A52] leading-relaxed">
              QBriz is the flagship venture of Nexxatom, developed as part of the company's mission to build innovative technology solutions that create meaningful impact.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center mt-6 text-[#C8742C] font-semibold hover:underline font-display"
            >
              Learn more about Nexxatom
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact / Partnership Opportunities */}
      <section className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
            Join Our Journey
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-[#16203A]">
            Partner With Us
          </h2>
          <p className="text-lg text-[#4A4A52] leading-relaxed mb-10">
            Whether you're a business, partner, or innovator, we'd love to connect and explore opportunities together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-8 py-4 bg-[#16203A] text-[#FAF9F6] rounded-lg font-semibold hover:bg-[#1C2A4A] transition-colors font-display text-lg"
            >
              Partner With Us
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-[#16203A] text-[#16203A] rounded-lg font-semibold hover:bg-[#16203A] hover:text-[#FAF9F6] transition-colors font-display text-lg"
            >
              Stay Updated
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
