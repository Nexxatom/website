import QBrizPageContent from '@/components/QBrizPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QBriz',
  description: 'QBriz - Nexxatom Technologies Pvt Ltd flagship venture. A technology-driven platform designed to simplify how businesses operate, connect with customers, and grow in the digital economy.',
  openGraph: {
    title: 'QBriz | Nexxatom',
    description: 'QBriz is Nexxatom Technologies Pvt Ltd flagship venture - a technology-driven platform designed to simplify how businesses operate, connect with customers, and grow in the digital economy.',
    url: 'https://nexxatom.com/qbriz',
  },
};

export default function QBrizPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <QBrizPageContent />
    </div>
  );
}
