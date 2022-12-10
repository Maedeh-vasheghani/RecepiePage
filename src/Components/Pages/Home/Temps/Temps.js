import React from 'react'
import "../Home.css";

export default function Temps() {
  return (
    <>
    <div className='temps'> 
    <div className='temps-item'>
      <span className='title-temps'>TEMPS PRÉPARATION</span>
      <p>20 minutes</p>
    </div>
    <div className='temps-item'>
      <span className='title-temps' >TEMPS CUISSON</span>
      <p>35 minutes</p>
    </div>
    <div className='temps-item'>
      <span className='title-temps'>TEMPS RÉFRIGÉRATION</span>
      <p>2h et 30minnutes</p>
    </div>
    </div>
    </>
  )
}
