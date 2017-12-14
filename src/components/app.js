import React from 'react';
import Image from './image';
import LeftArrow from './left-arrow';
import RightArrow from './right-arrow';
import Modal from './modal';
import './app.css';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      modalDisplay: "none"
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

  showModal(){
    if(this.state.modalDisplay === "none"){
      this.setState({
        modalDisplay: "block"
      });
    }else{
      this.setState({
        modalDisplay: "none"
      });
    }
  }

  render() {
    console.log(this.props.photos)
    return (
      <div className="main">
        <div className="appTitle">
          <h1>NASA Image Gallery</h1>
          <h4>Click arrows, to scroll. Click image, to enlarge.</h4>
        </div>
        <LeftArrow onClick={e => this.clickPrev(e)} />
        <Image
          photo={this.props.photos[this.state.index].img_src } 
          counter={this.state.index + 1}
          totalImages={this.props.photos.length}
          onClick={e => this.showModal(e)}
        />
        <RightArrow onClick={e => this.clickNext(e)}/>
        <Modal
          display={this.state.modalDisplay}
          photo={this.props.photos[this.state.index].img_src } 
          counter={this.state.index + 1}
          totalImages={this.props.photos.length}
          onClick={e => this.showModal(e)}
        />
      </div>
    );
  }

}