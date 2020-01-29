import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      inputLine: '',
      array: ['sushi', 'seafood', 'eggs', 'pizza', 'cake', 'wings']
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(val) {
    this.setState({ inputLine: val })
  }












  render() {
    let found = this.state.array.filter((element) => {
      return element.includes(this.state.inputLine)
    })

      .map((element, index) => {
        return <h2 key={index}>{element}</h2>
      })



    return (
      <div className="App">
        <input onChange={(event) => this.handleChange(event.target.value)} />
        <h2 className='h2'>{found}</h2>
      </div>
    );
  }
}

export default App;
