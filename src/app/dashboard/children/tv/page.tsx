import React from 'react';

const tv = [
  { name: "Female Ashley", link: "/pdfs/children/tv/female-ashley.pdf" },
  { name: "Female Kaitlin", link: "/pdfs/children/tv/female-kaitlin.pdf" },
  { name: "Male Bobby", link: "/pdfs/children/tv/male-bobby.pdf" },
  { name: "Male Jacob", link: "/pdfs/children/tv/male-jacob.pdf" },
];

const TVPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-[rgb(219,13,13)]">
        TV
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        {tv.map((pdf, index) => (
          <a
            key={index}
            href={pdf.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white shadow-lg rounded-lg overflow-hidden border-2 border-transparent hover:border-[rgb(219,13,13)] transition-all duration-300"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {pdf.name}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TVPage;
