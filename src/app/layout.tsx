import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

import Header from './components/header';
import Footer from './components/footer';

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"], // Specify weights if needed
});

export const metadata: Metadata = {
  title: "World Premiere Artists",
  description: "World Premiere Artists is a training company that helps train and develop models and actors to be seen by top celebrity agents and managers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${lato.variable} min-h-screen flex flex-col`}>
        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <main className="pt-10 pb-10 flex-grow justify-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
