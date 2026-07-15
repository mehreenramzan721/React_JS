import { useState, useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator= useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJHKLMNOPQRTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed){
      str += "1234567890";
    }
    if(charAllowed){
      str += "! @ # $ % ^ & * ( ) _ - + = { }  | ; :   , . < >  ? ~ ";
    }

    for(let i=1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);
  } , [length, numAllowed, charAllowed, setPassword])
  return (
    <>
    <h1 className ='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
