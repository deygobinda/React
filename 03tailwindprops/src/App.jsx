import { useState } from 'react'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let arr = [2,43,3,3,3];

  return (
    <>
    <h1 className='bg-purple-500 p-5 rounded-xl hover:bg-purple-300 text-black hover:scale-105 mb-5'>Tailwind Test</h1>
    <Card username = "ChaiorCode" btnText = "click me" />
    <br />
    <Card username = "Gobinda Dey "/>
    </>
  )
}

export default App
