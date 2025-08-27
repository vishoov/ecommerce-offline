import React from 'react'

const Carousel = () => {

    const images = [
       {
        id:1,
        src:'https://picsum.photos/200'
       },
       {
        id:2,
        src:'https://picsum.photos/200'
       },
       {
        id:3,
        src:'https://picsum.photos/200'
       },
       {
        id:4,
        src:'https://picsum.photos/200'
       },
       {
        id:5,
        src:'https://picsum.photos/200'
       }
    ]


    
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '20px', height: '100vh', border: '2px solid black', borderRadius: '10px'}}>
        <h1>@YourInstagram</h1>
        <div className="images" style={{width:'100%', height: '70%', backgroundColor:'red'}}>
          <marquee 
            behavior="scroll"
            direction="left"
            scrollamount="10"
            loop="infinite"
            
            style={{display: 'flex', backgroundColor:'blue', alignItems: 'center', height: 'fit-content', overflow: 'hidden'}}
            onMouseOver={e => e.target.stop()}
            onMouseOut={e => e.target.start()}
          >
          
            {images.map((img)=>{
                return <img key={img.id} src={img.src} alt={`carousel-${img.id}`} style={{width: '250px', height: '250px', margin: '10px', borderRadius: '10px'}} />
            })}
            </marquee>
        </div>
    </div>
  )
}

export default Carousel