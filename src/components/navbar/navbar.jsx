import React from 'react';
import "./navbar.css";

export default function Navbar() {
  return (
    <div className='navbar-container'>
      
        <ul className='menu'>
            <li>
              <a href="#letter-container">Bio</a>
            </li>
            <li>
              <a href="#proyects-container">Proyectos</a>
            </li>
            <li>
              <a href="#contact-container">Contacto</a>
            </li>
        </ul>
      

    </div>
  )
}
