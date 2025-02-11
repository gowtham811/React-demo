import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(3)
  //let counter=3
  const addValue=()=>{
    
        setCount((prevCounter)=> (prevCounter)+1)
        setCount((prevCounter)=> (prevCounter)+1)
        setCount((prevCounter)=> (prevCounter)+1)
        setCount((prevCounter)=> (prevCounter)+1)
        
        
    //counter=counter+1
    
     
  }
  const subValue=()=>{

    setCount((prevCounter)=> (prevCounter)-1)
    setCount((prevCounter)=> (prevCounter)-1)
    setCount((prevCounter)=> (prevCounter)-1)
    setCount((prevCounter)=> (prevCounter)-1)
    
  }
  return (
    <>
        <h1>React Application</h1>
        <h2>Counter Value:{counter}</h2>
        <button onClick={addValue}>Increment</button> 
        <br></br> 
        <button onClick={subValue}>Decrement</button>  
      
    </>
  )
}

export default App
