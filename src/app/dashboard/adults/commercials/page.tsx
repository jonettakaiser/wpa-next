import React from 'react';

const commercials = [
  { name: "Apple Jacks", link: "/pdfs/adults/commercials/apple-jacks.pdf" },
  { name: "Aussie Men", link: "/pdfs/adults/commercials/aussie-men.pdf" },
  { name: "Aveeno 2n1", link: "/pdfs/adults/commercials/aveeno-2n1.pdf" },
  { name: "Aveeno Aftershave", link: "/pdfs/adults/commercials/aveeno-aftershave.pdf" },
  { name: "Axe", link: "/pdfs/adults/commercials/axe.pdf" },
  { name: "Burt's Bees", link: "/pdfs/adults/commercials/burtsbees.pdf" },
  { name: "Burt's Men", link: "/pdfs/adults/commercials/burtsmen.pdf" },
  { name: "Claussen", link: "/pdfs/adults/commercials/claussen.pdf" },
  { name: "Clinique", link: "/pdfs/adults/commercials/clinique.pdf" },
  { name: "Comedy Central", link: "/pdfs/adults/commercials/comedy-central.pdf" },
  { name: "Geico", link: "/pdfs/adults/commercials/geico.pdf" },
  { name: "Kaiser", link: "/pdfs/adults/commercials/kaiser.pdf" },
  { name: "Kettle Jalapeno", link: "/pdfs/adults/commercials/kettle-jalapeno.pdf" },
  { name: "Kettle Maple", link: "/pdfs/adults/commercials/kettle-maple.pdf" },
  { name: "Kettle Spicy", link: "/pdfs/adults/commercials/kettle-spicy.pdf" },
  { name: "Lancome", link: "/pdfs/adults/commercials/lancome.pdf" },
  { name: "Nasacort", link: "/pdfs/adults/commercials/nasacort.pdf" },
  { name: "Origins", link: "/pdfs/adults/commercials/origins.pdf" },
  { name: "Pepsi", link: "/pdfs/adults/commercials/pepsi.pdf" },
  { name: "Planters", link: "/pdfs/adults/commercials/planters.pdf" },
  { name: "Prilosec", link: "/pdfs/adults/commercials/prilosec.pdf" },
  { name: "Progressive", link: "/pdfs/adults/commercials/progressive.pdf" },
  { name: "Rescue", link: "/pdfs/adults/commercials/rescue.pdf" },
  { name: "Skinny Cow", link: "/pdfs/adults/commercials/skinny-cow.pdf" },
  { name: "Special K Fudge", link: "/pdfs/adults/commercials/specialk-fudge.pdf" },
  { name: "Special K Moments", link: "/pdfs/adults/commercials/specialk-moments.pdf" },
  { name: "Sprint", link: "/pdfs/adults/commercials/sprint.pdf" },
  { name: "Starbucks", link: "/pdfs/adults/commercials/starbucks.pdf" },
  { name: "Trop", link: "/pdfs/adults/commercials/trop.pdf" },
  { name: "Visible", link: "/pdfs/adults/commercials/visible.pdf" },
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
