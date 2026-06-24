export default function Slide04_Problem() {
  const customerPoints = [
    {
      title: 'Waiting Without Visibility',
      description: 'Customers often wait without knowing actual service availability.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
    {
      title: 'Repeated Calls',
      description: 'Customers repeatedly call businesses just to get basic information.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.05 11.05 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      ),
    },
    {
      title: 'Unnecessary Visits',
      description: 'Customers visit locations only to find delays, closures, or overcrowding.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      ),
    },
    {
      title: 'Lack of Information',
      description: 'Service details, pricing, availability, and status are often unclear.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
  ];

  const businessPoints = [
    {
      title: 'Missed Opportunities',
      description: 'Potential customers leave due to uncertainty or delays.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 17h8m0 0v-8m0 8L13 9l-4 4-6-6" />
      ),
    },
    {
      title: 'Manual Operations',
      description: 'Many customer interactions are still handled manually.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      ),
    },
    {
      title: 'Repetitive Questions',
      description: 'Staff repeatedly answer the same customer queries.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      ),
    },
    {
      title: 'Limited Operational Visibility',
      description: 'Businesses lack real-time operational insights.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
    },
  ];

  const Column = ({
    side,
    label,
    color,
    points,
    delayBase,
  }: {
    side: 'left' | 'right';
    label: string;
    color: string;
    points: typeof customerPoints;
    delayBase: number;
  }) => (
    <div className="w-1/2 flex flex-col justify-center px-6">
      <div
        className={`flex items-center gap-3 mb-6 opacity-0 ${side === 'left' ? 'justify-end text-right' : 'justify-start'}`}
        style={{ animation: `problemFadeUp 600ms ${delayBase}ms ease-out forwards` }}
      >
        {side === 'right' && (
          <div className="relative">
            <span className="w-3 h-3 rounded-full block" style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}60` }} />
            <span className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: color, opacity: 0.3 }} />
          </div>
        )}
        <h3 className="text-2xl font-bold tracking-[0.15em]" style={{ color }}>
          {label}
        </h3>
        {side === 'left' && (
          <div className="relative">
            <span className="w-3 h-3 rounded-full block" style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}60` }} />
            <span className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: color, opacity: 0.3 }} />
          </div>
        )}
      </div>

      <div className="space-y-3.5">
        {points.map((p, i) => (
          <div
            key={p.title}
            className={`relative bg-white/[0.03] hover:bg-white/[0.06] rounded-xl p-4 border border-white/[0.06] hover:border-white/15 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl opacity-0 ${
              side === 'left' ? 'flex-row-reverse text-right' : ''
            } flex items-center gap-4 group cursor-default`}
            style={{ animation: `${side === 'left' ? 'problemFadeLeft' : 'problemFadeRight'} 550ms ${delayBase + 120 + i * 100}ms ease-out forwards` }}
          >
            {/* Background glow on hover */}
            <div 
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at ${side === 'left' ? 'right' : 'left'} center, ${color}10, transparent 70%)`,
              }}
            />
            
            <div
              className="relative w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
              style={{ 
                backgroundColor: `${color}15`, 
                borderColor: `${color}40`,
                boxShadow: `0 0 30px ${color}10`,
              }}
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke={color}>
                {p.icon}
              </svg>
            </div>
            <div className="relative">
              <h4 className="font-semibold text-white/90 text-sm group-hover:text-white transition-colors duration-300">{p.title}</h4>
              <p className="text-xs text-gray-400/80 mt-0.5 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col h-full px-8 py-10 overflow-hidden bg-gradient-to-br from-[#0B0A1A] via-[#100E2A] to-[#0A0F1E]">
      {/* Enhanced ambient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#2563EB]/8 rounded-full blur-[140px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED]/8 rounded-full blur-[140px] animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#06B6D4]/5 rounded-full blur-[120px]" />
        
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

      {/* Enhanced header */}
      <div className="relative text-center mb-10">
        <div
          className="flex items-center justify-center gap-3 mb-3 opacity-0"
          style={{ animation: 'problemFadeUp 600ms 40ms ease-out forwards' }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#2563EB]/50" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium">
            The Problem We Observed
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#7C3AED]/50" />
        </div>
        
        <h2
          className="relative text-4xl md:text-5xl font-bold text-white tracking-tight opacity-0"
          style={{ animation: 'problemFadeUp 600ms 120ms ease-out forwards' }}
        >
          Millions of Daily Service Interactions
          <span className="block text-3xl md:text-4xl mt-1" style={{ color: '#9B8AFB' }}>
            Remain Inefficient
          </span>
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] rounded-full opacity-60" />
        </h2>
      </div>

      {/* Two columns with enhanced center divider */}
      <div className="relative flex flex-1 items-stretch gap-4">
        <Column side="left" label="CUSTOMERS" color="#2563EB" points={customerPoints} delayBase={220} />

        {/* Enhanced center connector */}
        <div className="relative w-px bg-gradient-to-b from-transparent via-white/15 to-transparent flex items-center justify-center">
          {/* Pulsing line */}
          <div className="absolute inset-0 w-px bg-gradient-to-b from-[#2563EB]/30 via-[#7C3AED]/30 to-[#06B6D4]/30" 
            style={{ animation: 'linePulse 3s ease-in-out infinite' }} 
          />
          
          <div
            className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-[#0B0A1A] to-[#15132B] border-2 border-white/15 flex items-center justify-center opacity-0 shadow-xl"
            style={{ animation: 'problemPop 600ms 700ms cubic-bezier(0.34,1.56,0.64,1) forwards' }}
          >
            <div className="relative">
              <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {/* Glow around icon */}
              <div className="absolute inset-0 blur-xl" style={{ backgroundColor: '#7C3AED', opacity: 0.2 }} />
            </div>
          </div>
        </div>

        <Column side="right" label="BUSINESSES" color="#7C3AED" points={businessPoints} delayBase={220} />
      </div>

      {/* Enhanced closing insight */}
      <div
        className="relative mt-8 text-center opacity-0"
        style={{ animation: 'problemFadeUp 700ms 1100ms ease-out forwards' }}
      >
        <div className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10">
          <p className="text-sm text-gray-400">
            Different industries. <span className="text-white font-semibold">The same underlying friction.</span>
          </p>
          <div className="mt-2 flex items-center justify-center gap-2 text-xs text-gray-500">
            <span className="w-6 h-px bg-gray-700" />
            <span>8+ industries affected</span>
            <span className="w-6 h-px bg-gray-700" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes problemFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes problemFadeLeft {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes problemFadeRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes problemPop {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes linePulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}