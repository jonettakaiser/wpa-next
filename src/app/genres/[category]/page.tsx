import React from 'react';
import Link from 'next/link';

const GenresPage = ({ params }: { params: { category: string } }) => {
  const category = params.category; // Extract the dynamic category from the URL

  const genres = [
    { name: 'Commercials', link: `${category}/commercials`, image: '/media/commercial.jpg' },
    { name: 'Monologues', link: `${category}/monologues`, image: '/media/monologue.jpg' },
    { name: 'TV', link: `${category}/tv`, image: '/media/tv.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-[rgb(219,13,13)]">
        {category.charAt(0).toUpperCase() + category.slice(1)} Genres
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        {genres.map((genre, index) => (
          <Link
            key={index}
            href={`/genres/${genre.link}`} // Links to /genres/[category]/[genre]
            className="block bg-white shadow-lg rounded-lg overflow-hidden border-2 border-transparent hover:border-[rgb(219,13,13)] transition-all duration-300"
          >
            <div className="relative w-full h-48">
              <img
                src={genre.image}
                alt={genre.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {genre.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenresPage;
