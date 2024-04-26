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
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    return (
      <div>
        {this.state.show ? <h1>{this.state.name}</h1> : <h1>{this.state.name2}</h1>}
        <button onClick={this.handleName}>
          {this.state.show ? 'Hide' : 'Show'}
          https://newsapi.org/v2/everything?q=${search}&pageSize=${pageSize}&page=${page}&from=2023-12-21&sortBy=publishedAt&apiKey=210e4a70ba254457af1330a926ae77e8
        </button>
      </div>
    );
  }
}
