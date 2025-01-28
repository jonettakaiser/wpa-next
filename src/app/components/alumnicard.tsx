'use client';
import React, { useState } from 'react';
import Image from 'next/image';

type AlumniCardProps = {
  name: string;
  photo: string;
};

const AlumniCard: React.FC<AlumniCardProps> = ({ name, photo }) => {

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Image Wrapper with Gradient and Name */}
      <div className="relative w-full h-full sm:w-60 sm:h-80 md:w-56 md:h-72">
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
      </div>
  )};

export default AlumniCard;
