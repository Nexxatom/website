export default function Slide13_CurrentProgress() {
  const milestones = [
    {
      phase: 'MVP Development',
      icon: '🏗️',
      color: '#7C3AED',
      bg: 'from-[#7C3AED]/20 to-[#7C3AED]/5',
      border: 'border-[#7C3AED]/30',
      items: [
        { text: 'Core Architecture Designed', status: 'completed' },
        { text: 'Admin Dashboard Designed', status: 'completed' },
        { text: 'Customer Flow Designed', status: 'completed' },
        { text: 'Pilot Strategy Prepared', status: 'in-progress' },
      ],
    },
    {
      phase: 'Next Steps',
      icon: '🚀',
      color: '#2563EB',
      bg: 'from-[#2563EB]/20 to-[#2563EB]/5',
      border: 'border-[#2563EB]/30',
      items: [
        { text: 'Complete MVP Development', status: 'pending' },
        { text: 'Deploy Pilot Restaurants', status: 'pending' },
        { text: 'Collect Customer Feedback', status: 'pending' },
        { text: 'Iterate & Improve', status: 'pending' },
      ],
    },
  ];

  const timeline = [
    { label: 'Concept', status: 'completed', color: '#7C3AED' },
    { label: 'Design', status: 'completed', color: '#7C3AED' },
    { label: 'Development', status: 'in-progress', color: '#F59E0B' },
    { label: 'Pilot', status: 'pending', color: '#2563EB' },
    { label: 'Launch', status: 'pending', color: '#2563EB' },
  ];

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'completed':
        return (
          <span className="w-5 h-5 rounded-full bg-[#10B981]/20 flex items-center justify-center">
            <svg className="w-3 h-3 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </span>
        );
      case 'in-progress':
        return (
          <span className="w-5 h-5 rounded-full bg-[#F59E0B]/20 flex items-center justify-center">
            <svg className="w-3 h-3 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </span>
        );
      default:
        return (
          <span className="w-5 h-5 rounded-full bg-gray-500/10 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
          </span>
        );
    }
  };

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
            Our Progress
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
        </div>
        
        <h2 className="relative text-4xl md:text-5xl font-bold text-white tracking-tight">
          Current Progress
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full opacity-60" />
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col gap-4">
        {/* Timeline */}
        <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-2xl p-5 border border-white/10">
          <div className="flex items-center justify-between relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-[8%] right-[8%] h-0.5 bg-white/10 -translate-y-1/2" />
            <div 
              className="absolute top-1/2 left-[8%] h-0.5 -translate-y-1/2 transition-all duration-1000"
              style={{ 
                width: '50%',
                background: 'linear-gradient(90deg, #7C3AED, #F59E0B)',
              }}
            />
            
            {timeline.map((item, i) => (
              <div
                key={item.label}
                className="relative flex flex-col items-center gap-1.5 z-10 opacity-0"
                style={{
                  animation: `fadeInUp 500ms ${200 + i * 80}ms ease-out forwards`,
                }}
              >
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    item.status === 'completed' ? 'border-[#10B981] bg-[#10B981]/20' :
                    item.status === 'in-progress' ? 'border-[#F59E0B] bg-[#F59E0B]/20 animate-pulse' :
                    'border-gray-500 bg-gray-500/10'
                  }`}
                >
                  <span className="text-sm">
                    {item.status === 'completed' ? '✓' :
                     item.status === 'in-progress' ? '⟳' :
                     '○'}
                  </span>
                </div>
                <span className="text-[10px] font-medium" style={{ color: item.color }}>
                  {item.label}
                </span>
                <span className="text-[8px] text-gray-500">
                  {item.status === 'completed' ? 'Done' :
                   item.status === 'in-progress' ? 'In Progress' :
                   'Pending'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {milestones.map((milestone, i) => (
            <div
              key={milestone.phase}
              className={`relative bg-gradient-to-br ${milestone.bg} rounded-2xl p-6 border ${milestone.border} hover:border-white/40 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-2xl group opacity-0`}
              style={{
                animation: `fadeInUp 600ms ${300 + i * 150}ms ease-out forwards`,
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div 
                    className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ background: milestone.color }}
                  />
                  <div className="relative w-11 h-11 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${milestone.color}20` }}
                  >
                    {milestone.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">{milestone.phase}</h3>
              </div>

              {/* Items */}
              <div className="space-y-2.5">
                {milestone.items.map((item, idx) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2.5 group/item hover:bg-white/[0.03] rounded-lg p-1.5 transition-colors duration-300"
                  >
                    {getStatusIcon(item.status)}
                    <span className={`text-sm transition-colors duration-300 ${
                      item.status === 'completed' ? 'text-gray-300' :
                      item.status === 'in-progress' ? 'text-white' :
                      'text-gray-500'
                    } group-hover/item:text-white`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress indicator */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Progress</span>
                  <span className="text-white font-medium">
                    {milestone.items.filter(i => i.status === 'completed').length}/{milestone.items.length}
                  </span>
                </div>
                <div className="mt-1.5 h-1 rounded-full bg-white/5 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${(milestone.items.filter(i => i.status === 'completed').length / milestone.items.length) * 100}%`,
                      background: `linear-gradient(90deg, ${milestone.color}, ${milestone.color}80)`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-4">
        <div className="bg-gradient-to-br from-[#06B6D4]/10 to-[#06B6D4]/5 rounded-2xl p-4 border border-[#06B6D4]/30 text-center relative overflow-hidden group hover:border-[#06B6D4]/50 transition-all duration-500">
          <div className="absolute inset-0 bg-[#06B6D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative">
            <p className="text-white text-sm font-medium">
              We are moving from concept to validation.
            </p>
            <p className="text-[#06B6D4] text-sm mt-1 font-medium">
              Currently preparing pilot deployments.
            </p>
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-[#06B6D4]/30" />
              <span className="text-[8px] tracking-[0.2em] uppercase text-gray-500">Q3 2024</span>
              <span className="w-8 h-px bg-[#06B6D4]/30" />
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
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}