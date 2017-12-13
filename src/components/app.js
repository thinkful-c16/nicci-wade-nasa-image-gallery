import React from 'react';
import Image from './image';

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
      <Image photos={this.props.photos}/>
    );
  }

}