import profilePic from './assets/reactone.jpg'
import React from 'react';


function Card() {
  return (
    <div className="card">      
      <img className="cardimage2 "  src={ profilePic} alt="profile picture" />
      <h2 className="card-title"> Arcade Holdings</h2>
      <p className="card-writing">We sell Property At affordable prices</p>
    </div>
       
  );
}

export default Card;
