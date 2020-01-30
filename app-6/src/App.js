import React, { Component } from 'react';
import './App.css';
import Todo from './component/Todo'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputLine: '',
      listArray: []
    }
  }

  handleChange = (val) => {
    this.setState({ inputLine: val })
  }

  handleChangeClick = (val) => {
    let newArr = [...this.state.listArray]
    newArr.push(val)
    this.setState({ listArray: newArr })
    console.log(this.state.listArray)
  }


  render() {
    return (
      <div className="App">
        <h1>To Do Lister</h1>
        <input onChange={(event) => this.handleChange(event.target.value)} />
        <button onClick={() => this.handleChangeClick(this.state.inputLine)}>Add</button>
        <Todo className="todo" listItems={this.state.listArray} />
      </div>
    );
  }
}

export default App;
