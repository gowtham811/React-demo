import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Proflie'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>This a Context Api demo</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
