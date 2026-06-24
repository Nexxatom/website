'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function HeaderWrapper() {
  const pathname = usePathname();
  
  // Hide header on pitch routes
  if (pathname?.startsWith('/pitch')) {
    return null;
  }
  
  return <Header />;
}
