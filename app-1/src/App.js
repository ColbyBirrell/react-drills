import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputLine: '',

    }

  }
  handleChange = (val) => {
    this.setState({ inputLine: val })
  }



  render() {
    return (
      <div className="App">
        <input onChange={(event) => this.handleChange(event.target.value)} />
        <p> {this.state.inputLine} </p>
      </div >
    );
  }
}

export default App;
