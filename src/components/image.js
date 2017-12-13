import React from 'react';

export default function Image(props) {
  return (
    <img src={props.photos[0].img_src} alt="Rover"/>
  )
}