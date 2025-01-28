import React from 'react';

const commercials = [
    { name: "Acne Free", link: "/pdfs/teens/commercials/acne-free.pdf" },
    { name: "Apple Jacks", link: "/pdfs/teens/commercials/apple-jacks.pdf" },
    { name: "Aussie", link: "/pdfs/teens/commercials/aussie.pdf" },
    { name: "Aussie Men", link: "/pdfs/commercials/aussie-men.pdf" },
    { name: "Axe", link: "/pdfs/teens/commercials/axe.pdf" },
    { name: "Ben & Jerrys", link: "/pdfs/teens/commercials/ben-and-jerrys.pdf" },
    { name: "Biore", link: "/pdfs/teens/commercials/biore.pdf" },
    { name: "Bonnie", link: "/pdfs/teens/commercials/bonnie.pdf" },
    { name: "Burger King", link: "/pdfs/teens/commercials/burgerking.pdf" },
    { name: "Burts Bees Men", link: "/pdfs/teens/commercials/burtsbees-men.pdf" },
    { name: "Butter Finger", link: "/pdfs/teens/commercials/butterfinger.pdf" },
    { name: "Cap n Crunch", link: "/pdfs/teens/commercials/cap-n-crunch.pdf" },
    { name: "Care Bear", link: "/pdfs/teens/commercials/care-bear.pdf" },
    { name: "Clearasil", link: "/pdfs/teens/commercials/clearasil.pdf" },
    { name: "Comedy Central", link: "/pdfs/teens/commercials/comedy-central.pdf" },
    { name: "Converse", link: "/pdfs/teens/commercials/converse.pdf" },
    { name: "Cosmo Girl", link: "/pdfs/teens/commercials/cosmo-girl.pdf" },
    { name: "Crest 3D", link: "/pdfs/teens/commercials/crest-3d.pdf" },
    { name: "Disneyland", link: "/pdfs/teens/commercials/disneyland.pdf" },
    { name: "Garnier", link: "/pdfs/teens/commercials/garnier.pdf" },
    { name: "Glam Vanilla", link: "/pdfs/teens/commercials/glam-vanilla.pdf" },
      { name: "Hello", link: "/pdfs/teens/commercials/hello.pdf" },
      { name: "Honey Maid", link: "/pdfs/teens/commercials/honey-maid.pdf" },
      { name: "Ice Breaker", link: "/pdfs/teens/commercials/ice-breaker.pdf" },
      { name: "Johnsons", link: "/pdfs/teens/commercials/johnsons.pdf" },
      { name: "Kettle", link: "/pdfs/teens/commercials/kettle.pdf" },
      { name: "Laughing Cow", link: "/pdfs/teens/commercials/laughing-cow.pdf" },
      { name: "Life Savers", link: "/pdfs/teens/commercials/life-savers.pdf" },
      { name: "Lip Balm", link: "/pdfs/teens/commercials/lip-balm.pdf" },
      { name: "McDonald's", link: "/pdfs/teens/commercials/mcdonalds.pdf" },
      { name: "M&M's", link: "/pdfs/teens/commercials/mms.pdf" },
      { name: "Neutrogena", link: "/pdfs/teens/commercials/neutrogena.pdf" },
      { name: "Reese's", link: "/pdfs/teens/commercials/reeses.pdf" },
      { name: "Revlon Expression", link: "/pdfs/teens/commercials/revlon-expression.pdf" },
      { name: "Revlon Lip", link: "/pdfs/teens/commercials/revlon-lip.pdf" },
      { name: "Revlon Moon", link: "/pdfs/teens/commercials/revlon-moon.pdf" },
      { name: "Snickers", link: "/pdfs/teens/commercials/snickers.pdf" },
      { name: "Sprint", link: "/pdfs/teens/commercials/sprint.pdf" },
      { name: "Starburst", link: "/pdfs/teens/commercials/starburst.pdf" },
      { name: "SunnyD", link: "/pdfs/teens/commercials/sunnyd.pdf" },
      { name: "Tootsie Roll", link: "/pdfs/teens/commercials/tootsieroll.pdf" },
      { name: "Whoppers", link: "/pdfs/teens/commercials/whoppers.pdf" },
      { name: "Wonka Nerds", link: "/pdfs/teens/commercials/wonka-nerds.pdf" },
      { name: "Wonka Rope", link: "/pdfs/teens/commercials/wonka-rope.pdf" },
      { name: "Yofi", link: "/pdfs/teens/commercials/yofi.pdf" }
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
