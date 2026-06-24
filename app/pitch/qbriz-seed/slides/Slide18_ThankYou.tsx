export default function Slide18_ThankYou() {
  const services = [
    { icon: '🍽️', label: 'Dine', color: '#F59E0B' },
    { icon: '💇', label: 'Wellness', color: '#06B6D4' },
    { icon: '🏥', label: 'Health', color: '#10B981' },
    { icon: '🏦', label: 'Banking', color: '#7C3AED' },
    { icon: '🏛️', label: 'Civic', color: '#EF4444' },
    { icon: '🚕', label: 'Transit', color: '#8B5CF6' },
  ];

  const stats = [
    { value: '9+', label: 'Years Building', color: '#7C3AED' },
    { value: '3+', label: 'Ventures', color: '#06B6D4' },
    { value: '100+', label: 'Conversations', color: '#10B981' },
    { value: '1', label: 'Unified Vision', color: '#F59E0B' },
  ];

  return (
    <div className="relative flex flex-col h-full px-8 py-10 overflow-hidden bg-gradient-to-br from-[#0B0A1A] via-[#100E2A] to-[#0A0F1E]">
      {/* Enhanced background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7C3AED]/10 rounded-full blur-[160px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#06B6D4]/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F59E0B]/6 rounded-full blur-[140px]" />
        
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

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center gap-4">
        {/* Service Icons - Orbital Ring */}
        <div className="relative w-64 h-64 md:w-72 md:h-72">
          {/* Central glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] opacity-20 blur-3xl" />
          </div>

          {/* Center hub */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative group">
              <div className="absolute -inset-6 rounded-full bg-[#7C3AED]/30 blur-2xl animate-pulse-slow" />
              <div className="relative text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent tracking-tight">
                QBriz
              </div>
            </div>
          </div>

          {/* Orbiting services */}
          {services.map((service, i) => {
            const angle = (i / services.length) * 360 - 90;
            const rad = (angle * Math.PI) / 180;
            const radius = 130;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            
            return (
              <div
                key={service.label}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                }}
              >
                <div className="relative group cursor-default opacity-0"
                  style={{
                    animation: `orbitPop 500ms ${300 + i * 80}ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                  }}
                >
                  <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ background: service.color }}
                  />
                  <div 
                    className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-2xl md:text-3xl border transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
                    style={{
                      backgroundColor: `${service.color}15`,
                      borderColor: `${service.color}40`,
                      boxShadow: `0 0 20px ${service.color}10`,
                    }}
                  >
                    {service.icon}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vision Statement */}
        <div className="text-center max-w-3xl">
          <div className="opacity-0"
            style={{
              animation: `fadeInUp 600ms 600ms ease-out forwards`,
            }}
          >
            <p className="text-2xl md:text-3xl text-white font-light tracking-wide">
              To become the starting point for accessing services.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 w-full max-w-md opacity-0"
          style={{
            animation: `fadeInUp 500ms 700ms ease-out forwards`,
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center bg-white/[0.03] rounded-xl p-3 border border-white/5 hover:border-white/15 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-xl font-bold" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-[8px] text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-6">
        <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-2xl p-5 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {/* Left */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-xs text-gray-400">Presented by</p>
              <p className="text-white font-medium text-sm">Nexxatom Technologies Pvt Ltd</p>
              <p className="text-[10px] text-gray-500 mt-0.5">Building What's Next.</p>
            </div>

            {/* Center - Tagline */}
            <div className="flex flex-col items-center justify-center border-x border-white/5 px-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-px bg-[#7C3AED]/30" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500">Find · Decide · Go</span>
                <span className="w-6 h-px bg-[#06B6D4]/30" />
              </div>
              <p className="text-[10px] text-gray-500 mt-1">Seed Funding & Incubation Pitch</p>
            </div>

            {/* Right - Thank You */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-xs text-gray-400">Thank you for your time</p>
              <p className="text-white font-bold text-lg bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] bg-clip-text text-transparent">
                Thank You.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="relative mt-3 pt-3 border-t border-white/5">
            <div className="flex items-center justify-center gap-2">
              <span className="text-[8px] tracking-[0.15em] uppercase text-gray-500">We are starting small, validating locally, and building toward a much larger vision.</span>
            </div>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="w-4 h-px bg-gray-700" />
              <span className="text-[8px] text-gray-600">2026 · QBriz</span>
              <span className="w-4 h-px bg-gray-700" />
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
        @keyframes orbitPop {
          from {
            opacity: 0;
            transform: translate(var(--tx, 0), var(--ty, 0)) translate(-50%, -50%) scale(0.4);
          }
          to {
            opacity: 1;
            transform: translate(var(--tx, 0), var(--ty, 0)) translate(-50%, -50%) scale(1);
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}