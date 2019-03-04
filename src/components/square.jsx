import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }

  render() {
    return (
      <button className="square"
        onClick={this.props.onClick}>
	{this.props.value}
      </button>
    );
  }
}

export default Square;

