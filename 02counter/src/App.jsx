import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(0)//counter value is 0

  const addvalue = () => {
    (counter < 20) ? setcounter(counter + 1) : setcounter(counter)

  }

  const removeVlaue = () => {
    (counter > 0) ? setcounter(counter - 1) : setcounter(counter)
  }

  return (
    <>
      <h1>Chi or react</h1>
      <h2>Counter value : {counter}</h2>

      <button
        onClick={addvalue}>Add value {counter}</button>
      <br />
      <button onClick={removeVlaue}>Remove {counter} </button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
