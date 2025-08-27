
import './App.css'
import Navbar from './Navbar'
// import {BrowserRouter as router } from 'react-router-dom'
import Hero from './Hero'
import Carousel from './Carousel'
import Top from './Top'
function App() {


  return (

    <div className="app" main-theme="light">
      {/* <AppRoutes/> */}
      <Navbar />
      <Hero />
      <h1>Welcome to the ecommerce</h1>

      <Carousel />
      <Top />
    </div>
  )
}

export default App
