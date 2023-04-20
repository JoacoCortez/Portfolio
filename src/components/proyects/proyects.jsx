import React from 'react';
import "./proyects.css";
import dulceSorpresa from "../../media/dulces-sorpresas.vercel.app_.png";

export default function Proyects() {
  return (
    <div id='proyects-container'>
      <div className='proyects'>
        <div className='proyect-1-link'>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img className='proyect-img' src={dulceSorpresa} alt="Dulces Sorpresas screenshot" />
          </a>
        </div>
        <div className="proyect-text-div">
          <p className='proyect-text'>Lorem ipsum dolor sit amet.</p>
          <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vitae provident illo saepe reprehenderit eaque? Qui tenetur officiis neque provident ad hic praesentium, illum laborum necessitatibus, quam dicta, voluptas natus.</p>
        </div>
      </div>
      <div className='proyects'>
        <div className='proyect-2-link'>
          <a href="http://" target="_blank" rel="noopener noreferrer">

          </a>
        </div>
          <div className="proyect-text-div">
            <p className='proyect-text'>Lorem ipsum dolor sit amet.</p>
            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis repudiandae aut? Autem, eveniet temporibus aliquid, maiores iste eaque dolor maxime doloribus dicta sit corrupti. Ad molestiae nihil aliquam labore.</p>
          </div>
      </div>

    </div>
  )
}
