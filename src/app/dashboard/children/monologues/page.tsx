import React from 'react';

const monologues = [
  { name: "Abe", link: "/pdfs/children/monologues/abe.pdf" },
  { name: "Addy", link: "/pdfs/children/monologues/addy.pdf" },
  { name: "Aladdin", link: "/pdfs/children/monologues/aladdin.pdf" },
  { name: "Bean", link: "/pdfs/children/monologues/bean.pdf" },
  { name: "Disney Danger", link: "/pdfs/children/monologues/disney-danger.pdf" },
  { name: "Louis", link: "/pdfs/children/monologues/louis.pdf" },
  { name: "Mandy", link: "/pdfs/children/monologues/mandy.pdf" },
  { name: "Princess", link: "/pdfs/children/monologues/princess.pdf" },
  { name: "Shonda", link: "/pdfs/children/monologues/shonda.pdf" },
  { name: "Sleep Talking", link: "/pdfs/children/monologues/sleeptalking.pdf" },
  { name: "Slugworth", link: "/pdfs/children/monologues/slugworth.pdf" },
  { name: "Snoring", link: "/pdfs/children/monologues/snoring.pdf" },
  { name: "Snow White", link: "/pdfs/children/monologues/snow-white.pdf" },
  { name: "Tooth Fairy", link: "/pdfs/children/monologues/toothfairy.pdf" },
  { name: "TV Show", link: "/pdfs/children/monologues/tv-show.pdf" },
  { name: "Uncle Al", link: "/pdfs/children/monologues/uncle-al.pdf" },
  { name: "Valentines", link: "/pdfs/children/monologues/valentines.pdf" },
  { name: "William", link: "/pdfs/children/monologues/william.pdf" },
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
