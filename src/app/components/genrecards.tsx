import React from 'react';
import Link from 'next/link';

type GenreCardsProps = {
  subcategories: { name: string; link: string; image: string }[];
};

const GenreCards: React.FC<GenreCardsProps> = ({ subcategories }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
      {subcategories.map((subcategory, index) => (
        <Link
          key={index}
          href={subcategory.link}
          className="block bg-white shadow-lg rounded-lg overflow-hidden border-2 border-transparent hover:border-[rgb(219,13,13)] transition-all duration-300"
        >
          {/* Image */}
          <div className="relative w-full h-48">
            <img
              src={subcategory.image}
              alt={subcategory.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {subcategory.name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GenreCards;
