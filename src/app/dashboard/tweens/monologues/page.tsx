import React from 'react';

 // Array of monologue PDFs
 const monologues = [
    { name: "Abe", link: "/pdfs/tweens/monologues/abe.pdf" },
    { name: "Addy", link: "/pdfs/tweens/monologues/addy.pdf" },
    { name: "Bean", link: "/pdfs/tweens/monologues/bean.pdf" },
    { name: "Katy", link: "/pdfs/tweens/monologues/katy.pdf" },
    { name: "Lee", link: "/pdfs/tweens/monologues/lee.pdf" },
    { name: "Louis", link: "/pdfs/tweens/monologues/louis.pdf" },
    { name: "Mandy", link: "/pdfs/tweens/monologues/mandy.pdf" },
    { name: "Marissa", link: "/pdfs/tweens/monologues/marissa.pdf" },
    { name: "My Father", link: "/pdfs/tweens/monologues/myfather.pdf" },
    { name: "Neverland 911", link: "/pdfs/tweens/monologues/neverland911.pdf" },
    { name: "Nina", link: "/pdfs/tweens/monologues/nina.pdf" },
    { name: "Shonda", link: "/pdfs/tweens/monologues/shonda.pdf" },
    { name: "Slugworth", link: "/pdfs/tweens/monologues/slugworth.pdf" },
    { name: "Star", link: "/pdfs/tweens/monologues/star.pdf" },
    { name: "The Horrors", link: "/pdfs/tweens/monologues/thehorrors.pdf" },
    { name: "The Last Meal", link: "/pdfs/tweens/monologues/thelastmeal.pdf" },
    { name: "Toon Time", link: "/pdfs/tweens/monologues/toontime.pdf" },
    { name: "Will", link: "/pdfs/tweens/monologues/will.pdf" },
    { name: "William", link: "/pdfs/tweens/monologues/william.pdf" }  
];

const MonologuesPage: React.FC = () => {
 
  return (
    <div className="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-center text-[rgb(219,13,13)]">
        Monologues
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        {monologues.map((monologue, index) => (
          <a
            key={index}
            href={monologue.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white shadow-lg rounded-lg overflow-hidden border-2 border-transparent hover:border-[rgb(219,13,13)] transition-all duration-300 p-4 text-center"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {monologue.name}
            </h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MonologuesPage;
