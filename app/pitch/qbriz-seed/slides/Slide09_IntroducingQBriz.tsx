export default function Slide09_IntroducingQBriz() {
  const features = [
    {
      step: 'FIND',
      icon: '🔍',
      description: 'Search and discover services. View availability. View information.',
      color: '#7C3AED',
      bg: 'from-[#7C3AED]/20 to-[#7C3AED]/5',
      border: 'border-[#7C3AED]/30',
    },
    {
      step: 'DECIDE',
      icon: '🤔',
      description: 'Compare options. View menus. View services. View pricing.',
      color: '#2563EB',
      bg: 'from-[#2563EB]/20 to-[#2563EB]/5',
      border: 'border-[#2563EB]/30',
    },
    {
      step: 'GO',
      icon: '🚀',
      description: 'Access the service. Join queues. Place orders. Interact instantly.',
      color: '#10B981',
      bg: 'from-[#10B981]/20 to-[#10B981]/5',
      border: 'border-[#10B981]/30',
    },
  ];

  const connections = [
    { from: '👤', to: 'QBriz', label: 'User' },
    { from: 'QBriz', to: '🏢', label: 'Business' },
  ];

  return (
    <div className="relative flex flex-col h-full px-8 py-10 overflow-hidden bg-gradient-to-br from-[#0B0A1A] via-[#100E2A] to-[#0A0F1E]">
      {/* Enhanced background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7C3AED]/8 rounded-full blur-[160px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#06B6D4]/6 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-[140px]" />
        
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
            The Platform
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
        </div>
        
        <h2 className="relative text-4xl md:text-5xl font-bold text-white tracking-tight">
          Introducing QBriz
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full opacity-60" />
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Features */}
        <div className="lg:col-span-2 flex flex-col gap-4 justify-center">
          {features.map((feature, i) => (
            <div
              key={feature.step}
              className={`relative bg-gradient-to-br ${feature.bg} rounded-2xl p-6 border ${feature.border} hover:border-white/40 transition-all duration-500 hover:transform hover:-translate-x-1 hover:shadow-2xl group opacity-0`}
              style={{
                animation: `slideRight 600ms ${200 + i * 120}ms ease-out forwards`,
              }}
            >
              {/* Step number indicator */}
              <div className="absolute top-3 right-4 text-[10px] font-mono text-gray-600">
                0{i + 1}
              </div>

              <div className="flex items-start gap-4">
                {/* Icon with glow */}
                <div className="relative flex-shrink-0">
                  <div 
                    className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ background: feature.color }}
                  />
                  <div className="relative text-3xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <div 
                    className="text-2xl md:text-3xl font-bold mb-1.5 group-hover:scale-105 transition-transform duration-300 origin-left"
                    style={{ color: feature.color }}
                  >
                    {feature.step}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Decorative accent */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Right: QBriz Hub */}
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Connection Flow */}
          <div className="relative w-full max-w-xs">
            <div className="absolute inset-0 bg-[#7C3AED]/5 rounded-3xl blur-2xl" />
            
            <div className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl p-8 border border-white/10 text-center">
              {/* User */}
              <div className="text-5xl mb-2">👤</div>
              <p className="text-xs text-gray-500 mb-3">User</p>
              
              {/* Arrow down */}
              <div className="flex justify-center py-1">
                <svg className="w-5 h-5 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* QBriz Center */}
              <div className="relative group">
                <div className="absolute -inset-4 rounded-2xl bg-[#7C3AED]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-[#7C3AED]/20 to-[#06B6D4]/20 rounded-2xl p-4 border border-[#7C3AED]/30 group-hover:border-[#7C3AED]/60 transition-all duration-500">
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
                    QBriz
                  </div>
                  <p className="text-[8px] tracking-[0.2em] uppercase text-gray-500 mt-0.5">Platform</p>
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center py-1">
                <svg className="w-5 h-5 text-[#06B6D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Business */}
              <div className="text-5xl mt-2">🏢</div>
              <p className="text-xs text-gray-500 mt-1">Business</p>
            </div>
          </div>

          {/* Key Message */}
          <div className="w-full max-w-xs">
            <div className="bg-gradient-to-br from-[#06B6D4]/10 to-[#06B6D4]/5 rounded-2xl p-4 border border-[#06B6D4]/30 text-center relative overflow-hidden group hover:border-[#06B6D4]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-[#06B6D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <p className="text-white font-semibold text-sm">One Platform.</p>
                <p className="text-[#06B6D4] text-sm font-medium">Multiple Service Categories.</p>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <span className="w-6 h-px bg-[#06B6D4]/30" />
                  <span className="text-[8px] tracking-[0.2em] uppercase text-gray-500">Unified Experience</span>
                  <span className="w-6 h-px bg-[#06B6D4]/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}