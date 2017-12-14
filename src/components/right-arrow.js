import React from 'react';
import './arrows.css';

export default function RightArrow(props) {
  return (
    <span onClick={props.onClick} >
      ❯
    </span>
  );
}