import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="navbar-container">
        <div className="navbar-logo">
            <a href="/">
            <span className='logo-text'>milano</span>
            </a>

        </div>
        <ul className="navbar-menu">
            <li className='navbar-item'>
                <a href="/" className='navbar-link'>
                Home
                </a>
            </li>
            <li className='navbar-item'>
                <a href="/" className='navbar-link'>
                Shop
                </a>
            </li>
            <li className='navbar-item'>
                <a href="/" className='navbar-link'>
                Products
                </a>
            </li>
            <li className='navbar-item'>
                <a href="/" className='navbar-link'>
                Blog
                </a>
            </li>
        </ul>
        <div className="navbar-icons">
            <button className='icon-btn search-btn'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            </button>
            <button className='icon-btn search-btn'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            </button>
            <button className='icon-btn search-btn'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            </button>
            <button className='icon-btn search-btn'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            </button>
        </div>
        </div>

    </nav>


  )
}

export default Navbar