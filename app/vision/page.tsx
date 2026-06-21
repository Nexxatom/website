import VisionPageContent from '@/components/VisionPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vision',
  description: 'Nexxatom Technologies Pvt Ltd Vision - To become a globally trusted technology company that empowers businesses and individuals through innovative digital solutions.',
  openGraph: {
    title: 'Our Vision | Nexxatom',
    description: 'To become a globally trusted technology company that empowers businesses and individuals through innovative digital solutions.',
    url: 'https://nexxatom.com/vision',
  },
};

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-white">
      <VisionPageContent />
    </div>
  );
}
