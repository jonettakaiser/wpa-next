import React from 'react';

 // Array of monologue PDFs
 const monologues = [
  { name: 'Boredom', link: '/pdfs/adults/monologues/boredom.pdf' },
  { name: 'Dead', link: '/pdfs/adults/monologues/dead.pdf' },
  { name: 'Disappointment', link: '/pdfs/adults/monologues/disappointment.pdf' },
  { name: 'Family Affair', link: '/pdfs/adults/monologues/family-affair.pdf' },
  { name: 'Neverland', link: '/pdfs/adults/monologues/neverland.pdf' },
  { name: 'Sins', link: '/pdfs/adults/monologues/sins.pdf' },
  { name: 'Something', link: '/pdfs/adults/monologues/something.pdf' },
  { name: 'Transformation', link: '/pdfs/adults/monologues/transformation.pdf' },
  { name: 'Unfaithful', link: '/pdfs/adults/monologues/unfaithful.pdf' },
  { name: 'Up All Night', link: '/pdfs/adults/monologues/up.pdf' },
  { name: 'Walking', file: '/pdfs/adults/monologues/walking.pdf' },
  { name: 'Waxed', file: '/pdfs/adults/monologues/waxed.pdf' },
  { name: 'Wrong', file: '/pdfs/adults/monologues/wrong.pdf' },
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
