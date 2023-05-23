import React from 'react';
import "./profile.css";
import profilePicture from "../../media/profile 2.jpg";

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className="profile-text-container">
        <h3 className='title'>Joaquín Cortez</h3>
        <p className='subtext'>Full-Stack Developer</p>
      </div>  
      <div className="picture-container">
        <img src={profilePicture} className="profile-picture" alt="profile_picture"/>
      </div>
    </div>
  )
}
