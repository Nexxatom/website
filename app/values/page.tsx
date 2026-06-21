import ValuesPageContent from '@/components/ValuesPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Values',
  description: 'Nexxatom Technologies Pvt Ltd Core Values - Innovation, Integrity, Excellence, Customer Focus, and Continuous Growth. The principles that guide everything we do.',
  openGraph: {
    title: 'Our Values | Nexxatom',
    description: 'Innovation, Integrity, Excellence, Customer Focus, and Continuous Growth - the principles that guide everything we do at Nexxatom.',
    url: 'https://nexxatom.com/values',
  },
};

export default function ValuesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ValuesPageContent />
    </div>
  );
}
