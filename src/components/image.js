import React from 'react';
import './image.css'

export default function Image(props) {
  return (
    <div className="imgContaianer">
      <img src={props.photo} alt="Rover"/>
      <div className="imgCounter">{`${props.counter} of ${props.totalImages}`}</div>
    </div>
  );
}