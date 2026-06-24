export default function Slide03_FounderJourney() {
  const stages = [
    {
      year: '2018',
      name: 'TOYYOS',
      subtitle: 'Toyyos Online Services Pvt Ltd',
      tag: 'Travel & Local Services',
      color: '#14B8A6',
      icon: '🌐',
      points: [
        'Customer acquisition strategies',
        'Partner onboarding & management', 
        'Local service ecosystems',
        'Market validation'
      ],
      gradient: false,
    },
    {
      year: '2026',
      name: 'NEXXATOM',
      subtitle: 'Nexxatom Technologies Pvt Ltd',
      tag: 'Technology & Innovation Company',
      color: '#7C3AED',
      icon: '⚡',
      points: [
        'Scalable platform architecture',
        'Cross-industry product thinking',
        'Founder-led execution',
        'Team building & culture'
      ],
      gradient: false,
    },
    {
      year: '2026',
      name: 'QBRIZ',
      subtitle: 'Flagship Platform',
      tag: 'Find. Decide. Go.',
      color: '#06B6D4',
      icon: '🚀',
      points: [
        'Service discovery & access',
        'Real-time business engagement',
        'Built to scale across industries',
        'Unified user experience'
      ],
      gradient: true,
    },
  ];

  const metrics = [
    { label: 'Years of Learning', value: '9', color: '#14B8A6' },
    { label: 'Ventures Built', value: '3', color: '#7C3AED' },
    { label: 'Industries Explored', value: '5+', color: '#06B6D4' },
    { label: 'Lessons Applied', value: '∞', color: '#F59E0B' },
  ];

  return (
    <div className="relative flex flex-col h-full px-12 py-10 overflow-hidden bg-gradient-to-br from-[#0B0A1A] via-[#100E2A] to-[#0A0F1E]">
      {/* Enhanced ambient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#14B8A6]/8 rounded-full blur-[140px] animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#06B6D4]/8 rounded-full blur-[140px] animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-[120px]" />
        
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      {/* Header with enhanced styling */}
      <div className="relative text-center mb-8">
        <div
          className="flex items-center justify-center gap-3 mb-3 opacity-0"
          style={{ animation: 'journeyFadeUp 600ms 60ms ease-out forwards' }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#7C3AED]/50" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium">
            One Mission. Many Lessons. One Direction.
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#7C3AED]/50" />
        </div>
        
        <h2
          className="relative text-4xl md:text-5xl font-bold text-white tracking-tight opacity-0"
          style={{ animation: 'journeyFadeUp 600ms 140ms ease-out forwards' }}
        >
          Founder Journey
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#14B8A6] via-[#7C3AED] to-[#06B6D4] rounded-full opacity-60" />
        </h2>
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-6xl">
          {/* Enhanced connecting line with gradient */}
          <div className="hidden md:block absolute top-[88px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#14B8A6]/30 via-[#7C3AED]/30 to-[#06B6D4]/30" />
          <div className="hidden md:block absolute top-[88px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#14B8A6] via-[#7C3AED] to-[#06B6D4] opacity-20" 
            style={{ animation: 'linePulse 3s ease-in-out infinite' }} 
          />
          
          {/* Timeline nodes with connector dots */}
          {stages.map((s, i) => (
            <div
              key={s.name}
              className="hidden md:block absolute top-[88px] z-10"
              style={{
                left: `${8 + (i * 42)}%`,
                transform: 'translateX(-50%)',
              }}
            >
              <div 
                className="w-3 h-3 rounded-full border-2"
                style={{
                  backgroundColor: '#0B0A1A',
                  borderColor: s.color,
                  boxShadow: `0 0 20px ${s.color}40`,
                }}
              />
            </div>
          ))}

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {stages.map((s, i) => (
              <div
                key={s.name}
                className="relative flex flex-col items-center opacity-0 group"
                style={{ animation: `journeyPop 700ms ${300 + i * 200}ms cubic-bezier(0.22,1,0.36,1) forwards` }}
              >
                {/* Enhanced node marker */}
                <div
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 border backdrop-blur-sm z-10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl"
                  style={{
                    background: s.gradient
                      ? 'linear-gradient(135deg, #7C3AED, #06B6D4)'
                      : `${s.color}15`,
                    borderColor: `${s.color}50`,
                    boxShadow: `0 0 40px ${s.color}20`,
                  }}
                >
                  <div className="text-2xl">{s.icon}</div>
                  
                  {/* Glow ring on hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: `0 0 60px ${s.color}50`,
                    }}
                  />
                  
                  {/* Year badge */}
                  <div 
                    className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md text-[10px] font-bold"
                    style={{
                      backgroundColor: s.color,
                      color: '#fff',
                      boxShadow: `0 0 20px ${s.color}60`,
                    }}
                  >
                    {s.year}
                  </div>
                </div>

                {/* Enhanced card */}
                <div
                  className={`w-full rounded-2xl p-6 border transition-all duration-500 group-hover:transform group-hover:-translate-y-1 group-hover:shadow-2xl ${
                    s.gradient
                      ? 'bg-gradient-to-br from-[#7C3AED]/15 to-[#06B6D4]/15 border-[#06B6D4]/30 group-hover:border-[#06B6D4]/60'
                      : 'bg-white/[0.03] border-white/10 group-hover:border-white/20'
                  }`}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }}
                  />
                  
                  <h3
                    className="text-2xl font-bold mb-1 tracking-tight group-hover:scale-105 transition-transform duration-300"
                    style={
                      s.gradient
                        ? { background: 'linear-gradient(90deg, #A78BFA, #67E8F9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }
                        : { color: s.color }
                    }
                  >
                    {s.name}
                  </h3>
                  <p className="text-xs text-gray-400/80 mb-2 font-light">{s.subtitle}</p>
                  <p 
                    className="text-sm font-medium mb-4 inline-block px-3 py-1 rounded-full border"
                    style={{
                      color: s.color,
                      borderColor: `${s.color}30`,
                      backgroundColor: `${s.color}10`,
                    }}
                  >
                    {s.tag}
                  </p>
                  
                  {/* Points with enhanced styling */}
                  <div className="space-y-2 text-left">
                    {s.points.map((p, idx) => (
                      <div key={p} className="flex items-start gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                        style={{ transitionDelay: `${idx * 50}ms` }}>
                        <span 
                          className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                          style={{ 
                            backgroundColor: s.color,
                            boxShadow: `0 0 10px ${s.color}60`,
                          }} 
                        />
                        <span className="text-xs text-gray-400/90 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {p}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connector arrow (mobile) */}
                {i < stages.length - 1 && (
                  <div className="md:hidden flex items-center justify-center py-2 text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced closing insight with metrics */}
      <div
        className="relative mt-8 opacity-0"
        style={{ animation: 'journeyFadeUp 700ms 1200ms ease-out forwards' }}
      >
        {/* Metrics row */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-3 text-center group hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${1200 + i * 80}ms` }}
            >
              <div className="text-2xl font-bold" style={{ color: m.color }}>
                {m.value}
              </div>
              <div className="text-[10px] text-gray-400/80 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Insight card */}
        <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-2xl p-6 border border-white/10 text-center relative overflow-hidden group hover:border-white/20 transition-all duration-500">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 to-[#06B6D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <p className="text-gray-400 text-sm relative z-10">
            Over nearly nine years, each step revealed a different piece of the same challenge:
          </p>
          <p className="text-white font-semibold mt-2 relative z-10 text-lg">
            Customers struggle to access services efficiently. 
            <span className="block md:inline"> </span>
            Businesses struggle to engage customers digitally.
          </p>
          <div className="mt-3 inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#7C3AED]/20 to-[#06B6D4]/20 border border-[#7C3AED]/30">
            <p className="text-[#9B8AFB] text-sm font-medium tracking-wide">
              QBriz combines those lessons into a single scalable solution.
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes journeyFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes journeyPop {
          from { opacity: 0; transform: translateY(24px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes linePulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}