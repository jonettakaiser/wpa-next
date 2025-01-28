'use client';
import React, { useState } from 'react';
import Image from 'next/image';

type HeadshotCardProps = {
  name: string;
  photo: string;
  bio: string;
};

const HeadshotCard: React.FC<HeadshotCardProps> = ({ name, photo, bio }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const toggleLightbox = () => {
    setIsLightboxOpen(!isLightboxOpen);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Image Wrapper with Gradient and Name */}
      <div className="relative w-full h-full sm:w-60 sm:h-80 md:w-64 md:h-86">
        {/* Image */}
        <Image
          src={photo}
          alt={name}
          width={200}
          height={300}
          objectFit="cover" // Maintains aspect ratio
          className="lazy-load w-full h-full object-cover rounded-sm shadow-lg"
        />

        {/* Name with Gradient Background */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
          <div className="text-white text-lg font-semibold text-center">{name}</div>
        </div>
      </div>

      {/* Truncated Bio with 'Read More' */}
      <p className="text-center text-gray-700 w-full sm:w-60 md:w-64">
        {bio.length > 100 ? (
          <>
            {bio.slice(0, 100)}...
            <button
              onClick={toggleLightbox}
              className="text-zinc-400 hover:underline ml-1"
            >
              Read More
            </button>
          </>
        ) : (
          bio
        )}
      </p>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-sm shadow-lg max-w-md w-full relative max-h-[80vh] overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={toggleLightbox}
        className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
      >
        ✕
      </button>

      {/* Modal Content */}
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      <p className="text-gray-600">{bio}</p>
    </div>
  </div>
)}
    </div>
  );
};

export default HeadshotCard;
