import React, { Component }  from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementWithDelay = this.incrementWithDelay.bind(this)
  }

  incrementWithDelay(){
    setTimeout(this.props.onIncrement, 1000)
  }


  render() {
    const { value, onIncrement, onDecrement } = this.props
    return(
      <section id="counter-wrapper">
        <article id="counter-info">
          <h1>Counter</h1>
          <p>The counter has been clicked:</p>
          <p>{value} times.</p>
        </article>
        <article id="increment-button">
          <button onClick={onIncrement}>+</button>
        </article>
        <article id="decrement-button">
          <button onClick={onDecrement}>-</button>
        </article>
        <article id="delay-button">
          <button onClick={this.incrementWithDelay}>Increment With Delay</button>
        </article>
      </section>
  )};
}

export default Counter;
