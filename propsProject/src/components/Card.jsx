import React from 'react'

function Card(props) {
  return ( 
    <div className='px-12 card'>
       <li className='flex flex-col justify-center items-center text-center '>
        <img src={props.image} alt={props.title} className='w-52' />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </li>
    </div>
  )
}

export default Card
