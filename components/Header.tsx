// app/ui/Header.tsx or components/Header.tsx
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Logo className="h-6 w-auto" />
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-lg">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-lg">About</Link>
            <Link href="/qbriz" className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-lg">QBriz</Link>
            <Link href="/vision" className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-lg">Vision</Link>
            <Link href="/mission" className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-lg">Mission</Link>
            <Link href="/values" className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-lg">Values</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
