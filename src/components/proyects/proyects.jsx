import React from 'react';
import "./proyects.css";
import {FaExternalLinkAlt} from "react-icons/fa";
import dulceSorpresa from "../../media/dulces-sorpresas.vercel.app_.png";
import NutriApp from "../../media/Nutri App.png"


export default function Proyects() {
  return (
    <div id='proyects-container'>
      <div className='proyects'>
        <div className='proyect-link'>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img className='proyect-img' src={dulceSorpresa} alt="Dulces Sorpresas screenshot" />
            <FaExternalLinkAlt/>
          </a>
        </div>
        <div className="proyect-text-div">
          <p className='proyect-text'>Dulces Sorpresas (HTML & SASS).</p>
        </div>
      </div>
      <div className='proyects'>
        <div className='proyect-link'>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="#" alt="Birra en Casa screenshot"/>
            <FaExternalLinkAlt/>
          </a>
        </div>
          <div className="proyect-text-div">
            <p className='proyect-text'>Birra en Casa</p>
            <p className='proyect-text'>(ReactJs & CSS + Firebase).</p>
          </div>
      </div>
      <div className='proyects'>
        <div className='proyect-link'>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img className='proyect-img' src={NutriApp} alt="Nutri App screenshot"/>
            <FaExternalLinkAlt/>
          </a>
        </div>
        <div className="proyect-text-div">
          <p className='proyect-text'>Nutri App</p>
          <p className='proyect-text'>(ReactJs & CSS + Firebase).</p>
        </div>
      </div>
    </div>
  )
}
