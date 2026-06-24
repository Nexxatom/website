export default function Slide08_MarketOpportunity() {
  const industries = [
    { icon: '🍽️', label: 'Restaurants', color: '#F59E0B', bg: 'from-[#F59E0B]/20 to-[#F59E0B]/5' },
    { icon: '💇', label: 'Salons', color: '#06B6D4', bg: 'from-[#06B6D4]/20 to-[#06B6D4]/5' },
    { icon: '🏥', label: 'Clinics', color: '#10B981', bg: 'from-[#10B981]/20 to-[#10B981]/5' },
    { icon: '🏦', label: 'Banks', color: '#7C3AED', bg: 'from-[#7C3AED]/20 to-[#7C3AED]/5' },
    { icon: '🏛️', label: 'Government', color: '#EF4444', bg: 'from-[#EF4444]/20 to-[#EF4444]/5' },
    { icon: '🚕', label: 'Mobility', color: '#8B5CF6', bg: 'from-[#8B5CF6]/20 to-[#8B5CF6]/5' },
    { icon: '🏠', label: 'Home Services', color: '#06B6D4', bg: 'from-[#06B6D4]/20 to-[#06B6D4]/5' },
    { icon: '📚', label: 'Education', color: '#EC4899', bg: 'from-[#EC4899]/20 to-[#EC4899]/5' },
  ];

  const metrics = [
    { value: '800M+', label: 'Smartphone Users', color: '#7C3AED' },
    { value: '50M+', label: 'MSMEs in India', color: '#06B6D4' },
    { value: '100M+', label: 'Daily Interactions', color: '#10B981' },
    { value: '$1T+', label: 'Market Potential', color: '#F59E0B' },
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
            Market Opportunity
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
        </div>
        
        <h2 className="relative text-4xl md:text-5xl font-bold text-white tracking-tight">
          Massive & Growing Market
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full opacity-60" />
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center gap-5">
        {/* Customer Need - Top */}
        <div className="w-full max-w-3xl">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#7C3AED]/20 to-[#06B6D4]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-xl p-4 border border-white/10 text-center group-hover:border-white/20 transition-all duration-500">
              <p className="text-gray-300 text-sm font-medium tracking-wide">
                Customer Needs a Service
              </p>
              {/* Arrow indicator */}
              <div className="flex justify-center mt-1">
                <svg className="w-4 h-4 text-[#7C3AED]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {industries.map((industry, i) => (
              <div
                key={industry.label}
                className={`relative bg-gradient-to-br ${industry.bg} rounded-xl p-3 text-center border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-2xl group opacity-0`}
                style={{
                  animation: `fadeInScale 500ms ${300 + i * 60}ms ease-out forwards`,
                }}
              >
                {/* Top accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, ${industry.color}, ${industry.color}80)` }}
                />
                
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
            ))}
          </div>
        </div>

        {/* Arrow down */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 blur-xl bg-[#06B6D4]/20 rounded-full" />
            <svg className="relative w-6 h-6 text-[#06B6D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Bottom - Massive Opportunity */}
        <div className="w-full max-w-3xl">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#7C3AED]/30 to-[#06B6D4]/30 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-[#7C3AED]/10 to-[#06B6D4]/10 rounded-xl p-5 border border-[#06B6D4]/30 group-hover:border-[#06B6D4]/60 transition-all duration-500">
              <p className="text-white font-bold text-lg md:text-xl text-center">
                Millions of Businesses
              </p>
              <div className="flex items-center justify-center gap-3 my-1">
                <span className="w-8 h-px bg-[#06B6D4]/30" />
                <span className="text-[#06B6D4] text-2xl">✦</span>
                <span className="w-8 h-px bg-[#06B6D4]/30" />
              </div>
              <p className="text-white font-bold text-lg md:text-xl text-center">
                Billions of Service Interactions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Footer */}
      <div className="relative mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="bg-white/[0.03] rounded-xl p-3 text-center border border-white/5 hover:border-white/15 transition-all duration-300 hover:transform hover:scale-105 opacity-0"
              style={{
                animation: `fadeInScale 500ms ${600 + i * 80}ms ease-out forwards`,
              }}
            >
              <div 
                className="text-xl md:text-2xl font-bold"
                style={{ color: metric.color }}
              >
                {metric.value}
              </div>
              <div className="text-[10px] text-gray-400 mt-0.5">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
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
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}