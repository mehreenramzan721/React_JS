import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let counter = 5;
  function addValue(){
    // console.log("Value added : ", Math.random())
    counter++;
    console.log(counter)
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <h3>{counter}</h3>
    <br/>
    <button>Decrease value</button>
    </>
  )
}

export default App
