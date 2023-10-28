import React from 'react'
import Images from '../assets/images/Images'

function Header() {
  return (
    <header className='flex flex-col justify-center w-full items-center '>
      <img src={Images.image4} alt="Medal badge with a star"  className='w-64'/>
      <h1 className='text-3xl'>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  )
}

export default Header
