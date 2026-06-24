export default function Slide16_ExpansionRoadmap() {
  const industries = [
    { icon: '🍽️', label: 'Restaurants', color: '#F59E0B', bg: 'from-[#F59E0B]/20 to-[#F59E0B]/5', border: 'border-[#F59E0B]/30' },
    { icon: '💇', label: 'Salons', color: '#06B6D4', bg: 'from-[#06B6D4]/20 to-[#06B6D4]/5', border: 'border-[#06B6D4]/30' },
    { icon: '🏥', label: 'Clinics', color: '#10B981', bg: 'from-[#10B981]/20 to-[#10B981]/5', border: 'border-[#10B981]/30' },
    { icon: '🏦', label: 'Banks', color: '#7C3AED', bg: 'from-[#7C3AED]/20 to-[#7C3AED]/5', border: 'border-[#7C3AED]/30' },
    { icon: '🏛️', label: 'Government', color: '#EF4444', bg: 'from-[#EF4444]/20 to-[#EF4444]/5', border: 'border-[#EF4444]/30' },
    { icon: '🚕', label: 'Mobility', color: '#8B5CF6', bg: 'from-[#8B5CF6]/20 to-[#8B5CF6]/5', border: 'border-[#8B5CF6]/30' },
    { icon: '🏠', label: 'Home Services', color: '#06B6D4', bg: 'from-[#06B6D4]/20 to-[#06B6D4]/5', border: 'border-[#06B6D4]/30' },
    { icon: '📚', label: 'Education', color: '#EC4899', bg: 'from-[#EC4899]/20 to-[#EC4899]/5', border: 'border-[#EC4899]/30' },
  ];

  const expansionPhases = [
    {
      phase: 'Phase 1',
      label: 'Food & Dining',
      description: 'Restaurants & Cafes',
      color: '#F59E0B',
      year: '2024',
    },
    {
      phase: 'Phase 2',
      label: 'Personal Care',
      description: 'Salons & Wellness',
      color: '#06B6D4',
      year: '2024',
    },
    {
      phase: 'Phase 3',
      label: 'Health & Banking',
      description: 'Clinics & Banks',
      color: '#10B981',
      year: '2025',
    },
    {
      phase: 'Phase 4',
      label: 'Public Services',
      description: 'Government & Mobility',
      color: '#7C3AED',
      year: '2025',
    },
    {
      phase: 'Phase 5',
      label: 'Everyday Services',
      description: 'Home & Education',
      color: '#EC4899',
      year: '2026',
    },
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
      <div className="relative text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#7C3AED]/50" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium">
            Expansion Strategy
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
        </div>
        
        <h2 className="relative text-4xl md:text-5xl font-bold text-white tracking-tight">
          Expansion Roadmap
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full opacity-60" />
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col gap-4">
        {/* Phases Timeline */}
        <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-2xl p-5 border border-white/10">
          <div className="flex items-center justify-between relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-[6%] right-[6%] h-0.5 bg-white/10 -translate-y-1/2" />
            <div 
              className="absolute top-1/2 left-[6%] h-0.5 -translate-y-1/2 transition-all duration-1000"
              style={{ 
                width: '30%',
                background: 'linear-gradient(90deg, #7C3AED, #06B6D4)',
              }}
            />
            
            {expansionPhases.map((phase, i) => (
              <div
                key={phase.phase}
                className="relative flex flex-col items-center gap-1 z-10 opacity-0"
                style={{
                  animation: `fadeInUp 500ms ${200 + i * 80}ms ease-out forwards`,
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 hover:scale-110 cursor-default"
                  style={{ 
                    borderColor: phase.color,
                    background: `${phase.color}20`,
                  }}
                >
                  <span className="text-sm font-bold" style={{ color: phase.color }}>
                    {i + 1}
                  </span>
                </div>
                <span className="text-[10px] font-medium" style={{ color: phase.color }}>
                  {phase.phase}
                </span>
                <span className="text-[9px] text-gray-400 text-center leading-tight max-w-[60px]">
                  {phase.label}
                </span>
                <span className="text-[8px] text-gray-500">{phase.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 flex-1">
          {industries.map((industry, i) => (
            <div
              key={industry.label}
              className={`relative bg-gradient-to-br ${industry.bg} rounded-xl p-3 text-center border ${industry.border} hover:border-white/40 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-2xl group opacity-0 cursor-default`}
              style={{
                animation: `fadeInUp 500ms ${300 + i * 60}ms ease-out forwards`,
              }}
            >
              {/* Top accent */}
              <div 
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${industry.color}, ${industry.color}80)` }}
              />
              
              <div className="relative">
                <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <div 
                  className="text-[8px] font-medium uppercase tracking-wide"
                  style={{ color: industry.color }}
                >
                  {industry.label}
                </div>
              </div>

              {/* Glow dot */}
              <div 
                className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: industry.color, boxShadow: `0 0 8px ${industry.color}` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-4">
        <div className="bg-gradient-to-br from-[#7C3AED]/10 to-[#06B6D4]/10 rounded-2xl p-4 border border-[#7C3AED]/30 text-center relative overflow-hidden group hover:border-[#7C3AED]/50 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/5 via-transparent to-[#06B6D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative">
            <p className="text-white text-sm font-medium">
              Every service interaction follows a similar pattern.
            </p>
            <p className="text-[#A78BFA] text-sm mt-1 font-medium">
              QBriz can support them all.
            </p>
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-[#7C3AED]/30" />
              <span className="text-[8px] tracking-[0.2em] uppercase text-gray-500">One Platform • Infinite Possibilities</span>
              <span className="w-8 h-px bg-[#7C3AED]/30" />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
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