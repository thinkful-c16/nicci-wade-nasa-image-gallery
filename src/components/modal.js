import React from 'react';
import './modal.css';

export default function Modal(props) {
  return (
    <div className="modal-container" style={{display: props.display}}>

      <span className="close" onClick={props.onClick}>&times;</span>

      <img className="modal-image" src={props.photo} alt="Rover"/>

      <div className="imgCounterModal">{`${props.counter} of ${props.totalImages}`}</div>

    </div>
  );
}