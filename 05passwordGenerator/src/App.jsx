import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"


    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*{}<>?"

    for (let i = 1; i <= length; i++) {
      let charIdx = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charIdx)
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    PasswordGenerator()
  }, [length, charAllowed, numberAllowed, PasswordGenerator])

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(Password)

  }, [Password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-800 bg-gray-800'>
        <h1 className='text-white text-lg my-3'>Password Generator</h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
        </div>

        <div className='flex text-sm gap-x-5 '>
          <div className='flex items-center gap-x-1 '>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1 '>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }} />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }} />
            <label htmlFor='characterInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
