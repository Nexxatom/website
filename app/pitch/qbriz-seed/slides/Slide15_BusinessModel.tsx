export default function Slide15_BusinessModel() {
  const phases = [
    {
      title: 'Today',
      icon: '🚀',
      color: '#7C3AED',
      bg: 'from-[#7C3AED]/20 to-[#7C3AED]/5',
      border: 'border-[#7C3AED]/30',
      items: [
        { icon: '💳', label: 'Restaurant Subscription', description: 'Monthly/Annual plans' },
        { icon: '⚡', label: 'Premium Dashboard', description: 'Advanced features' },
        { icon: '📱', label: 'Mobile App', description: 'Customer engagement' },
      ],
    },
    {
      title: 'Growth',
      icon: '📈',
      color: '#2563EB',
      bg: 'from-[#2563EB]/20 to-[#2563EB]/5',
      border: 'border-[#2563EB]/30',
      items: [
        { icon: '📊', label: 'Analytics', description: 'Business insights' },
        { icon: '🎯', label: 'Customer Engagement', description: 'Marketing tools' },
        { icon: '🤝', label: 'Partnerships', description: 'Strategic alliances' },
      ],
    },
    {
      title: 'Future',
      icon: '🌟',
      color: '#06B6D4',
      bg: 'from-[#06B6D4]/20 to-[#06B6D4]/5',
      border: 'border-[#06B6D4]/50',
      items: [
        { icon: '🏢', label: 'Enterprise Solutions', description: 'B2B offerings' },
        { icon: '💰', label: 'Transaction Revenue', description: 'Commission model' },
        { icon: '🌍', label: 'Global Expansion', description: 'International markets' },
      ],
      isHighlighted: true,
    },
  ];

  const revenueStreams = [
    { label: 'Subscription', percentage: 60, color: '#7C3AED' },
    { label: 'Premium Features', percentage: 25, color: '#2563EB' },
    { label: 'Transaction', percentage: 15, color: '#06B6D4' },
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
            Business Model
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
        </div>
        
        <h2 className="relative text-4xl md:text-5xl font-bold text-white tracking-tight">
          Revenue & Growth
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full opacity-60" />
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col gap-4">
        {/* Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
          {phases.map((phase, i) => (
            <div
              key={phase.title}
              className={`relative bg-gradient-to-br ${phase.bg} rounded-2xl p-6 border ${phase.border} hover:border-white/40 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-2xl group opacity-0 ${
                phase.isHighlighted ? 'shadow-[0_0_40px_rgba(6,182,212,0.15)]' : ''
              }`}
              style={{
                animation: `fadeInUp 600ms ${200 + i * 120}ms ease-out forwards`,
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div 
                    className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ background: phase.color }}
                  />
                  <div className="relative w-10 h-10 rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${phase.color}20` }}
                  >
                    {phase.icon}
                  </div>
                </div>
                <h3 
                  className="text-xl font-bold"
                  style={{ color: phase.color }}
                >
                  {phase.title}
                </h3>
              </div>

              {/* Items */}
              <div className="space-y-3.5">
                {phase.items.map((item, idx) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 group/item hover:bg-white/[0.03] rounded-lg p-2 transition-colors duration-300"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base group-hover/item:scale-110 transition-transform duration-300"
                        style={{ background: `${phase.color}15` }}
                      >
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm group-hover/item:text-white transition-colors duration-300">
                        {item.label}
                      </p>
                      <p className="text-[10px] text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative element */}
              <div 
                className="absolute bottom-3 right-3 w-12 h-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  background: `radial-gradient(circle, ${phase.color}20, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Revenue Streams */}
        <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-2xl p-4 border border-white/10">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-medium text-gray-400 tracking-wide">Revenue Streams</p>
            <span className="text-[8px] tracking-[0.15em] uppercase text-gray-500">Projected</span>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {revenueStreams.map((stream, i) => (
              <div
                key={stream.label}
                className="opacity-0"
                style={{
                  animation: `fadeInUp 400ms ${600 + i * 80}ms ease-out forwards`,
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-400">{stream.label}</span>
                  <span className="text-xs font-medium" style={{ color: stream.color }}>
                    {stream.percentage}%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${stream.percentage}%`,
                      background: `linear-gradient(90deg, ${stream.color}, ${stream.color}80)`,
                    }}
                  />
                </div>
              </div>
            ))}
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