import React from 'react';

import HeadshotCard from '../components/headshotcard';

const Instructors = () => {
const people = [
  {
    name: "Chase",
    photo: "/media/chase.jpg",
    bio: "Chase began in the entertainment industry at just four years old. He grew up as both a childhood actor and a model. With over two decades of experience, he has worked with many renowned clients that include: Coca-Cola, Aeropostale, Mattel Toys, In-N-Out, Kia, and Harley Davidson to name a few. He has also worked closely with celebrities such as Taylor Swift- where he helped launch her entire clothing line, featuring fashion designer Stella McCartney. Chase has also worked alongside: Camila Cabello on the set of her 'My Oh My' music video, where he played her love interest, Emma Roberts on a FRED Jewelry campaign, the Rock on 'HBO Ballers', and also Morris Chestnut on 'Rosewood'. His goal is to export the tools, techniques, and experience he's learned throughout his journey in the entertainment industry to new and already experienced talent who are eager in taking their careers to the next level. He looks forward to working with you at World Premiere Artists.",
  },
  {
    name: "Brittney",
    photo: "/media/brittney.jpg",
    bio: "Brittney O'Rourke is a dynamic personality that began chasing dreams in Music, Television and Film at a young age. With supportive parents by her side, Brittney began taking acting and modeling classes at 5 years old and was onstage performing in theaters by the age of 6. With much smaller opportunities in her hometown of Tuscaloosa, AL, they were forced to travel to Atlanta, GA and Orlando, FL for auditions and callbacks. By 7 years old Brittney auditioned for a major film, A Time To Kill, alongside Samuel L. Jackson where she received a final call back and made news headlines that she would be the principle role of Jackson's daughter! They later received a call that the Casting Directors made a last minute decision to move forward with the child actress that played a young Tina Turner in What's Love Got To Do with It. Not allowing the rejection to kill her dreams, Brittney continued striving for her place in the entertainment industry. As the years went by Brittney participated in several beauty pageants where she was crowned Miss Congeniality her first year, First Runner Up the next, and was finally crowned the Queen. After graduating high school, she decided to move to Nashville, TN to pursue her love for music. After signing to a local record label, she began recording pop singles and performing at colleges and music festivals where she gained the attention of a few major labels which later resulted in a contract offered by Atlantic Records at 21 years old. As negotiations took place about her music career, Brittney also continued her modeling and acting career with The Hurd Agency where her agent kept her busy with promotional modeling jobs and commercials with local clothing stores and car dealerships. Once the final negotiations were made with Atlantic Records, Brittney made the tough decision to decline the deal and moved to Philadelphia, PA where she began a fresh career as a radio personality at Beasley Broadcast. Quickly taking the city of Philadelphia by storm, she began finding her way back onstage where she was brought on to be the co-host of The Philly Hip-Hop Awards as well as the co-host of America's Next Soulstar. Brittney conducted several exclusive red carpet events, spoke on panels and served as the judge at Hard Rock Café Philly events as well as events with Philly Magazine and more. She was introduced to a Grammy Award-Winning Songwriter and Producer that would later bring her onboard as one of the executives of Ethical Music Entertainment as the V.P. A&R. As the radio station kept her busy during the daytime, Brittney found herself working alongside the founder of Plaza 7 Talent Agency in the evenings where she taught modeling and acting for the children's department and maintained excellent relationships with the top Casting Directors in the city. After four years in Philadelphia, Brittney's journey led her to New York City where she joined Barbizon Modeling & Acting Academy and soon became the top Director in the company. As she developed a dynamic team in NYC, the company flew her to the Chicago and L.A. offices to mirror the training she created and to bring the same motivational spirit to their branches resulting in increasing numbers and overall higher team morale. With an ongoing passion for helping others reach their goals, Brittney continued teaching and guiding those aspiring to display their talents in the industry and came to Los Angeles where she currently hosts The Brittney O. Show online and teaches at World Class Talent Studios.",
  },
  {
    name: "Monique",
    photo: "/media/monique.jpg",
    bio: "Classically trained in Jazz, classical and contemporary vocals, Monique Mosee' started her entertainment career at an early age in music. She sang at RnB, Pop and Jazz venues throughout the Philadelphia and New York areas all through college and after graduating. She's done just about everything in the entertainment business from charting on the top 100 billboard charts, playing lead roles and singing in many major theatres and being the lead singer in several of the best orchestras in the Philadelphia market. Her success in the theatre led her to bigger and better opportunities in the acting world. She signed with Plaza 7 Talent, which is the top Talent agency in Philadelphia where she quickly became the best booking talent in commercial and print. Onward and upward Monique began booking films and was nominated for Best Supporting Actress in a diaspora film “Transition”. Her success in acting and print modeling prompted her to want to pass on the blessings by coaching others to do the same. She began coaching at Plaza 7 Talent and grew to love it so much that she developed her own curriculum that has seen her students get signed with top agents and become successful as well. After years working the Philly/NY market, Monique and her family grew tired of the cold and moved to California to try the market and the weather there. Monique was quickly signed to one of the top agencies in LA called LA Talent and after only one month she booked her first job with a worldwide movie theatre campaign for ADT. Her 9yr old son, whom she coached, was also signed. He amazed the agents with his talent, and booked an Amazon print campaign as the natural hair kid. She is now signed with the 2 nd largest agency in the world Buchwald Talent and has several national commercials and print jobs currently running. She is also signed theatrically with Aqua Talent and has begun auditioning for huge TV and Film roles. The love of teaching others continued to be her passion so she found us, World Class Modeling and Talent Studios and graces our clients with her knowledge and background. Many of our clients taught by Monique have gone on to get signed with the Top Celebrity agents we work with. She looks forward to working with you.",
  },
];


  return (
    <div>
      <h1>Instructors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-4">
        {people.map((person, index) => (
          <HeadshotCard 
            key={index}
            name={person.name}
            photo={person.photo}
            bio={person.bio}
            />

        ))}
        </div>
    </div>
  )
};
export default Instructors;
