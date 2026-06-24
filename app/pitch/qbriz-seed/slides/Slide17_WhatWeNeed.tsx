export default function Slide17_WhatWeNeed() {
  const needs = [
    {
      icon: '🏢',
      label: 'Incubation',
      description: 'Expert guidance',
      color: '#7C3AED',
      bg: 'from-[#7C3AED]/20 to-[#7C3AED]/5',
      border: 'border-[#7C3AED]/30',
    },
    {
      icon: '🎓',
      label: 'Mentorship',
      description: 'Founder development',
      color: '#2563EB',
      bg: 'from-[#2563EB]/20 to-[#2563EB]/5',
      border: 'border-[#2563EB]/30',
    },
    {
      icon: '🧪',
      label: 'Pilot Opportunities',
      description: 'Real-world validation',
      color: '#10B981',
      bg: 'from-[#10B981]/20 to-[#10B981]/5',
      border: 'border-[#10B981]/30',
    },
    {
      icon: '🤝',
      label: 'Strategic Network',
      description: 'Industry access',
      color: '#F59E0B',
      bg: 'from-[#F59E0B]/20 to-[#F59E0B]/5',
      border: 'border-[#F59E0B]/30',
    },
  ];

  const allocation = [
    { label: 'Product Development', percentage: 40, color: '#7C3AED' },
    { label: 'Pilot Deployment', percentage: 25, color: '#2563EB' },
    { label: 'Infrastructure', percentage: 15, color: '#10B981' },
    { label: 'Customer Acquisition', percentage: 10, color: '#F59E0B' },
    { label: 'Operations', percentage: 10, color: '#06B6D4' },
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
            What We Need
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
        </div>
        
        <h2 className="relative text-4xl md:text-5xl font-bold text-white tracking-tight">
          Funding & Ecosystem Support
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full opacity-60" />
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col gap-4">
        {/* Needs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {needs.map((need, i) => (
            <div
              key={need.label}
              className={`relative bg-gradient-to-br ${need.bg} rounded-2xl p-5 border ${need.border} hover:border-white/40 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-2xl group cursor-default opacity-0`}
              style={{
                animation: `fadeInUp 500ms ${200 + i * 80}ms ease-out forwards`,
              }}
            >
              {/* Top accent */}
              <div 
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${need.color}, ${need.color}80)` }}
              />

              <div className="relative">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {need.icon}
                </div>
                <h4 className="font-semibold text-white text-sm mb-0.5 group-hover:text-white transition-colors duration-300">
                  {need.label}
                </h4>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {need.description}
                </p>
              </div>

              {/* Glow dot */}
              <div 
                className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: need.color, boxShadow: `0 0 12px ${need.color}` }}
              />
            </div>
          ))}
        </div>

        {/* Funding Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
          {/* Left: Funding Amount */}
          <div className="bg-gradient-to-br from-[#7C3AED]/15 to-[#06B6D4]/15 rounded-2xl p-6 border border-[#06B6D4]/30 hover:border-[#06B6D4]/50 transition-all duration-500 group cursor-default">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💰</span>
              <h4 className="font-semibold text-white">Seed Funding</h4>
            </div>
            <p className="text-4xl md:text-5xl font-bold text-[#06B6D4] mb-1">₹5–10 L</p>
            <p className="text-xs text-gray-400">Initial investment for MVP & pilot</p>
          </div>

          {/* Middle: Allocation */}
          <div className="md:col-span-1 bg-white/[0.03] rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-500 group cursor-default">
            <p className="text-xs font-medium text-gray-400 tracking-wide mb-3">Fund Allocation</p>
            <div className="space-y-2">
              {allocation.map((item, i) => (
                <div
                  key={item.label}
                  className="opacity-0"
                  style={{
                    animation: `fadeInUp 400ms ${400 + i * 60}ms ease-out forwards`,
                  }}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">{item.label}</span>
                    <span className="font-medium" style={{ color: item.color }}>
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${item.percentage}%`,
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Key Message */}
          <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 group cursor-default flex flex-col justify-center items-center text-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-[#7C3AED]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <p className="text-white text-base font-medium mb-2">
                  Funding alone is not enough.
                </p>
                <p className="text-[#A78BFA] text-lg font-semibold">
                  We seek ecosystem support.
                </p>
                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="w-6 h-px bg-[#7C3AED]/30" />
                  <span className="text-[8px] tracking-[0.15em] uppercase text-gray-500">Partnership</span>
                  <span className="w-6 h-px bg-[#7C3AED]/30" />
                </div>
              </div>
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