import React from 'react';
import './image.css'

export default function Image(props) {
  return (
    <div className="imgContaianer">
      <img src={props.photo} alt="Rover"/>
      <div className="imgCounter">2 of 20</div>
    </div>
  );
}