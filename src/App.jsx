
import './App.css'
import Navbar from './Navbar'
// import {BrowserRouter as router } from 'react-router-dom'
import Hero from './Hero'
import Carousel from './Carousel'
import Top from './Top'
import Home from './Home'
import Shop from './Shop'
import About from './About'
import { Routes, Route } from 'react-router-dom'
function App() {


  return (



    <div className="app" main-theme="light">

    <Navbar />
    <Routes>
      <Route path = "/shop" element={<Shop />} />
      <Route path = "/" element={<Home />} />
      <Route path = "/about" element={<About />} />
    </Routes>




    </div>
  )
}

export default App
