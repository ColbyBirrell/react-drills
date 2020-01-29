import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      array: ['spaghetti', 'ice Cream', 'sushi', 'bologna', 'swiss']
    }
  }





  render() {
    return (
      <div className="App" >
        <h3 className='h3'>{this.state.array[0]}</h3>
        <h3 className='h3'>{this.state.array[1]}</h3>
        <h3 className='h3'>{this.state.array[2]}</h3>
        <h3 className='h3'>{this.state.array[3]}</h3>
        <h3 className='h3'>{this.state.array[4]}</h3>
      </div>
    );
  }

}

export default App;
