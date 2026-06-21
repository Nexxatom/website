import Link from 'next/link';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Nexxatom Technologies Pvt Ltd - Building Technology. Creating Opportunities. A technology and innovation company focused on building scalable digital products, business infrastructure, and future-ready solutions.',
  openGraph: {
    title: 'Nexxatom - Building Technology. Creating Opportunities.',
    description: 'Nexxatom Technologies Pvt Ltd is a technology and innovation company focused on building scalable digital products, business infrastructure, and future-ready solutions.',
    url: 'https://nexxatom.com',
  },
};

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[#FAF9F6] text-[#14161A]"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', system-ui, sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes pulse-glow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .float { animation: float 6s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .orbit { animation: orbit 20s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .float, .pulse-glow, .orbit { animation: none; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#E4E0D8]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] via-[#3B82F6] to-[#1E40AF] opacity-10"></div>
        
        {/* Abstract atoms/network animation */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#7C3AED', stopOpacity: 0.3}} />
                <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 0.1}} />
              </linearGradient>
            </defs>
            <circle cx="200" cy="150" r="80" fill="url(#grad1)" className="pulse-glow" />
            <circle cx="800" cy="450" r="120" fill="url(#grad1)" className="pulse-glow" style={{animationDelay: '1s'}} />
            <circle cx="500" cy="300" r="60" fill="url(#grad1)" className="pulse-glow" style={{animationDelay: '2s'}} />
            
            {/* Connection lines */}
            <line x1="200" y1="150" x2="500" y2="300" stroke="#7C3AED" strokeWidth="1" opacity="0.2" className="orbit" style={{transformOrigin: '350px 225px'}} />
            <line x1="500" y1="300" x2="800" y2="450" stroke="#3B82F6" strokeWidth="1" opacity="0.2" className="orbit" style={{transformOrigin: '650px 375px', animationDirection: 'reverse'}} />
            <line x1="200" y1="150" x2="800" y2="450" stroke="#7C3AED" strokeWidth="1" opacity="0.15" />
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-10 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
              Technology & Innovation
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.02] tracking-tight mb-8 text-[#16203A]">
              Building Technology.
              <br />
              <span className="text-[#7C3AED]">Creating Opportunities.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A52] max-w-2xl mb-10 leading-relaxed">
              Nexxatom is a technology and innovation company focused on building scalable digital products, business infrastructure, and future-ready solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="px-8 py-4 bg-[#16203A] text-[#FAF9F6] rounded-lg font-semibold hover:bg-[#1C2A4A] transition-colors font-display text-lg"
              >
                Explore Nexxatom
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-[#16203A] text-[#16203A] rounded-lg font-semibold hover:bg-[#16203A] hover:text-[#FAF9F6] transition-colors font-display text-lg"
              >
                Discover QBriz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
            Who We Are
          </p>
          <p className="text-2xl md:text-3xl font-display leading-snug text-[#16203A] mb-6">
            Nexxatom is a technology company dedicated to transforming ideas into impactful digital solutions.
          </p>
          <p className="text-lg text-[#4A4A52] leading-relaxed">
            We combine innovation, technology, and strategic thinking to build products that create value for businesses and consumers.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-[#16203A] text-[#FAF9F6] py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-4">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-14 max-w-xl">
            Four disciplines powering our ventures.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[
              {
                label: "Technology Development",
                copy: "Scalable platforms and software solutions.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                ),
              },
              {
                label: "Product Innovation",
                copy: "Turning ideas into market-ready products.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3a6 6 0 00-6 6c0 2 1 3.5 2.5 4.5.7.5 1 1 1 2v.5h5v-.5c0-1 .3-1.5 1-2C16 12.5 17 11 17 9a6 6 0 00-6-6z" />
                ),
              },
              {
                label: "Digital Infrastructure",
                copy: "Building systems that support growth.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                ),
              },
              {
                label: "Business Solutions",
                copy: "Technology-driven tools for modern businesses.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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

      {/* Featured Venture - QBriz */}
      <section className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
                Featured Venture
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6 text-[#16203A]">
                Our First Venture
                <br />
                <span className="text-[#7C3AED]">QBriz</span>
              </h2>
              <p className="text-lg text-[#4A4A52] leading-relaxed mb-6">
                QBriz is Nexxatom's flagship venture focused on digital commerce and business solutions, designed to connect businesses and customers through innovative technology.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-[#C8742C] text-[#FAF9F6] rounded-lg font-semibold hover:bg-[#B06525] transition-colors font-display text-lg"
              >
                Visit QBriz
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] rounded-2xl p-8 md:p-12 aspect-video flex items-center justify-center">
                <div className="bg-[#16203A] rounded-lg p-6 w-full max-w-md">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-[#C8742C] rounded w-3/4" />
                    <div className="h-3 bg-[#B8BCC8] rounded w-1/2" />
                    <div className="h-3 bg-[#B8BCC8] rounded w-2/3" />
                    <div className="h-20 bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] rounded mt-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nexxatom */}
      <section className="bg-[#FAF9F6] py-20 md:py-28 border-y border-[#E4E0D8]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
              Why Nexxatom
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#16203A]">
              Built for the future of business.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                label: "Innovation",
                copy: "Building solutions for tomorrow.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3a6 6 0 00-6 6c0 2 1 3.5 2.5 4.5.7.5 1 1 1 2v.5h5v-.5c0-1 .3-1.5 1-2C16 12.5 17 11 17 9a6 6 0 00-6-6z" />
                ),
              },
              {
                label: "Scalability",
                copy: "Designed for growth.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                ),
              },
              {
                label: "Reliability",
                copy: "Focused on quality and performance.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
              },
              {
                label: "Long-Term Vision",
                copy: "Creating sustainable digital ecosystems.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                ),
              },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-16 h-16 bg-[#16203A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#C8742C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-display text-xl font-medium mb-2 text-[#16203A]">{item.label}</h3>
                <p className="text-[#4A4A52]">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#16203A] to-[#0F172A]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #7C3AED 0%, transparent 50%), radial-gradient(circle at 80% 50%, #3B82F6 0%, transparent 50%)`
          }}></div>
        </div>
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
              Our Vision
            </p>
            <p className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#FAF9F6]">
              We believe technology should empower people, simplify complexity, and create opportunities for growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8742C] mb-6">
            Core Values
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#16203A]">
            The principles that guide everything we do.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#E4E0D8] rounded-2xl overflow-hidden max-w-6xl mx-auto">
          {[
            "Innovation",
            "Integrity",
            "Excellence",
            "Customer Focus",
            "Continuous Growth",
          ].map((value) => (
            <div
              key={value}
              className="bg-[#FAF9F6] p-8 hover:bg-white transition-colors text-center"
            >
              <p className="font-display text-lg font-medium text-[#16203A]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#16203A] text-[#FAF9F6] py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-6">
              Let's Build the Future Together
            </h2>
            <p className="text-lg text-[#B8BCC8] mb-10 max-w-2xl mx-auto">
              Whether you're a customer, partner, investor, or innovator, we'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="px-8 py-4 bg-[#C8742C] text-[#FAF9F6] rounded-lg font-semibold hover:bg-[#B06525] transition-colors font-display text-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-[#FAF9F6] text-[#FAF9F6] rounded-lg font-semibold hover:bg-[#FAF9F6] hover:text-[#16203A] transition-colors font-display text-lg"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}