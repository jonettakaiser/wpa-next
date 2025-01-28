import React from 'react';

const commercials = [
    { name: "Axe", link: "/pdfs/tweens/commercials/axe.pdf" },
    { name: "Burger King", link: "/pdfs/tweens/commercials/burgerking.pdf" },
    { name: "Cap'n Crunch", link: "/pdfs/tweens/commercials/cap-n-crunch.pdf" },
    { name: "Copperstone", link: "/pdfs/tweens/commercials/copperstone.pdf" },
    { name: "Crest", link: "/pdfs/tweens/commercials/crest.pdf" },
    { name: "Gel", link: "/pdfs/tweens/commercials/gel.pdf" },
    { name: "Glitter", link: "/pdfs/tweens/commercials/glitter.pdf" },
    { name: "Granola", link: "/pdfs/tweens/commercials/granola.pdf" },
    { name: "Kiss", link: "/pdfs/tweens/commercials/kiss.pdf" },
    { name: "Knotty Girl", link: "/pdfs/tweens/commercials/knottygirl.pdf" },
    { name: "Lunchables", link: "/pdfs/tweens/commercials/lunchables.pdf" },
    { name: "Made for Boys", link: "/pdfs/tweens/commercials/madeforboys.pdf" },
    { name: "M&M's", link: "/pdfs/tweens/commercials/mms.pdf" },
    { name: "Nerf Bash Ball", link: "/pdfs/tweens/commercials/nerf-bashball.pdf" },
    { name: "Nerf Blaster", link: "/pdfs/tweens/commercials/nerf-blaster.pdf" },
    { name: "Oreos", link: "/pdfs/tweens/commercials/oreos.pdf" },
    { name: "Pringles", link: "/pdfs/tweens/commercials/pringles.pdf" },
    { name: "Snickers", link: "/pdfs/tweens/commercials/snickers.pdf" },
    { name: "Starburst", link: "/pdfs/tweens/commercials/starburst.pdf" },
    { name: "SunnyD", link: "/pdfs/tweens/commercials/sunnyd.pdf" },
    { name: "Tootsie Roll", link: "/pdfs/tweens/commercials/tootsie-roll.pdf" },
    { name: "Whoppers", link: "/pdfs/tweens/commercials/whoppers.pdf" }  
  ];
  
const CommercialsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-[rgb(219,13,13)]">
        Commercials
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        {commercials.map((commercial, index) => (
          <a
            key={index}
            href={commercial.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white shadow-lg rounded-lg overflow-hidden border-2 border-transparent hover:border-[rgb(219,13,13)] transition-all duration-300"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {commercial.name}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CommercialsPage;
