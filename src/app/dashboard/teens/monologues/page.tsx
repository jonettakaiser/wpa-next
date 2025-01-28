import React from 'react';

 // Array of monologue PDFs
 const monologues = [
    { name: "Cheerlead", link: "/pdfs/teens/monologues/cheerlead.pdf" },
    { name: "Dirt", link: "/pdfs/teens/monologues/dirt.pdf" },
    { name: "Don't Even", link: "/pdfs/teens/monologues/donteven.pdf" },
    { name: "Dream On", link: "/pdfs/teens/monologues/dreamon.pdf" },
    { name: "Family Affair", link: "/pdfs/teens/monologues/family-affair.pdf" },
    { name: "Family Vacation", link: "/pdfs/teens/monologues/family-vacation.pdf" },
    { name: "Forever", link: "/pdfs/teens/monologues/forever.pdf" },
    { name: "Heaven", link: "/pdfs/teens/monologues/heaven.pdf" },
    { name: "Huck", link: "/pdfs/teens/monologues/huck.pdf" },
    { name: "Katy", link: "/pdfs/teens/monologues/katy.pdf" },
    { name: "Marissa", link: "/pdfs/teens/monologues/marissa.pdf" },
    { name: "Neverland", link: "/pdfs/teens/monologues/neverland.pdf" },
    { name: "Nickname", link: "/pdfs/teens/monologues/nickname.pdf" },
    { name: "Powerful", link: "/pdfs/teens/monologues/powerful.pdf" },
    { name: "Rebel", link: "/pdfs/teens/monologues/rebel.pdf" },
    { name: "Sins", link: "/pdfs/teens/monologues/sins.pdf" },
    { name: "Something", link: "/pdfs/teens/monologues/something.pdf" },
    { name: "Star", link: "/pdfs/teens/monologues/star.pdf" }  
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
