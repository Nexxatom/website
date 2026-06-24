export default function Slide07_WhyAssam() {
  const reasons = [
    {
      icon: '📱',
      title: 'Digital Adoption',
      description: 'Growing smartphone and UPI usage across the state',
      color: '#2563EB',
      gradient: 'from-[#2563EB]/20 to-[#2563EB]/5',
    },
    {
      icon: '🏪',
      title: 'MSME Ecosystem',
      description: 'Thousands of local businesses need digital tools',
      color: '#7C3AED',
      gradient: 'from-[#7C3AED]/20 to-[#7C3AED]/5',
    },
    {
      icon: '🌏',
      title: 'Northeast Gateway',
      description: 'Strategic entry point to expand across Northeast India',
      color: '#10B981',
      gradient: 'from-[#10B981]/20 to-[#10B981]/5',
    },
    {
      icon: '🚀',
      title: 'Startup Ecosystem',
      description: 'Government support, incubation, and growing opportunities',
      color: '#F59E0B',
      gradient: 'from-[#F59E0B]/20 to-[#F59E0B]/5',
    },
  ];

  const expansionPath = [
    { label: 'Assam', color: '#7C3AED', size: 'text-3xl' },
    { label: 'Northeast', color: '#06B6D4', size: 'text-2xl' },
    { label: 'India', color: '#10B981', size: 'text-2xl' },
  ];

  return (
    <div className="relative flex flex-col h-full px-8 py-10 overflow-hidden bg-gradient-to-br from-[#0B0A1A] via-[#100E2A] to-[#0A0F1E]">
      {/* Enhanced background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#7C3AED]/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#06B6D4]/6 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F59E0B]/5 rounded-full blur-[100px]" />
        
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Header */}
      <div className="relative text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#7C3AED]/50" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium">
            Strategic Launch
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
        </div>
        
        <h2 className="relative text-4xl md:text-5xl font-bold text-white tracking-tight">
          Why Assam?
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full opacity-60" />
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Reasons Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 content-center">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`relative bg-gradient-to-br ${reason.gradient} rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-2xl group opacity-0`}
              style={{
                animation: `slideUp 600ms ${200 + i * 100}ms ease-out forwards`,
              }}
            >
              {/* Top accent bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${reason.color}, ${reason.color}80)` }}
              />

              <div className="relative">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h4 
                  className="font-semibold text-white text-sm mb-1.5 group-hover:text-white transition-colors duration-300"
                  style={{ color: reason.color }}
                >
                  {reason.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>

              {/* Decorative element */}
              <div 
                className="absolute bottom-2 right-2 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  background: `radial-gradient(circle, ${reason.color}40, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Right: Expansion Path */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative w-full max-w-xs">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[#7C3AED]/5 rounded-3xl blur-2xl" />
            
            <div className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl p-8 border border-white/10 text-center">
              {/* Map pin icon */}
              <div className="text-5xl mb-4">📍</div>
              
              {/* Expansion steps */}
              <div className="space-y-3">
                {expansionPath.map((step, i) => (
                  <div key={step.label} className="relative">
                    <div 
                      className={`font-bold ${step.size} transition-all duration-300 hover:scale-105 cursor-default`}
                      style={{ color: step.color }}
                    >
                      {step.label}
                    </div>
                    {i < expansionPath.length - 1 && (
                      <div className="flex justify-center py-1">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Decorative line */}
              <div className="absolute top-1/2 right-0 w-px h-3/4 bg-gradient-to-b from-[#7C3AED]/30 via-[#06B6D4]/30 to-[#10B981]/30" />
            </div>
          </div>

          {/* Key message */}
          <div className="w-full max-w-xs">
            <div className="bg-gradient-to-br from-[#06B6D4]/10 to-[#06B6D4]/5 rounded-2xl p-4 border border-[#06B6D4]/30 text-center relative overflow-hidden group hover:border-[#06B6D4]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-[#06B6D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <p className="text-[#06B6D4] font-semibold text-sm">Assam is not our final market.</p>
                <p className="text-white text-sm mt-1 font-light">Assam is our launchpad.</p>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <span className="w-6 h-px bg-[#06B6D4]/30" />
                  <span className="text-[8px] tracking-[0.2em] uppercase text-gray-500">Strategic Expansion</span>
                  <span className="w-6 h-px bg-[#06B6D4]/30" />
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
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}