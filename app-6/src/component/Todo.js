import React, { Component } from 'react';


class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {

        let found = this.props.listItems.map((element, index) => {
            return <h2 key={index}> {element} </h2>
        })



        return found
    }
}

export default Todo;