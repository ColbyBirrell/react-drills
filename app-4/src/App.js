import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChangeUser = (val) => {
    this.setState({ username: val })
  }

  handleChangePassword = (val) => {
    this.setState({ password: val })
  }


  handleChangeAlert = () => {
    alert(`${this.state.username} ${this.state.password}`)
  }







  render() {
    return (
      <div className="App">
        <input onChange={(event) => this.handleChangeUser(event.target.value)} />
        <input onChange={(event) => this.handleChangePassword(event.target.value)} />
        <button onClick={(event) => this.handleChangeAlert(event.target.value)}>Login</button>

      </div>
    );
  }
}

export default App;
