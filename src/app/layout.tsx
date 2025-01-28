'use client'

import { Lato } from "next/font/google";
import "./globals.css";

import Header from './components/header';
import Footer from './components/footer';
import { usePathname } from 'next/navigation'; // Hook to get the current route

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/'; // Check if the current route is the homepage

  return (
    <html lang="en" className="h-full">
      <body className={`${lato.variable} min-h-screen flex flex-col`}>
        {/* Conditionally Render Header and Footer */}
        {!isHomePage && (
          <>
            <Header />
            <main className="flex-grow pt-10 pb-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </>
        )}

        {/* Render only children for homepage */}
        {isHomePage && (
          <main className="w-screen h-screen">{children}</main>
        )}
      </body>
    </html>
  );
}
