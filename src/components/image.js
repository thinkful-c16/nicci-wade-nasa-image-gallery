import React from 'react';
import './image.css'

export default function Image(props) {
  return (
    <img src={props.photos[0].img_src} alt="Rover"/>
  )
}