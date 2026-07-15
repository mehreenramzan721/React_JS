// import React ,{ useState } from 'react'
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // useState(15);
  let [counter , setCounter] = useState(15);

  // let counter = 5;
  function addValue(){
    // console.log("Value added : ", Math.random())
    // counter++;    we can't update it like this because we are using hooks
    // instead:
    if(counter < 20) 
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);

      // setCounter(()=>{})
        setCounter( prevCounter => prevCounter + 1 )
        setCounter( prevCounter => prevCounter + 1 )
        setCounter( prevCounter => prevCounter + 1 )
        setCounter( prevCounter => prevCounter + 1 )


    // console.log(counter)
  }

  function removeValue(){
    if(counter>0){
      setCounter(counter -1);
    }
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <h3>{counter}</h3>
    <br/>
    <button onClick={removeValue}>Decrease value</button>
    </>
  )
}

export default App
