import MissionPageContent from '@/components/MissionPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mission',
  description: 'Nexxatom Technologies Pvt Ltd Mission - To design, develop, and scale technology-driven platforms that create value, improve efficiency, and unlock new opportunities in the digital economy.',
  openGraph: {
    title: 'Our Mission | Nexxatom',
    description: 'To design, develop, and scale technology-driven platforms that create value, improve efficiency, and unlock new opportunities in the digital economy.',
    url: 'https://nexxatom.com/mission',
  },
};

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white">
      <MissionPageContent />
    </div>
  );
}
