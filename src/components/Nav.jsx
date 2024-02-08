import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
function Nav() {
  return (
    <>
      <nav>
        <div className="logo">LogoWebsite ::</div>
<div className="cenBar">
        <Link to="/" className='nav'>Home</Link>
        <Link to="/about" className='nav'>About</Link>
        <Link to="/blog" className='nav'>Details</Link>
        <Link to="/contact" className='nav'>Contact</Link>
</div>
        <div className="rightBar"></div>
      </nav>
      
    </>
  )
}

export default Nav