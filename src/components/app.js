import React from 'react';
import Image from './image';
import LeftArrow from './left-arrow';
import RightArrow from './right-arrow';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    // this.state = {
    //   index
    // };
  }

  render() {
    console.log(this.props.photos)
    return (
      <div className="main">
        <LeftArrow />
        <Image photos={this.props.photos}/>
        <RightArrow />
      </div>
    );
  }

}