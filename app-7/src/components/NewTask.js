import React, { Component } from "react";

class NewTask extends Component {
    constructor() {
        super();

        this.state = {
            input: ""
        };
    }

    handleInputChange = (value) => {
        this.setState({ input: value });
    }

    handleAdd = () => {
        this.props.add(this.state.input);
        this.setState({ input: "" });
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.input}
                    onChange={e => this.handleInputChange(e.target.value)}
                />

                <button onClick={this.handleAdd}>Add</button>
            </div>
        );
    }
}

export default NewTask;




// import React, { Component } from 'react';


// class NewTask extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             inputLine: ''

//         }
//         // console.log(this.state.inputLine)
//     }

//     handleChange = (val) => {
//         this.setState({ inputLine: val })
//     }

//     handleClick = () => {
//         this.props.click(this.state.inputLine)
//         this.setState({ inputLine: '' })
//     }




//     render() {


//         return (<div>
//             <input value={this.state.inputLine} onChange={(event) => this.handleChange(event.target.value)} />
//             <button onClick={() => this.handleClick}>Add</button>
//         </div>

//         )
//     }
// }

// export default NewTask;