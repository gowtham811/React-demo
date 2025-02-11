import { createElement } from 'react';
//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import { Act } from './Act.jsx'

const a="Shubham"
function ToApp() {
  return (
    <h1>Hello World!:{a}</h1>
  )
}
/*const reactElement={
  type:'a',
  props:{
      href:'https://www.google.com',
      target:"_blank"
      
  },
  children:'Click me'
}

const reactElement2=(
        <a href="https://www.google.com" target="_blank">
          google here!
        </a>
)
*/
const reactElement=createElement(
  'a',
  {href:'https://www.google.com',target:'_blank'},
  'Click here to visit google',
  a
)
createRoot(document.getElementById('root')).render(

  reactElement
)
