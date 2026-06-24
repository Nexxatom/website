export default function Slide06_Vision() {
  const services = [
    { icon: '🍽️', label: 'Dine', color: '#F59E0B', bg: 'from-[#F59E0B]/20 to-[#F59E0B]/5' },
    { icon: '💇', label: 'Wellness', color: '#06B6D4', bg: 'from-[#06B6D4]/20 to-[#06B6D4]/5' },
    { icon: '🏥', label: 'Health', color: '#10B981', bg: 'from-[#10B981]/20 to-[#10B981]/5' },
    { icon: '🏦', label: 'Banking', color: '#7C3AED', bg: 'from-[#7C3AED]/20 to-[#7C3AED]/5' },
    { icon: '🏛️', label: 'Civic', color: '#EF4444', bg: 'from-[#EF4444]/20 to-[#EF4444]/5' },
    { icon: '🚕', label: 'Transit', color: '#8B5CF6', bg: 'from-[#8B5CF6]/20 to-[#8B5CF6]/5' },
  ];

  const pillars = [
    {
      icon: '🎯',
      title: 'Find',
      description: 'Discover the right service instantly',
      color: '#7C3AED',
    },
    {
      icon: '🤔',
      title: 'Decide',
      description: 'Make informed choices with confidence',
      color: '#06B6D4',
    },
    {
      icon: '🚀',
      title: 'Go',
      description: 'Act without friction or delay',
      color: '#10B981',
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
      <div className="relative text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#7C3AED]/50" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium">
            Our Vision
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
        </div>
        
        <h2 className="relative text-4xl md:text-5xl font-bold text-white tracking-tight">
          A World Without Friction
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full opacity-60" />
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center gap-6">
        {/* QBriz Brand Center */}
        <div className="relative group">
          <div className="absolute -inset-12 rounded-full bg-[#7C3AED]/20 blur-3xl animate-pulse-slow" />
          <div className="absolute -inset-6 rounded-full bg-[#06B6D4]/15 blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          
          <div className="relative text-center">
            <div className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent tracking-tight leading-none mb-3">
              QBriz
            </div>
            <div className="flex items-center justify-center gap-4">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="flex items-center gap-2 opacity-0"
                  style={{
                    animation: `fadeInScale 600ms ${400 + i * 150}ms ease-out forwards`,
                  }}
                >
                  <span className="text-2xl">{pillar.icon}</span>
                  <span className="text-xl font-semibold" style={{ color: pillar.color }}>
                    {pillar.title}
                  </span>
                  {i < pillars.length - 1 && (
                    <span className="text-gray-600 text-xl">·</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Categories - Clean Grid */}
        <div className="w-full max-w-4xl mt-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {services.map((service, i) => (
              <div
                key={service.label}
                className={`relative bg-gradient-to-br ${service.bg} rounded-2xl p-4 text-center border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-2xl group opacity-0`}
                style={{
                  animation: `fadeInScale 500ms ${500 + i * 80}ms ease-out forwards`,
                }}
              >
                {/* Top accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, ${service.color}, ${service.color}80)` }}
                />
                
                <div className="text-3xl mb-1.5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div 
                  className="text-[10px] font-medium uppercase tracking-wide"
                  style={{ color: service.color }}
                >
                  {service.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Statement Footer */}
      <div className="relative mt-8">
        <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-2xl p-5 border border-white/10 text-center relative overflow-hidden group hover:border-white/20 transition-all duration-500">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/5 via-transparent to-[#06B6D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#7C3AED]/50" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500">The Bigger Picture</span>
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
            </div>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              We envision a world where people spend less time searching, waiting, and guessing—
              <span className="block md:inline"> </span>
              <span className="text-white font-semibold">and more time getting things done.</span>
            </p>
          </div>
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
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}