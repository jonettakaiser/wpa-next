import React from 'react';
import fs from 'fs';
import path from 'path';

const PDFListPage = async ({ params }: { params: { category: string; genre: string } }) => {
  const { category, genre } = params;

  // Get the path to the PDFs folder for the selected category and genre
  const pdfFolder = path.join(process.cwd(), 'public', 'pdfs', category, genre);

  // Read the files from the directory
  let pdfFiles: string[] = [];
  try {
    pdfFiles = fs.readdirSync(pdfFolder); // List all files in the folder
  } catch (error) {
    console.error(`Error reading files from ${pdfFolder}:`, error);
  }

  // Generate links for each PDF
  const pdfs = pdfFiles.map((file) => ({
    name: file, // Use the file name as the name
    link: `/pdfs/${category}/${genre}/${file}`, // Generate the public URL for the file
  }));

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-[rgb(219,13,13)]">
        {genre.charAt(0).toUpperCase() + genre.slice(1)} PDFs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        {pdfs.map((pdf, index) => (
          <a
            key={index}
            href={pdf.link} // Link to the PDF file
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

export default PDFListPage;

