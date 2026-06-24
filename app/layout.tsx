import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderWrapper from '@/components/HeaderWrapper';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nexxatom - Building Technology. Creating Opportunities.",
    template: "%s | Nexxatom"
  },
  description: "Nexxatom Technologies Pvt Ltd is a technology and innovation company focused on building scalable digital products, business infrastructure, and future-ready solutions. Founded by Biswajit Narzary.",
  keywords: ["Nexxatom", "Nexxatom Technologies Pvt Ltd", "technology company", "digital solutions", "QBriz", "innovation", "business infrastructure", "Biswajit Narzary"],
  authors: [{ name: "Biswajit Narzary" }],
  creator: "Biswajit Narzary",
  publisher: "Nexxatom Technologies Pvt Ltd",
  metadataBase: new URL('https://nexxatom.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexxatom.com',
    siteName: 'Nexxatom',
    title: 'Nexxatom - Building Technology. Creating Opportunities.',
    description: 'Nexxatom Technologies Pvt Ltd is a technology and innovation company focused on building scalable digital products, business infrastructure, and future-ready solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nexxatom',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexxatom - Building Technology. Creating Opportunities.',
    description: 'Nexxatom Technologies Pvt Ltd is a technology and innovation company focused on building scalable digital products, business infrastructure, and future-ready solutions.',
    images: ['/og-image.png'],
    creator: '@nexxatom',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nexxatom Technologies Pvt Ltd',
    legalName: 'Nexxatom Technologies Pvt Ltd',
    alternateName: 'Nexxatom',
    url: 'https://nexxatom.com',
    logo: 'https://nexxatom.com/logo.svg',
    description: 'Nexxatom Technologies Pvt Ltd is a technology and innovation company focused on building scalable digital products, business infrastructure, and future-ready solutions.',
    founder: {
      '@type': 'Person',
      name: 'Biswajit Narzary',
    },
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://nexxatom.com/contact',
    },
    sameAs: [],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <HeaderWrapper />
        {children}
      </body>
    </html>
  );
}
