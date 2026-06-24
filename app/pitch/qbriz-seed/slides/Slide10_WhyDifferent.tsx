export default function Slide10_WhyDifferent() {
  const features = [
    {
      name: 'Discovery',
      description: 'Find services near you',
      platforms: {
        google: true,
        justdial: true,
        zomato: true,
        practo: true,
        uber: true,
        qbriz: true,
      },
    },
    {
      name: 'Availability',
      description: 'Real-time service status',
      platforms: {
        google: false,
        justdial: false,
        zomato: true,
        practo: true,
        uber: true,
        qbriz: true,
      },
    },
    {
      name: 'Service Interaction',
      description: 'Direct engagement with businesses',
      platforms: {
        google: false,
        justdial: false,
        zomato: false,
        practo: false,
        uber: true,
        qbriz: true,
      },
    },
    {
      name: 'Queue Management',
      description: 'Join queues & waitlists digitally',
      platforms: {
        google: false,
        justdial: false,
        zomato: false,
        practo: false,
        uber: false,
        qbriz: true,
      },
    },
    {
      name: 'Business Operations',
      description: 'Tools for business management',
      platforms: {
        google: false,
        justdial: false,
        zomato: true,
        practo: true,
        uber: true,
        qbriz: true,
      },
    },
    {
      name: 'Multi-Industry',
      description: 'Across multiple service categories',
      platforms: {
        google: false,
        justdial: false,
        zomato: false,
        practo: false,
        uber: false,
        qbriz: true,
      },
    },
  ];

  const platformColors = {
    google: { name: 'Google Maps', color: '#34A853' },
    justdial: { name: 'Justdial', color: '#F9A825' },
    zomato: { name: 'Zomato', color: '#E23744' },
    practo: { name: 'Practo', color: '#4A90E2' },
    uber: { name: 'Uber', color: '#000000' },
    qbriz: { name: 'QBriz', color: '#7C3AED' },
  };

  const platformKeys = ['google', 'justdial', 'zomato', 'practo', 'uber', 'qbriz'] as const;

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
            Competitive Landscape
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
        </div>
        
        <h2 className="relative text-4xl md:text-5xl font-bold text-white tracking-tight">
          Why QBriz is Different
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full opacity-60" />
        </h2>
      </div>

      {/* Table Container */}
      <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        {/* Scrollable table */}
        <div className="overflow-x-auto h-full">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.05]">
                <th className="sticky left-0 z-10 bg-[#0B0A1A] text-left p-4 text-gray-400 font-medium text-xs tracking-wide min-w-[120px]">
                  Feature
                </th>
                {platformKeys.map((key) => (
                  <th
                    key={key}
                    className={`text-center p-4 text-xs font-medium tracking-wide min-w-[80px] ${
                      key === 'qbriz' ? `text-[${platformColors[key].color}]` : 'text-gray-400'
                    }`}
                    style={key === 'qbriz' ? { color: platformColors[key].color } : {}}
                  >
                    {platformColors[key].name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={feature.name}
                  className={`border-b border-white/5 hover:bg-white/[0.03] transition-colors duration-300 ${
                    i % 2 === 0 ? 'bg-white/[0.02]' : ''
                  }`}
                  style={{
                    animation: `fadeInUp 400ms ${100 + i * 60}ms ease-out both`,
                  }}
                >
                  <td className="sticky left-0 z-10 bg-[#0B0A1A] p-4">
                    <div className="text-white font-medium text-sm">{feature.name}</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">{feature.description}</div>
                  </td>
                  {platformKeys.map((key) => {
                    const hasFeature = feature.platforms[key];
                    const isQBriz = key === 'qbriz';
                    return (
                      <td key={key} className="text-center p-4">
                        {hasFeature ? (
                          <div className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${
                            isQBriz ? 'bg-[#7C3AED]/20' : 'bg-green-500/10'
                          }`}>
                            <svg className={`w-4 h-4 ${isQBriz ? 'text-[#7C3AED]' : 'text-green-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-500/5">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-6">
        <div className="bg-gradient-to-br from-[#7C3AED]/10 to-[#06B6D4]/10 rounded-2xl p-5 border border-[#7C3AED]/30 text-center relative overflow-hidden group hover:border-[#7C3AED]/50 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/5 via-transparent to-[#06B6D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative">
            <p className="text-white text-sm font-medium">
              QBriz is not replacing existing platforms.
            </p>
            <p className="text-[#A78BFA] text-sm mt-1 font-medium">
              QBriz is building a new layer between customers and services.
            </p>
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-[#7C3AED]/30" />
              <span className="text-[8px] tracking-[0.2em] uppercase text-gray-500">The Missing Layer</span>
              <span className="w-8 h-px bg-[#7C3AED]/30" />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
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