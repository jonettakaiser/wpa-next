import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from './components/header';
import Footer from './components/footer';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <div className="bg-pink pt-10 h-100 flex justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
