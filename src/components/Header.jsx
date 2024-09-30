import React from 'react'
import './header.css'

function Header() {
  return (
 
<header className="header">
  <div className="logo">
     <h1>Arjun</h1>
  </div>
  <nav class="navbar">
    <ul>
      <li><a href="#about">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
    </ul>
  </nav>
</header>

  )
}

export default Header