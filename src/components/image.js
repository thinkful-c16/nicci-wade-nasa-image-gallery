import React from 'react';
import './image.css'

export default function Image(props) {
  return (
    <div className="imgContainer">
      <img onClick={props.onClick} src={props.photo} alt="Rover"/>
      <div className="imgCounter">{`${props.counter} of ${props.totalImages}`}</div>
    </div>
  );
}