import React from 'react';
import Image from './image';
import LeftArrow from './left-arrow';
import RightArrow from './right-arrow';
import './app.css';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  // clickNext(){
  //   console.log(this.props.photos.length)
  //   console.log(this.state.index + 1)
  //   if(this.state.index === this.props.photos.length - 1){
  //     this.setState({
  //       index: 0
  //     });
  //   }
  //   this.setState({
  //     index: this.state.index + 1
  //   });
  // }
  
  //works
  clickNext(){
    if((this.state.index) === this.props.photos.length - 1){
      console.log('hi');
      this.setState({
        index: 0
      });
    }else{
      this.setState({
        index: this.state.index + 1
      });
    }
  }

  clickPrev(){
    if(this.state.index === 0){
      this.setState({
        index: this.props.photos.length - 1
      });
    }else{
      this.setState({
        index: this.state.index - 1
      });
    }
  }

  render() {
    console.log(this.props.photos)
    return (
      <div className="main">
        <LeftArrow onClick={e => this.clickPrev(e)} />
        <Image photo={this.props.photos[this.state.index].img_src} />
        <RightArrow onClick={e => this.clickNext(e)}/>
      </div>
    );
  }

}