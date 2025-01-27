'use client';
import React, { useState } from 'react';

const faqs = [
  {
    question: "Is World Premiere Artists an Agency?",
    answer: "No, World Premiere Artists is a training and development company that works with aspiring models and actors to connect them with industry professionals.",
  },
  {
    question: "Does training make a difference?",
    answer: "Yes, training helps prepare individuals to understand industry standards, build confidence, and develop the skills needed to succeed.",
  },
  {
    question: "Will this interfere with school?",
    answer: "No, the training is designed to be flexible and accommodate your school schedule.",
  },
  {
    question: "Why do agents and industry professionals come to World Premiere Artists?",
    answer: "Agents and industry professionals work with World Premiere Artists because of the high-quality training and talent the company develops.",
  },
  {
    question: "Does it cost anything to train with World Premiere Artists? I have heard that if you want to be a model, agencies will pay everything for you to start. Is this true?",
    answer: "Yes, there is a cost for training with World Premiere Artists. While some agencies may cover startup costs for select models, professional training is often an investment in building your career.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      
      <div className="max-w-5xl mx-auto mb-6">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-800 hover:text-red-600 focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="pl-4 pr-2 py-2 text-gray-600">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>

      <p>
        If you are selected, there are fees associated for our services. The fees will depend on what areas of the industry you have potential for success. We have many different workshops and there are different fees for different workshops.
      </p>
      <p>
        In any career, training and preparation is an up-front investment of time and money. The most successful models and talent will tell you that the learning process never ends. In today&apos;s fast paced environment, very few agencies in the world will front costs necessary to begin a models career. There are “discoveries,” but like lottery winners, they are rare. All professionals have to work for their success. At World Class Modeling Talent Studios, we give you the training, guidance and confidence to help you attain your goals in the entertainment industry and in LIFE.
      </p>
      <p>
        If you still have questions for us please do not hesitate to contact us at 424-653-0299.
      </p>
    </div>
  )
};

export default FAQ;
