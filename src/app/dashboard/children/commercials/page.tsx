import React from 'react';

const commercials = [
  { name: 'Aussie', link: '/pdfs/children/commercials/aussie.pdf' },
  { name: 'Build-A-Bear', link: '/pdfs/children/commercials/build-a-bear.pdf' },
  { name: 'Burt’s Bees', link: '/pdfs/children/commercials/burtsbees.pdf' },
  { name: 'Cheerios', link: '/pdfs/children/commercials/cheerios.pdf' },
  { name: 'Cozy Shampoo', link: '/pdfs/children/commercials/cozy-shampoo.pdf' },
  { name: 'Cozy Wax Stick', link: '/pdfs/children/commercials/cozy-waxstick.pdf' },
  { name: 'Crest', link: '/pdfs/children/commercials/crest.pdf' },
  { name: 'Jellybeans', link: '/pdfs/children/commercials/jellybeans.pdf' },
  { name: 'McDonalds', link: '/pdfs/children/commercials/mcdonalds.pdf' },
  { name: 'Pepperidge', link: '/pdfs/children/commercials/pepperidge.pdf' },
  { name: 'Pop-Tarts', link: '/pdfs/children/commercials/poptarts.pdf' },
  { name: 'Science Kid', link: '/pdfs/children/commercials/sciencekid.pdf' },
  { name: 'Scooby-Doo', link: '/pdfs/children/commercials/scoobydoo.pdf' },
  { name: 'Skechers', link: '/pdfs/children/commercials/skechers.pdf' },
  { name: 'Skippy', link: '/pdfs/children/commercials/skippy.pdf' },
  { name: 'Spiderman', link: '/pdfs/children/commercials/spiderman.pdf' },
  { name: 'Strawberries', link: '/pdfs/children/commercials/strawberries.pdf' },
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
