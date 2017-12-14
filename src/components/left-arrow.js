import React from 'react';
import './arrows.css';

export default function LeftArrow(props) {
  return (
    <span onClick={props.onClick} >
      ❮
    </span>
  );
}