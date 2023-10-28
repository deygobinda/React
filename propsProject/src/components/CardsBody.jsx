import React from 'react'
import Images from '../assets/images/Images';
import Card from './card';



const concepts = [
  {
    title: 'Components',
    image: Images.image1,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: Images.image2,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: Images.image3,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];

function CardsBody() {
  return (
    <div className='mt-20 mx-20'>
     <ul className='flex gap-16'>
        <Card
          image={concepts[0].image}
          title={concepts[0].title}
          description={concepts[0].description}
        />
        <Card
          image={concepts[1].image}
          title={concepts[1].title}
          description={concepts[1].description}
        />
        <Card
          image={concepts[2].image}
          title={concepts[2].title}
          description={concepts[2].description}
        />
      </ul>
    </div>
  )
}

export default CardsBody
