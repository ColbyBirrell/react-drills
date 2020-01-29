import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: <img src='https://i.kym-cdn.com/photos/images/original/000/027/661/HOERS.jpg' alt='elephant' />

    }
  }









  render() {
    return (
      <div>
        <Image imagePic={this.state.image} />

      </div >
    );
  }
}



export default App;
