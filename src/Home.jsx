import React from 'react'
import Hero from './Hero'
import Carousel from './Carousel'
import Top from './Top'
const Home = () => {
  return (
    <div>
          <Hero />
      <h1>Welcome to the ecommerce</h1>

      <Carousel />
      <Top />
    </div>
  )
}

export default Home