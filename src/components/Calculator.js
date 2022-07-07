import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(name) {
    super(name);
    this.name = name;
  }

  render() {
    return (
      <div id="main">
        <div id="displayScreen">
          0
        </div>
        <div id="buttonsContainer">
          <button type="button" className="buttons">AC</button>
          <button type="button" className="buttons">+/-</button>
          <button type="button" className="buttons">%</button>
          <button type="button" className="buttons bg-orange"> &#247; </button>
          <button type="button" className="buttons">7</button>
          <button type="button" className="buttons">8</button>
          <button type="button" className="buttons">9</button>
          <button type="button" className="buttons bg-orange">X</button>
          <button type="button" className="buttons">4</button>
          <button type="button" className="buttons">5</button>
          <button type="button" className="buttons">6</button>
          <button type="button" className="buttons bg-orange">-</button>
          <button type="button" className="buttons">1</button>
          <button type="button" className="buttons">2</button>
          <button type="button" className="buttons">3</button>
          <button type="button" className="buttons bg-orange">+</button>
          <button type="button" className="buttons" id="zero">0</button>
          <button type="button" className="buttons">.</button>
          <button type="button" className="buttons bg-orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
