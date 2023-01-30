import React from 'react'
import Palace from "../assets/palace.jpg"
function Header() {
  return (
    <div className='header'>
        <h1> BANGALORE FOOD STREET BLOG</h1>
        <img src={Palace} alt="palace" className='hero-img'   />
    </div>
  )
}

export default Header