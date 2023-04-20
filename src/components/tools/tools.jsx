import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import {FaGithub, FaReact, FaNodeJs,  } from "react-icons/fa";
import {SiMongodb, SiMysql, SiJavascript} from "react-icons/si"
import "./tools.css";







function Tools() {
    return (
      <div className="tools-container">
        <div className="slide-track">
          <div className="slide">
            <SiMysql/>
            <SiMongodb/>
            <FaReact/>
            <FaNodeJs/>
            <SiJavascript/>
            <FaGithub/> 
          </div>
        </div>  
      </div>  
    );
}

export default Tools;












{/* <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
          </Carousel.Item>
          
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel> */}