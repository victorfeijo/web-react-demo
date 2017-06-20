import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  render() {
    const currentValue = this.state.value;

    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>Count value: {currentValue} </h2>
        <button onClick={(e) => this.setState({ value: currentValue + 1 })}> Click me! </button>
      </div>
    );
  }
}

export default Counter;
