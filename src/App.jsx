import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import {BrowserRouter as router } from 'react-router-dom'
import Hero from './Hero'
function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="app" main-theme="light">
      {/* <AppRoutes/> */}
      <Navbar />
      <Hero />
      <h1>Welcome to the ecommerce</h1>
    </div>
  )
}

export default App
