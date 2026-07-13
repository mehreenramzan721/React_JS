import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1>Custom react app</h1>
//     </div>
//   )

// }

// const reactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     children : 'Click me to visit google'
// }

const anotherUser = "chai aur react"

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
    anotherElement
)

createRoot(document.getElementById('root')).render(
    anotherElement
)

createRoot(document.getElementById('root')).render(
    // <MyApp />
    // reactElement
    anotherElement
    // anotherUser
)
