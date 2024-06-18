import React from 'react';
import Image, { StaticImageData } from 'next/image';
import father from '../../../public/Assets/father.png';
import wellness from '../../../public/Assets/wellness.png';

interface Publication {
  id: number;
  title: string;
  description: string;
  links: string;
  img: StaticImageData | string;
}
const Published = () => {
  const publications: Publication[] = [
    {
      id: 1,
      title: 'TO MY FATHER’S LAND WE GO',
      img: father,
      description:
        'Ada travels to Nigeria with her family for the first time to experience her rich Igbo culture. She invites her classmates along on her storytelling journey as she dances with her cousins, dresses in traditional clothing, eats Nigerian food, and celebrates her dad’s crowning ceremony as King!',
      links: 'Purchase book',
    },
    {
      id: 2,
      title: 'COACHE’S WELLNESS CHAMPIONS',
      img: wellness,
      description:
        'The first person to give his manifesto was Captain Eco the Healthy. As he started his speech, he asked his good bacteria soldiers to distribute a cup of fruit salad to everyone in the stadium. He taught the people about the classes of food, the importance of a balanced diet, the benefits of drinking lots of water daily and the dangers of taking lots of fizzy drinks and cereals, especially those colorful ones…',
      links: 'Purchase book',
    },
    // {
    //   id: 3,
    //   title: 'Third Publication',
    //   description: 'Description for the third publication.',
    //   date: '2024-08-20',
    // },
  ];

  return (
    <section className=''>
      <div className='mt-[95px]'>
        {publications.map((publish, index) => (
          <div className='flex justify-between mb-20'>
            <div className=''>
              <h2
                className={`text-[#5E167E] text-4xl font-bold leading-normal ${
                  index === 0 ? 'w-[402px]' : ''
                }`}
              >
                {publish.title}
              </h2>
              <p
                className={` ${index === 0 ? 'w-[520px]' : ''} ${
                  index === 1 ? 'w-[540px]' : ''
                } pt-[38px]`}
              >
                {publish.description}
              </p>
              <p className='underline text-[#5933A7] pt-[45px]'>
                {publish.links}
              </p>
            </div>
            <div>
              <Image
                src={publish.img}
                alt='illustration'
                className='w-[370px] h-[370px]'
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Published;
