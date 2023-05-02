import React from 'react';
import {FaLinkedin, FaGithub } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <div className='footer-container'>
      <p>Assembled by Joaquin Cortez</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/joaquin-cortez-66195522b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
          </a>
        </li>
        <li>
          <a href="https://github.com/JoacoCortez" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
          </a>
        </li>
      </ul>
    </div>
  )
}
