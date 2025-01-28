'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


    const TweensPage: React.FC = () => {
        const categories = [
          { name: 'Commercials', link: '/dashboard/tweens/commercials', image: '/media/commercial.jpg' },
          { name: 'Monologues', link: '/dashboard/tweens/monologues', image: '/media/monologue.jpg' },
          { name: 'TV', link: '/dashboard/tweens/tv', image: '/media/tv.jpg' },
        ];
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center p-8">
    <h1 className="text-3xl font-bold mb-8 text-center text-[rgb(219,13,13)]">
      Main Categories
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-4xl">
      {categories.map((category, index) => (
        <Link
          key={index}
          href={category.link}
          className="block bg-white shadow-lg rounded-lg overflow-hidden border-2 border-transparent hover:border-[rgb(219,13,13)] transition-all duration-300"
        >
          <div className="relative w-full h-48">
            <Image
              src={category.image}
              alt={category.name}
              width={200}
              height={300}
              objectFit="cover" // Maintains aspect ratio
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {category.name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  </div>
);
};

export default TweensPage;
