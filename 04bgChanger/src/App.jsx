import { useState } from 'react'
import './App.css'


function App() {

  const [color, setColor] = useState("black")



  return (

    <div className=' w-full h-screen' style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize' style={{ backgroundColor: "red" }} onClick={() => {
            setColor('red')
          }}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize' style={{ backgroundColor: "green" }} onClick={() => {
            setColor('green')
          }}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize' style={{ backgroundColor: "blue" }} onClick={() => {
            setColor('blue')
          }}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize' style={{ backgroundColor: "purple" }} onClick={() => {
            setColor('purple')
          }}>Purple</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg capitalize' style={{ backgroundColor: "pink" }} onClick={() => {
            setColor('pink')
          }}>Pink</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg capitalize' style={{ backgroundColor: "yellow" }} onClick={() => {
            setColor('yellow')
          }}>yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize' style={{ backgroundColor: "olive" }} onClick={() => {
            setColor('olive')
          }}>olive</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize' style={{ backgroundColor: "gray" }} onClick={() => {
            setColor('gray')
          }}>gray</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg capitalize' style={{ backgroundColor: "lavender" }} onClick={() => {
            setColor('lavender')
          }}>lavender</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg capitalize' style={{ backgroundColor: "white" }} onClick={() => {
            setColor('white')
          }}>white</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize' style={{ backgroundColor: "black" }} onClick={() => {
            setColor('black')
          }}>black</button>

        </div>
      </div>
    </div>
  )
}

export default App
