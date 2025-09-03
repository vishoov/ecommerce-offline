import React from 'react'
import { useState } from 'react'

const About = () => {
    const [count, setCount ]= useState(0)

    const ABC=()=>{
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
    }
  return (
    <div>
        <h1>This is the About page</h1>
        <h2>{count}</h2>
        <button onClick={()=>ABC()} > Click Me</button>
    </div>
  )
}




export default About