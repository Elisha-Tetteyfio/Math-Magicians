import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    const result = document.querySelector('.displayScreen');
    this.state = { total: result, next: 0, operation: '' };
  }

  buttonClicked = (e) => {
    const { ...state } = this.state;
    this.setState(calculate(state, e.target.innerHTML));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div id="main">
        <div id="displayScreen">
          {total}
          {operation}
          {next}
        </div>
        <div id="buttonsContainer">
          <button type="button" className="buttons" onClick={this.buttonClicked}>AC</button>
          <button type="button" className="buttons" onClick={this.buttonClicked}>+/-</button>
          <button type="button" className="buttons" onClick={this.buttonClicked}>%</button>
          <button type="button" className="buttons bg-orange" onClick={this.buttonClicked}>&#247;</button>
          <button type="button" className="buttons" onClick={this.buttonClicked}>7</button>
          <button type="button" className="buttons" onClick={this.buttonClicked}>8</button>
          <button type="button" className="buttons" onClick={this.buttonClicked}>9</button>
          <button type="button" className="buttons bg-orange" onClick={this.buttonClicked}>x</button>
          <button type="button" className="buttons" onClick={this.buttonClicked}>4</button>
          <button type="button" className="buttons" onClick={this.buttonClicked}>5</button>
          <button type="button" className="buttons" onClick={this.buttonClicked}>6</button>
          <button type="button" className="buttons bg-orange" onClick={this.buttonClicked}>-</button>
          <button type="button" className="buttons" onClick={this.buttonClicked}>1</button>
          <button type="button" className="buttons" onClick={this.buttonClicked}>2</button>
          <button type="button" className="buttons" onClick={this.buttonClicked}>3</button>
          <button type="button" className="buttons bg-orange" onClick={this.buttonClicked}>+</button>
          <button type="button" className="buttons" id="zero" onClick={this.buttonClicked}>0</button>
          <button type="button" className="buttons" onClick={this.buttonClicked}>.</button>
          <button type="button" className="buttons bg-orange" onClick={this.buttonClicked}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
