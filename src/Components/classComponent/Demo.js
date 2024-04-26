
import React, { Component } from 'react';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "aryaman",
      show: true,
    };
  }

  handleName = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.show && <h1>{this.state.name}</h1>}
        <button onClick={this.handleName}>hide</button>
      </div>
    );
  }
}

//============================================================================

// import React, { Component } from 'react'

// export default class Demo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name:"aryaman",
//       Show: true,
//     }
//   }  

//   handleName() {
    
//     this.Show=false
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <button onClick={this.handleName}>hide</button>
//       </div>
//     )
//   }
// }