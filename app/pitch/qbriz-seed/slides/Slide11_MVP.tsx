export default function Slide11_MVP() {
  const customerSteps = [
    { icon: '📱', label: 'Scan QR', description: 'Scan restaurant QR code' },
    { icon: '📋', label: 'View Menu', description: 'Browse digital menu' },
    { icon: '🛒', label: 'Place Order', description: 'Select items & submit' },
    { icon: '📊', label: 'Track Status', description: 'Real-time order tracking' },
    { icon: '🧾', label: 'View Bill', description: 'Digital bill & payment' },
  ];

  const restaurantSteps = [
    { icon: '🔔', label: 'Receive Order', description: 'Order notification' },
    { icon: '🪑', label: 'Manage Tables', description: 'Table assignments' },
    { icon: '✅', label: 'Update Status', description: 'Order progress updates' },
    { icon: '💳', label: 'Generate Bill', description: 'Digital bill generation' },
  ];

  const StepItem = ({ step, index, total, color, isLast }: any) => (
    <div className="relative">
      <div className="flex items-center gap-4 bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 group">
        {/* Step number */}
        <div className="absolute -top-2 -right-2 text-[8px] font-mono text-gray-600 bg-[#0B0A1A] px-1.5 py-0.5 rounded border border-white/5">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Icon with glow */}
        <div className="relative flex-shrink-0">
          <div 
            className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
            style={{ background: color }}
          />
          <div className="relative w-11 h-11 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300"
            style={{ 
              background: `${color}20`,
              boxShadow: `0 0 30px ${color}10`,
            }}
          >
            {step.icon}
          </div>
        </div>

        <div className="flex-1">
          <div className="text-white font-medium text-sm group-hover:text-white transition-colors duration-300">
            {step.label}
          </div>
          <div className="text-[10px] text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
            {step.description}
          </div>
        </div>

        {/* Arrow indicator */}
        <div className="flex-shrink-0 text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Connector line */}
      {!isLast && (
        <div className="flex justify-center py-1">
          <div className="relative">
            <div className="absolute inset-0 blur-xl" style={{ background: `${color}20`, borderRadius: '50%' }} />
            <svg className="relative w-4 h-4" style={{ color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );

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
            MVP Experience
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
        </div>
        
        <h2 className="relative text-4xl md:text-5xl font-bold text-white tracking-tight">
          How QBriz Works
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full opacity-60" />
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Customer Journey */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #2563EB, #2563EB80)' }} />
            <h3 className="text-lg font-bold text-[#2563EB]">Customer Journey</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-[#2563EB]/30 to-transparent" />
          </div>
          
          <div className="flex-1 space-y-0 overflow-y-auto pr-2">
            {customerSteps.map((step, i) => (
              <div
                key={step.label}
                className="opacity-0"
                style={{
                  animation: `slideInLeft 500ms ${200 + i * 100}ms ease-out forwards`,
                }}
              >
                <StepItem
                  step={step}
                  index={i}
                  total={customerSteps.length}
                  color="#2563EB"
                  isLast={i === customerSteps.length - 1}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Restaurant Journey */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #7C3AED, #7C3AED80)' }} />
            <h3 className="text-lg font-bold text-[#7C3AED]">Restaurant Journey</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-[#7C3AED]/30 to-transparent" />
          </div>
          
          <div className="flex-1 space-y-0 overflow-y-auto pr-2">
            {restaurantSteps.map((step, i) => (
              <div
                key={step.label}
                className="opacity-0"
                style={{
                  animation: `slideInRight 500ms ${200 + i * 100}ms ease-out forwards`,
                }}
              >
                <StepItem
                  step={step}
                  index={i}
                  total={restaurantSteps.length}
                  color="#7C3AED"
                  isLast={i === restaurantSteps.length - 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-6">
        <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.02] rounded-xl p-3 border border-white/10 text-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500">
            Seamless Experience • Digital First • Real-Time
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}