import { useState } from 'react'

import './App.css'

function App() {
  // let counter = 15

  const [counter, setCounter] =useState(0)

  const addValue=() =>{
  //  setCounter(counter + 1)
  setCounter((prevCounter) => prevCounter +1)
  // setCounter((prevCounter) => prevCounter +1)
  // setCounter((prevCounter) => prevCounter +1)
  // setCounter((prevCounter) => prevCounter +1)
    console.log(counter);
  }

  const remValue=() =>{
    setCounter(counter - 1) 
    console.log(counter);
  }


  return (
    <>
     <h1>Increase Decrease number {counter} </h1>
     <h2>Counter value :{counter} </h2>
     <button
     onClick={addValue}>Add number</button> {" "}
     <button onClick={remValue}>Remove number</button>
     <p>footer: {counter} </p>

    </>
  )
}

export default App
