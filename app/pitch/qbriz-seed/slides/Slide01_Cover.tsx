export default function Slide01_Cover() {
  const nodes = [
    { id: 1, label: 'Restaurant', color: '#F59E0B', angle: -90, isMVP: true },
    { id: 2, label: 'Salon', color: '#EC4899', angle: -42, isMVP: false },
    { id: 3, label: 'Beauty Parlour', color: '#8B5CF6', angle: 6, isMVP: false },
    { id: 4, label: 'GYM', color: '#10B981', angle: 54, isMVP: false },
    { id: 5, label: 'Clinic', color: '#06B6D4', angle: 102, isMVP: false },
    { id: 6, label: 'Hotel', color: '#F59E0B', angle: 150, isMVP: false },
    { id: 7, label: 'Banks', color: '#7C3AED', angle: 198, isMVP: false },
    { id: 8, label: 'Govt Offices', color: '#EF4444', angle: 246, isMVP: false },
    { id: 9, label: 'Future LOBs', color: '#6B7280', angle: 294, isMVP: false },
  ];

  const dataFlow = ['Customer', 'Session', 'Service', 'Transaction', 'Insights'];
  const dataFlowColors = ['#A78BFA', '#7C3AED', '#06B6D4', '#F59E0B', '#10B981'];

  // Fixed particle positions to avoid hydration mismatch
  const particles = [
    { left: 10, top: 20, delay: 0, duration: 12 },
    { left: 25, top: 40, delay: 0.5, duration: 14 },
    { left: 40, top: 15, delay: 1, duration: 16 },
    { left: 55, top: 35, delay: 1.5, duration: 18 },
    { left: 70, top: 25, delay: 2, duration: 20 },
    { left: 85, top: 45, delay: 2.5, duration: 22 },
    { left: 15, top: 60, delay: 3, duration: 24 },
    { left: 30, top: 80, delay: 3.5, duration: 26 },
    { left: 45, top: 55, delay: 4, duration: 28 },
    { left: 60, top: 75, delay: 4.5, duration: 30 },
    { left: 75, top: 65, delay: 5, duration: 32 },
    { left: 90, top: 85, delay: 5.5, duration: 34 },
    { left: 20, top: 90, delay: 6, duration: 36 },
    { left: 35, top: 70, delay: 6.5, duration: 38 },
    { left: 50, top: 95, delay: 7, duration: 40 },
    { left: 65, top: 50, delay: 7.5, duration: 42 },
    { left: 80, top: 30, delay: 8, duration: 44 },
    { left: 5, top: 75, delay: 8.5, duration: 46 },
    { left: 95, top: 10, delay: 9, duration: 48 },
    { left: 50, top: 5, delay: 9.5, duration: 50 },
  ];

  const getIcon = (label: string) => {
    const icons: Record<string, string> = {
      Restaurant: '🍽️',
      Salon: '✂️',
      'Beauty Parlour': '💆',
      GYM: '🏋️',
      Clinic: '🏥',
      Hotel: '🏨',
      Banks: '🏦',
      'Govt Offices': '🏛️',
      'Future LOBs': '🚀',
    };
    return icons[label] || '•';
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#0A0F1E] via-[#0D0B1F] to-[#0A0F1E] relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7C3AED]/20 blur-[140px] rounded-full animate-[pulseSlow_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#06B6D4]/15 blur-[110px] rounded-full animate-[pulseSlow_10s_ease-in-out_infinite_1s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B5CF6]/10 blur-[100px] rounded-full animate-[pulseSlow_12s_ease-in-out_infinite_2s]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-6 md:px-16 py-10">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-8 lg:gap-12 items-center">
          {/* Left Panel - Brand Identity */}
          <div className="w-full lg:w-[45%] flex flex-col space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 animate-[fadeInUp_600ms_80ms_ease-out_forwards] opacity-0">
              <div className="relative">
                <div className="w-2 h-2 bg-[#06B6D4] rounded-full animate-ping" />
                <div className="w-2 h-2 bg-[#06B6D4] rounded-full absolute top-0" />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium">
                Seed Pitch · 2026
              </span>
            </div>

            {/* Hero Title */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-tight animate-[fadeInUp_700ms_150ms_ease-out_forwards] opacity-0">
              Connecting Customers, Local Services & Businesses, Instantly
            </h2>

            {/* Brand Name with Glow Effect */}
            <div className="relative animate-[fadeInUp_700ms_250ms_ease-out_forwards] opacity-0">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[0.9] relative">
                <span
                  className="relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, #A78BFA, #7C3AED, #06B6D4, #A78BFA)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradientShift 4s ease-in-out infinite',
                  }}
                >
                  QBriz
                </span>
                <div className="absolute inset-0 blur-2xl opacity-50" style={{
                  background: 'linear-gradient(135deg, #A78BFA, #7C3AED, #06B6D4)',
                  filter: 'blur(40px)',
                }} />
              </h1>
            </div>

            {/* Tagline with Separators */}
            <p className="text-xl md:text-2xl font-light text-white animate-[fadeInUp_700ms_340ms_ease-out_forwards] opacity-0 flex items-center gap-3">
              <span>Scan</span>
              <span className="w-2 h-2 bg-[#06B6D4] rounded-full animate-pulse" />
              <span>Connect</span>
              <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse" />
              <span>Experience</span>
            </p>

            {/* MVP Badge with Glow */}
            <div className="animate-[fadeInUp_700ms_400ms_ease-out_forwards] opacity-0">
              <div className="inline-flex items-center gap-2 bg-[#06B6D4]/10 px-4 py-2 rounded-full border border-[#06B6D4]/30 shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] transition-shadow duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]" />
                </span>
                <span className="text-[#06B6D4] font-medium text-sm">
                  Restaurant MVP • Built in Assam
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400 animate-[fadeInUp_700ms_460ms_ease-out_forwards] opacity-0">
              The Operating Platform for Local Services
            </p>

            {/* Footer with Glass Morphism */}
            <div className="pt-8 border-t border-gray-800/50 animate-[fadeInUp_700ms_520ms_ease-out_forwards] opacity-0">
              <p className="text-white/90 text-sm font-medium">Nexxatom Technologies Pvt Ltd</p>
              <p className="text-gray-500 text-xs mt-1">Building What's Next.</p>
              <div className="flex items-center gap-4 mt-4">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent flex-1" />
                <span className="text-[10px] text-gray-600 uppercase tracking-wider whitespace-nowrap">
                  Seed Funding & Incubation Pitch
                </span>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent flex-1" />
              </div>
            </div>
          </div>

          {/* Right Panel - Service Grid with Enhanced Visuals */}
          <div className="w-full lg:w-[50%] flex items-center justify-center">
            <div className="w-full max-w-md animate-[fadeIn_800ms_ease-out_forwards] opacity-0">
              {/* Session Engine Card with Enhanced Design */}
              <div className="mb-6 p-6 rounded-2xl bg-gradient-to-br from-[#7C3AED]/20 via-[#8B5CF6]/15 to-[#06B6D4]/20 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 group">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#7C3AED] via-[#8B5CF6] to-[#06B6D4] flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.3)] group-hover:shadow-[0_0_60px_rgba(124,58,237,0.5)] transition-shadow duration-500">
                      <span className="text-white font-bold text-sm tracking-[0.15em]">
                        QBRIZ
                      </span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#06B6D4] rounded-full animate-ping" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Session Engine</h3>
                    <p className="text-gray-400 text-sm">Core Technology</p>
                  </div>
                </div>
              </div>

              {/* Service Cards Grid with Hover Effects */}
              <div className="grid grid-cols-3 gap-3">
                {nodes.map((node, index) => (
                  <div
                    key={node.id}
                    className="group relative p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-[fadeInUp_500ms_ease-out_forwards] opacity-0"
                    style={{
                      animationDelay: `${400 + index * 60}ms`,
                      borderColor: node.isMVP ? `${node.color}50` : 'rgba(255,255,255,0.1)',
                      backgroundColor: node.isMVP ? `${node.color}15` : 'rgba(255,255,255,0.05)',
                    }}
                  >
                    {node.isMVP && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-[8px] font-bold text-black px-2 py-0.5 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)] animate-pulse">
                        MVP
                      </div>
                    )}
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-[-10deg]">
                      {getIcon(node.label)}
                    </div>
                    <div
                      className="text-[9px] md:text-[10px] tracking-[0.05em] uppercase font-medium text-center group-hover:tracking-[0.1em] transition-all duration-300"
                      style={{ color: node.isMVP ? '#F59E0B' : 'rgba(255,255,255,0.7)' }}
                    >
                      {node.label}
                    </div>
                    {node.isMVP && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#F59E0B]/5 to-transparent pointer-events-none" />
                    )}
                  </div>
                ))}
              </div>

              {/* Data Flow with Enhanced Visuals */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-2">
                  {dataFlow.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 animate-[fadeInRight_500ms_ease-out_forwards] opacity-0" style={{ animationDelay: `${1000 + index * 100}ms` }}>
                      <div className="flex items-center gap-1.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: dataFlowColors[index] }}
                        />
                        <span
                          className="text-[9px] md:text-[10px] font-mono font-medium whitespace-nowrap hover:text-white transition-colors duration-300"
                          style={{ color: dataFlowColors[index] }}
                        >
                          {item}
                        </span>
                      </div>
                      {index < dataFlow.length - 1 && (
                        <svg className="w-4 h-4 text-gray-600 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}