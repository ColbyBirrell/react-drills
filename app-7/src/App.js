import React, { Component } from "react";
import "./App.css";
import NewTask from "./components/NewTask";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };

  }

  handleAddTask = (task) => {
    this.setState({ list: [...this.state.list, task] });
  }

  render() {
    return (
      <div className="App">
        <h1>My todoist listist:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;





// import React, { Component } from 'react';
// import './App.css';
// // import Todo from './components/Todo'
// import NewTask from './components/NewTask'
// import List from './components/List'

// class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {

//       listArray: []
//     }
//   }

//   handleChangeClick = (val) => {
//     this.setState({ listArray: [...this.state.listArray, val] })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>To Do Listerer</h1>
//         <NewTask click={this.handleChangeClick} />
//         <List listItems={this.state.listArray} />
//       </div>
//     );
//   }

// }

// export default App;

