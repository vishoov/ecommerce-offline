import React from 'react'

const Top = () => {
  return (
    <div
    style={{
        position: 'fixed',
        right:'0',
        bottom:'0',
        backgroundColor: 'black',
        color: 'white',
        padding: '10px',
        borderRadius: '10px',
        cursor: 'pointer',
        zIndex: '1000',
        margin: '20px',
        height: '50px',
        width: '50px',
    }}
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
    >
        ^
    </div>
  )
}

export default Top