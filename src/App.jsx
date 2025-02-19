import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import  Navbar  from './components/navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/NewsLetter'
import Cards from './components/Cards'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>

    </>
  )
}

export default App
