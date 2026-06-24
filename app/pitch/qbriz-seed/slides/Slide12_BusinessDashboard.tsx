export default function Slide12_BusinessDashboard() {
  const metrics = [
    {
      label: 'Status',
      value: 'Open',
      icon: '🟢',
      color: '#10B981',
      bg: 'from-[#10B981]/20 to-[#10B981]/5',
    },
    {
      label: 'Tables Occupied',
      value: '12/20',
      icon: '🪑',
      color: '#2563EB',
      bg: 'from-[#2563EB]/20 to-[#2563EB]/5',
    },
    {
      label: 'Pending Orders',
      value: '8',
      icon: '📋',
      color: '#F59E0B',
      bg: 'from-[#F59E0B]/20 to-[#F59E0B]/5',
    },
    {
      label: 'Revenue Today',
      value: '₹15,420',
      icon: '💰',
      color: '#10B981',
      bg: 'from-[#10B981]/20 to-[#10B981]/5',
    },
  ];

  const actions = [
    {
      icon: '📋',
      label: 'Menu Management',
      description: 'Update items & prices',
      color: '#7C3AED',
      bg: 'from-[#7C3AED]/20 to-[#7C3AED]/5',
    },
    {
      icon: '👥',
      label: 'Staff Assistance',
      description: 'Manage team & shifts',
      color: '#2563EB',
      bg: 'from-[#2563EB]/20 to-[#2563EB]/5',
    },
    {
      icon: '📊',
      label: 'Order Tracking',
      description: 'Real-time updates',
      color: '#10B981',
      bg: 'from-[#10B981]/20 to-[#10B981]/5',
    },
    {
      icon: '📈',
      label: 'Analytics',
      description: 'Business insights',
      color: '#F59E0B',
      bg: 'from-[#F59E0B]/20 to-[#F59E0B]/5',
    },
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'Rahul Sharma', items: '2x Pizza, 1x Pasta', time: '2 min ago', status: 'Preparing', color: '#F59E0B' },
    { id: '#ORD-002', customer: 'Priya Patel', items: '3x Burger, 2x Fries', time: '5 min ago', status: 'Ready', color: '#10B981' },
    { id: '#ORD-003', customer: 'Amit Kumar', items: '1x Biryani, 1x Raita', time: '10 min ago', status: 'Delivered', color: '#2563EB' },
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
            Business Dashboard
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
        </div>
        
        <h2 className="relative text-4xl md:text-5xl font-bold text-white tracking-tight">
          Restaurant Dashboard
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full opacity-60" />
        </h2>
      </div>

      {/* Dashboard Content */}
      <div className="relative flex-1 flex flex-col gap-4">
        {/* Header Bar */}
        <div className="flex items-center justify-between bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-2xl p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/20 flex items-center justify-center text-xl">
              🏪
            </div>
            <div>
              <p className="text-white font-semibold text-sm">The Grand Restaurant</p>
              <p className="text-[10px] text-gray-500">Fine Dining • Open 10:00 AM - 11:00 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] block animate-pulse" />
              <span className="absolute inset-0 rounded-full bg-[#10B981] animate-ping opacity-75" />
            </div>
            <span className="text-[#10B981] text-sm font-medium">Online</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-4 gap-3">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`relative bg-gradient-to-br ${metric.bg} rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-0.5 group opacity-0`}
              style={{
                animation: `fadeInUp 500ms ${200 + i * 80}ms ease-out forwards`,
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] text-gray-400 font-medium tracking-wide">{metric.label}</p>
                  <p className="text-2xl font-bold text-white mt-1">{metric.value}</p>
                </div>
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
              </div>
              {/* Bottom accent */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${metric.color}, ${metric.color}80)` }}
              />
            </div>
          ))}
        </div>

        {/* Bottom Section: Actions & Orders */}
        <div className="grid grid-cols-3 gap-4 flex-1">
          {/* Actions */}
          <div className="col-span-2 grid grid-cols-2 gap-3">
            {actions.map((action, i) => (
              <div
                key={action.label}
                className={`relative bg-gradient-to-br ${action.bg} rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-0.5 group cursor-pointer opacity-0`}
                style={{
                  animation: `fadeInUp 500ms ${400 + i * 80}ms ease-out forwards`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${action.color}20` }}
                  >
                    {action.icon}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm group-hover:text-white transition-colors duration-300">
                      {action.label}
                    </p>
                    <p className="text-[10px] text-gray-500">{action.description}</p>
                  </div>
                </div>
                {/* Hover arrow */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <p className="text-white font-medium text-sm">Recent Orders</p>
              <span className="text-[8px] tracking-[0.15em] uppercase text-gray-500">Live</span>
            </div>
            <div className="space-y-2">
              {recentOrders.map((order, i) => (
                <div
                  key={order.id}
                  className="bg-white/[0.03] rounded-lg p-2.5 border border-white/5 hover:border-white/10 transition-all duration-300 group opacity-0"
                  style={{
                    animation: `fadeInUp 400ms ${600 + i * 60}ms ease-out forwards`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-xs font-medium">{order.customer}</p>
                      <p className="text-[9px] text-gray-500">{order.items}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1.5">
                        <span 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: order.color }}
                        />
                        <span 
                          className="text-[9px] font-medium"
                          style={{ color: order.color }}
                        >
                          {order.status}
                        </span>
                      </div>
                      <p className="text-[8px] text-gray-600">{order.time}</p>
                    </div>
                  </div>
                </div>
              ))}
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
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}