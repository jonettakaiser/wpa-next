import React from 'react';

import AlumniCard from '../components/alumnicard';

const Alumni = () => {
const people = [
  {
    name: "Aaron Paul",
    photo: "/media/alum/AaronPaul.jpg",
  },
  {
    name: "Ashton Kutcher",
    photo: "/media/alum/AshtonKutcher.jpg",
  },
  {
    name: "Brenda Song",
    photo: "/media/alum/BrendaSong.jpg",
  },
  {
    name: "Elias Harger",
    photo: "/media/alum/EliasHarger.jpg",
  },
  {
    name: "Elijah Wood",
    photo: "/media/alum/ElijahWood.jpg",
  },
  {
    name: "Eva Longoria",
    photo: "/media/alum/EvaLongoria.jpg",
  },
  {
    name: "Jessica Biel",
    photo: "/media/alum/JessicaBiel.jpg",
  },
  {
    name: "Josh Duhamal",
    photo: "/media/alum/JoshDuhamal.jpg",
  },
  {
    name: "Logan Browning",
    photo: "/media/alum/LoganBrowning.jpg",
  },
  {
    name: "Raini Rodriguez",
    photo: "/media/alum/RainiRodriguez.jpg",
  },
  {
    name: "Madison Iseman",
    photo: "/media/alum/MadisonIseman.jpg",
  },
  {
    name: "Sean Faris",
    photo: "/media/alum/SeanFaris.jpg",
  },
  {
    name: "Sean William Scott",
    photo: "/media/alum/SeanWilliamScott.jpg",
  },
  {
    name: "Spencer Tomich",
    photo: "/media/alum/SpencerTomich.jpg",
  }  
];

  return (
    <div>
      <h1>IMTA History</h1>
      <img src="/imta.png" className='float-left mr-4 mb-1 w-48' />
      <p>
        IMTA&apos;s first convention was produced in 1987 in New York City. IMTA quickly became known in the modeling and talent industries as the premiere professional event to scout for the best new faces for the entertainment world. The early days of IMTA saw the discovery of rising stars such as actor Elijah Wood and model Joel West. Throughout the 1990s and into the 21st century, IMTA&apos;s success and influence grew steadily, launching the careers of many of today&apos;s hottest models and actors such as Katie Holmes, Ashton Kutcher, Jessica Biel, Seann William Scott, Brandon Routh, Eva Longoria and Alyson Stoner. Models such as Jessica White, Bradley Tomberlin, Sara Dawson, Kim Lemanton, Sean Harju and Tyson Ballou also began their careers on the IMTA runway.
      </p>
      <p>
        IMTA remains the largest and most successful event of its kind in the world with a proven track record of success. With over three decades of experience, each IMTA event produced is truly a one-of-a-kind “Experience of a Lifetime!” Click our IMTA success button below to see why!
      </p>
      
      <h1>How it Works</h1>
      <p>
        The International Modeling and Talent Association (IMTA) is a professional association of the finest and most successful modeling and talent training centers in the world. Since 1987, IMTA has become the recognized leader in putting new faces in front of the people whose business it is to identify the next rising star or supermodel. An impressive, and constantly growing, list of people who were first seen at IMTA conventions are now seen in magazines, TV, movies and fashion shows.
      </p>
      <p>
        IMTA produces multiple week-long conventions, including one in New York and Los Angeles, consisting of modeling, acting, singing, songwriting and dancing competitions. Hundreds of fashion and talent agents, personal managers, casting directors, network representatives and music producers judge IMTA competitions while searching for new models, actors, singers and dancers to work in the fashion and entertainment industries.
      </p>

      <h1>IMTA Alumni</h1>
      <div className="min-h-screen flex flex-wrap justify-center items-center gap-8 p-8">
        {people.map((person, index) => (
          <AlumniCard 
            key={index}
            name={person.name}
            photo={person.photo}
            />

        ))}
 </div>
    </div>
  )
};
export default Alumni;