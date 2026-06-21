import AboutPageContent from '@/components/AboutPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Nexxatom Technologies Pvt Ltd - A technology and innovation company founded by Biswajit Narzary, focused on building scalable digital solutions and our flagship venture QBriz.',
  openGraph: {
    title: 'About Nexxatom',
    description: 'Learn about Nexxatom Technologies Pvt Ltd - A technology and innovation company founded by Biswajit Narzary, focused on building scalable digital solutions.',
    url: 'https://nexxatom.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutPageContent />
    </div>
  );
}
