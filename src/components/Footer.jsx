import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="footTop">
        For footer
        </div>
        <Link to="/contact" className='foot'>Contact</Link>
    </footer>
  )
}

export default Footer