export default function Slide14_GoToMarket() {
  const phases = [
    {
      phase: 'Phase 1',
      number: '01',
      description: '10 Restaurants',
      detail: 'Initial pilot deployment',
      color: '#7C3AED',
      bg: 'from-[#7C3AED]/20 to-[#7C3AED]/5',
      border: 'border-[#7C3AED]/30',
      icon: '🏪',
    },
    {
      phase: 'Phase 2',
      number: '02',
      description: '100 Restaurants',
      detail: 'Scaled restaurant deployment',
      color: '#2563EB',
      bg: 'from-[#2563EB]/20 to-[#2563EB]/5',
      border: 'border-[#2563EB]/30',
      icon: '🏢',
    },
    {
      phase: 'Phase 3',
      number: '03',
      description: '1 City',
      detail: 'Complete city coverage',
      color: '#10B981',
      bg: 'from-[#10B981]/20 to-[#10B981]/5',
      border: 'border-[#10B981]/30',
      icon: '🌆',
    },
    {
      phase: 'Phase 4',
      number: '04',
      description: 'Multi-City',
      detail: 'Regional expansion',
      color: '#F59E0B',
      bg: 'from-[#F59E0B]/20 to-[#F59E0B]/5',
      border: 'border-[#F59E0B]/30',
      icon: '🏙️',
    },
    {
      phase: 'Phase 5',
      number: '05',
      description: 'Multi-Service Platform',
      detail: 'Full platform launch',
      color: '#06B6D4',
      bg: 'from-[#06B6D4]/20 to-[#06B6D4]/5',
      border: 'border-[#06B6D4]/50',
      icon: '🚀',
      isHighlighted: true,
    },
  ];

  const metrics = [
    { label: 'Year 1', value: '10', unit: 'Restaurants', color: '#7C3AED' },
    { label: 'Year 2', value: '100', unit: 'Restaurants', color: '#2563EB' },
    { label: 'Year 3', value: '1', unit: 'City', color: '#10B981' },
    { label: 'Year 4+', value: '∞', unit: 'Scale', color: '#06B6D4' },
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
            Go-To-Market Strategy
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
        </div>
        
        <h2 className="relative text-4xl md:text-5xl font-bold text-white tracking-tight">
          Our Path to Market
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full opacity-60" />
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col gap-4">
        {/* Phases with timeline */}
        <div className="relative flex-1">
          {/* Vertical timeline line */}
          <div className="absolute left-[60px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#7C3AED]/30 via-[#06B6D4]/30 to-[#06B6D4]/30" />
          <div className="absolute left-[60px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#7C3AED] via-[#06B6D4] to-[#06B6D4] opacity-20"
            style={{ animation: 'timelinePulse 3s ease-in-out infinite' }}
          />

          <div className="space-y-3">
            {phases.map((phase, i) => (
              <div
                key={phase.phase}
                className={`flex items-center gap-4 opacity-0 ${phase.isHighlighted ? 'relative' : ''}`}
                style={{
                  animation: `slideInLeft 500ms ${200 + i * 100}ms ease-out forwards`,
                }}
              >
                {/* Number circle */}
                <div className="relative flex-shrink-0">
                  <div 
                    className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ background: phase.color }}
                  />
                  <div 
                    className={`relative w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold border-2 transition-all duration-300 ${
                      phase.isHighlighted 
                        ? 'bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] border-[#06B6D4] shadow-[0_0_30px_rgba(124,58,237,0.3)]' 
                        : `bg-[${phase.color}]/20 border-[${phase.color}]/50`
                    }`}
                    style={!phase.isHighlighted ? { 
                      background: `${phase.color}20`,
                      borderColor: `${phase.color}50`,
                    } : {}}
                  >
                    <span className={phase.isHighlighted ? 'text-white' : ''} style={!phase.isHighlighted ? { color: phase.color } : {}}>
                      {phase.number}
                    </span>
                  </div>
                </div>

                {/* Phase card */}
                <div 
                  className={`flex-1 bg-gradient-to-br ${phase.bg} rounded-xl p-5 border ${phase.border} hover:border-white/40 transition-all duration-500 hover:transform hover:-translate-x-1 group ${
                    phase.isHighlighted ? 'shadow-[0_0_40px_rgba(124,58,237,0.15)]' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                          {phase.icon}
                        </span>
                        <h3 
                          className="text-lg font-bold text-white"
                          style={phase.isHighlighted ? { color: '#06B6D4' } : {}}
                        >
                          {phase.phase}
                        </h3>
                      </div>
                      <p className="text-xl font-semibold mt-1" style={{ color: phase.color }}>
                        {phase.description}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{phase.detail}</p>
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className="flex-shrink-0 text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Footer */}
        <div className="grid grid-cols-4 gap-3">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="bg-white/[0.03] rounded-xl p-3 text-center border border-white/5 hover:border-white/15 transition-all duration-300 hover:transform hover:scale-105 opacity-0"
              style={{
                animation: `fadeInUp 400ms ${700 + i * 80}ms ease-out forwards`,
              }}
            >
              <div className="text-[10px] text-gray-500 font-medium tracking-wide">{metric.label}</div>
              <div className="text-2xl font-bold mt-1" style={{ color: metric.color }}>
                {metric.value}
              </div>
              <div className="text-[10px] text-gray-500">{metric.unit}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
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
        @keyframes timelinePulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}