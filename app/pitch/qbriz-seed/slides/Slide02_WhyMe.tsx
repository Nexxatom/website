export default function Slide02_WhyMe() {
  const milestones = [
    {
      year: '2018–2023',
      color: '#7C3AED',
      title: 'Toyyos Online Services Pvt Ltd',
      description: 'Built a platform to connect international travelers with authentic local service providers. Learned customer acquisition, partnerships, operations, and the challenges of digitizing traditional service businesses.',
      icon: '🌏',
    },
    {
      year: '2023',
      color: '#06B6D4',
      title: 'EZCODE Technologies Pvt Ltd',
      description: 'Started a technology-focused company after realizing that many local businesses lacked access to technology, digital presence, and scalable systems.',
      icon: '💻',
    },
    {
      year: '2024',
      color: '#10B981',
      title: 'Simang EdTech Pvt Ltd',
      description: 'Created to address the education and technology awareness gap discovered during market exploration, focusing on employability, entrepreneurship, and local-language learning.',
      icon: '📚',
    },
    {
      year: '2018–2026',
      color: '#8B5CF6',
      title: 'Technology Learning Journey',
      description: 'Continuously learned web hosting, servers, domains, CDN, WordPress, Laravel, PHP, Node.js, Next.js, databases, cloud infrastructure, AI-assisted development, and product engineering while building and exploring businesses.',
      icon: '⚙️',
    },
    {
      year: '2023–2025',
      color: '#EC4899',
      title: 'Years of Exploration',
      description: 'Worked closely with local businesses and discovered that lack of digital literacy, operational systems, and business enablement were often larger barriers than software itself.',
      icon: '🔍',
    },
    {
      year: '2026',
      color: '#F59E0B',
      title: 'Nexxatom + QBriz',
      description: 'Consolidated years of learning, market exploration, technology development, and business experience into one vision: building the operating layer for local service businesses. QBriz is the result of nearly a decade of learning why local businesses struggle to grow.',
      icon: '🚀',
    },
  ];

  const stats = [
    { value: '9+', label: 'Years Exploring', color: '#7C3AED', icon: '⏳' },
    { value: '3+', label: 'Ventures', color: '#06B6D4', icon: '🏢' },
    { value: '100+', label: 'Conversations', color: '#10B981', icon: '💬' },
    { value: '1', label: 'Unified Vision', color: '#F59E0B', icon: '🎯' },
  ];

  const skills = [
    'Built Companies',
    'Learned From Failure',
    'Studied Local Businesses',
    'Technology Execution',
  ];

  return (
    <div className="relative flex h-full px-12 py-10 overflow-hidden bg-gradient-to-br from-[#0B0A1A] via-[#100E2A] to-[#0A0F1E]">
      {/* Enhanced ambient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[140px] animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#06B6D4]/8 rounded-full blur-[120px] animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F59E0B]/5 rounded-full blur-[100px]" />
        
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Profile panel with enhanced styling */}
      <div
        className="relative w-[32%] flex flex-col items-center justify-center pr-10 border-r border-white/[0.06] opacity-0"
        style={{ animation: 'whyMeFadeRight 700ms 80ms ease-out forwards' }}
      >
        {/* Decorative background circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-gradient-to-br from-[#7C3AED]/5 to-[#06B6D4]/5 blur-2xl" />

        {/* Profile image with enhanced glow */}
        <div className="relative mb-8 group">
          {/* Multiple glow layers */}
          <div className="absolute inset-[-30px] rounded-full bg-[#7C3AED]/20 blur-3xl animate-pulse-slow" />
          <div className="absolute inset-[-15px] rounded-full bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
          
          <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] p-[3px] shadow-[0_0_60px_rgba(124,58,237,0.3)] group-hover:shadow-[0_0_80px_rgba(124,58,237,0.5)] transition-shadow duration-500">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0B0A1A] to-[#15132B] flex items-center justify-center overflow-hidden">
              <span className="text-5xl font-bold bg-gradient-to-br from-[#C4B5FD] to-[#67E8F9] bg-clip-text text-transparent">
                BN
              </span>
            </div>
          </div>
          
          {/* Status indicator */}
          <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-[#0B0A1A] border-2 border-[#0B0A1A] flex items-center justify-center">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#10B981]/30 to-[#34D399]/30 border border-[#10B981]/50 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <svg className="w-4 h-4 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-white tracking-tight mb-1 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Biswajit Narzary
        </h3>
        <p className="text-[#9B8AFB] text-sm font-medium mb-2 tracking-wide">Founder &amp; CEO</p>
        <p className="text-gray-400/80 text-sm text-center font-light">Nexxatom Technologies Pvt Ltd</p>

        {/* Skills tags */}
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {skills.map((skill, i) => (
            <span
              key={skill}
              className="px-3 py-1 text-[10px] tracking-wide text-gray-400 bg-white/[0.03] border border-white/10 rounded-full opacity-0"
              style={{ animation: `whyMeFadeUp 500ms ${400 + i * 100}ms ease-out forwards` }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Experience badge */}
        <div className="mt-6 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
          <span className="text-xs tracking-[0.2em] uppercase text-gray-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] shadow-[0_0_10px_rgba(124,58,237,0.6)]" />
            9 Years Building
          </span>
        </div>

        {/* Social proof */}
        <div className="mt-4 flex gap-4 text-gray-500 text-xs">
          <span className="flex items-center gap-1">
            <span className="text-[#F59E0B]">✦</span> 12+ Projects
          </span>
          <span className="w-px h-3 bg-white/10" />
          <span className="flex items-center gap-1">
            <span className="text-[#06B6D4]">●</span> 5+ Countries
          </span>
        </div>
      </div>

      {/* Right panel content */}
      <div className="w-[68%] pl-10 flex flex-col justify-center">
        <div
          className="flex items-center gap-3 mb-8 opacity-0"
          style={{ animation: 'whyMeFadeUp 600ms 160ms ease-out forwards' }}
        >
          <div className="h-px w-8 bg-gradient-to-r from-[#7C3AED] to-transparent" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-gray-500 font-medium">
            The Journey So Far
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        {/* Timeline with enhanced styling */}
        <div className="relative">
          {/* Connecting line with gradient */}
          <div className="absolute left-7 top-2 bottom-2 w-px bg-gradient-to-b from-[#7C3AED]/60 via-[#06B6D4]/40 to-[#F59E0B]/60" />
          
          {/* Animated line pulse */}
          <div className="absolute left-7 top-2 bottom-2 w-px bg-gradient-to-b from-[#7C3AED] via-[#06B6D4] to-[#F59E0B] opacity-20" 
            style={{ animation: 'timelinePulse 3s ease-in-out infinite' }} 
          />

          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="relative flex items-start gap-5 opacity-0 group cursor-default"
                style={{ animation: `whyMeFadeRight 600ms ${260 + i * 130}ms ease-out forwards` }}
              >
                {/* Timeline node */}
                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border backdrop-blur-sm z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
                  style={{
                    backgroundColor: `${m.color}1A`,
                    borderColor: `${m.color}50`,
                    boxShadow: `0 0 30px ${m.color}1F`,
                  }}
                >
                  <span className="text-2xl">{m.icon}</span>
                  
                  {/* Glow ring */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: `0 0 40px ${m.color}40`,
                    }}
                  />
                </div>
                
                <div className="pt-1 flex-1">
                  <div className="flex items-center gap-3 mb-0.5">
                    <h4 className="text-lg font-semibold text-white/90 leading-tight group-hover:text-white transition-colors duration-300">
                      {m.title}
                    </h4>
                    <span 
                      className="text-xs font-mono px-2 py-0.5 rounded-full border"
                      style={{
                        color: m.color,
                        borderColor: `${m.color}30`,
                        backgroundColor: `${m.color}10`,
                      }}
                    >
                      {m.year}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats with enhanced styling */}
        <div
          className="grid grid-cols-4 gap-4 mt-8 opacity-0"
          style={{ animation: 'whyMeFadeUp 600ms 820ms ease-out forwards' }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 text-center overflow-hidden group hover:border-white/15 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
              style={{
                animationDelay: `${820 + i * 80}ms`,
              }}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${s.color}20, transparent 50%, ${s.color}20)`,
                }}
              />
              
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }}
              />
              
              <div className="relative">
                <div className="text-3xl font-bold tabular-nums mb-0.5" style={{ color: s.color }}>
                  {s.value}
                </div>
                <div className="text-[12px] text-gray-400 leading-tight flex items-center justify-center gap-1.5">
                  <span>{s.icon}</span>
                  <span>{s.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes whyMeFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes whyMeFadeRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes whyMeFadeLeft {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes timelinePulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}