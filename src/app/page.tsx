'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const Home: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/media/bg1.jpg',
    '/media/bg2.jpg',
    '/media/bg3.jpg',
    '/media/bg4.jpg',
    '/media/bg5.jpg',
  ];

  const totalImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % totalImages);
    }, 5000); // Rotate background every 5 seconds
  
    return () => clearInterval(interval); // Cleanup interval
  }, [totalImages]);
  

  return (
    <div
      className={`relative h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center transition-all duration-1000`}
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/logo-white.svg"
          width={200}
          height={300}
          priority
          alt="World Premiere Artists Logo"
          className="w-[300px] h-auto"
        />
      </div>

      {/* Navigation Links */}
      <div className="absolute bottom-1/2 transform translate-y-24 flex space-x-6 text-white uppercase">
        <a href="/about" className="hover:text-[rgb(219,13,13)]">
          About
        </a>
        <a href="/instructors" className="hover:text-[rgb(219,13,13)]">
          Instructors
        </a>
        <a href="/imta" className="hover:text-[rgb(219,13,13)]">
          IMTA
        </a>
        <a href="/faq" className="hover:text-[rgb(219,13,13)]">
          FAQ
        </a>
        <a href="/contact" className="hover:text-[rgb(219,13,13)]">
          Contact
        </a>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-center text-sm text-black">
        <a
          href="/login"
          className="hover:text-[rgb(219,13,13)] mb-2">
          Student Login
        </a> · 
        <a
          href="/privacy"
          className="hover:text-[rgb(219,13,13)] mb-2">
           Privacy Policy
        </a>
        <p>© 2025 · World Premiere Artists · All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Home;
