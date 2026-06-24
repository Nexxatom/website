export default function Slide05_WhyNow() {
  const trends = [
    {
      icon: '📱',
      title: 'Smartphones Everywhere',
      description: '800M+ Smartphone Users in India',
      color: '#2563EB',
      gradient: 'from-[#2563EB]/20 to-[#2563EB]/5',
    },
    {
      icon: '💳',
      title: 'UPI Changed Behavior',
      description: 'QR Scanning Is Now Habitual',
      color: '#10B981',
      gradient: 'from-[#10B981]/20 to-[#10B981]/5',
    },
    {
      icon: '🏪',
      title: 'Businesses Going Digital',
      description: 'Seeking affordable digital tools',
      color: '#7C3AED',
      gradient: 'from-[#7C3AED]/20 to-[#7C3AED]/5',
    },
    {
      icon: '⚡',
      title: 'Instant Expectations',
      description: 'Customers expect real-time info',
      color: '#F59E0B',
      gradient: 'from-[#F59E0B]/20 to-[#F59E0B]/5',
    },
    {
      icon: '☁️',
      title: 'Accessible Technology',
      description: 'Cloud & AI tools are available',
      color: '#06B6D4',
      gradient: 'from-[#06B6D4]/20 to-[#06B6D4]/5',
    },
    {
      icon: '🎯',
      title: 'Market Readiness',
      description: 'Timing creates the opportunity',
      color: '#EF4444',
      gradient: 'from-[#EF4444]/20 to-[#EF4444]/5',
    },
  ];

  return (
    <div className="relative flex flex-col h-full px-8 py-10 overflow-hidden bg-gradient-to-br from-[#0B0A1A] via-[#100E2A] to-[#0A0F1E]">
      {/* Enhanced background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7C3AED]/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#06B6D4]/6 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F59E0B]/5 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <div className="relative text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#7C3AED]/50" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium">
            The Perfect Timing
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
        </div>
        
        <h2 className="relative text-4xl md:text-5xl font-bold text-white tracking-tight">
          Why Now?
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full opacity-60" />
        </h2>
      </div>

      {/* Grid Layout - Clean and Organized */}
      <div className="relative flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 content-center">
        {trends.map((trend, i) => (
          <div
            key={trend.title}
            className={`relative bg-gradient-to-br ${trend.gradient} backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-2xl group opacity-0`}
            style={{
              animation: `slideUp 600ms ${200 + i * 80}ms ease-out forwards`,
            }}
          >
            {/* Top accent bar */}
            <div 
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(90deg, ${trend.color}, ${trend.color}80)` }}
            />

            {/* Icon with glow */}
            <div className="relative mb-4">
              <div 
                className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: trend.color }}
              />
              <div className="relative text-4xl">{trend.icon}</div>
            </div>

            {/* Content */}
            <h4 
              className="font-semibold text-white text-base mb-1.5 group-hover:text-white transition-colors duration-300"
              style={{ color: trend.color }}
            >
              {trend.title}
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {trend.description}
            </p>

            {/* Decorative element */}
            <div 
              className="absolute bottom-3 right-3 w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ 
                background: `radial-gradient(circle, ${trend.color}40, transparent 70%)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Comparison Footer - Clean and Centered */}
      <div className="relative mt-8">
        <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-2xl p-5 border border-white/10">
          {/* Title */}
          <div className="text-center mb-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500">
              The Shift That Makes It Possible
            </span>
          </div>

          {/* Comparison bars */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Before */}
            <div className="flex-1 w-full">
              <div className="bg-white/[0.03] rounded-xl p-3 border border-white/5">
                <p className="text-[10px] tracking-[0.15em] uppercase text-gray-500 text-center mb-2">Then</p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {['Businesses not ready', 'Customers not ready', 'Technology expensive'].map((item) => (
                    <span key={item} className="text-xs text-gray-400 bg-white/[0.03] px-3 py-1 rounded-full border border-white/5 flex items-center gap-1.5">
                      <span className="text-red-400">✕</span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center px-3 py-2">
              <div className="relative">
                <div className="absolute inset-0 blur-xl bg-[#06B6D4]/20 rounded-full" />
                <svg className="relative w-8 h-8 text-[#06B6D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            {/* After */}
            <div className="flex-1 w-full">
              <div className="bg-[#06B6D4]/5 rounded-xl p-3 border border-[#06B6D4]/20">
                <p className="text-[10px] tracking-[0.15em] uppercase text-[#06B6D4] text-center mb-2">Now</p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {['Businesses ready', 'Customers ready', 'Technology accessible'].map((item) => (
                    <span key={item} className="text-xs text-white bg-[#06B6D4]/10 px-3 py-1 rounded-full border border-[#06B6D4]/20 flex items-center gap-1.5">
                      <span className="text-[#06B6D4]">✓</span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}