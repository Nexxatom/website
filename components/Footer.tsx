import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Logo className="h-8 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Nexxatom is a technology and innovation company focused on building scalable digital products, business infrastructure, and future-ready solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/values" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Values
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ventures</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  QBriz
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Nexxatom Technologies Pvt Ltd. All rights reserved.</p>
            <p className="mt-1 text-xs">Founded by Biswajit Narzary</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/about" className="text-gray-500 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/about" className="text-gray-500 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
