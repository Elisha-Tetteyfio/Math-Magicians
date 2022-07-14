import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const result = document.querySelector('.displayScreen');

  const [state, setState] = useState({ total: result, next: 0, operation: '' });

  const buttonClicked = (e) => {
    setState(calculate(state, e.target.innerHTML));
  };

  return (
    <div id="main">
      <div id="displayScreen">
        {state.total}
        {state.operation}
        {state.next}
      </div>
      <div id="buttonsContainer">
        <button type="button" className="buttons" onClick={buttonClicked}>AC</button>
        <button type="button" className="buttons" onClick={buttonClicked}>+/-</button>
        <button type="button" className="buttons" onClick={buttonClicked}>%</button>
        <button type="button" className="buttons bg-orange" onClick={buttonClicked}>&#247;</button>
        <button type="button" className="buttons" onClick={buttonClicked}>7</button>
        <button type="button" className="buttons" onClick={buttonClicked}>8</button>
        <button type="button" className="buttons" onClick={buttonClicked}>9</button>
        <button type="button" className="buttons bg-orange" onClick={buttonClicked}>x</button>
        <button type="button" className="buttons" onClick={buttonClicked}>4</button>
        <button type="button" className="buttons" onClick={buttonClicked}>5</button>
        <button type="button" className="buttons" onClick={buttonClicked}>6</button>
        <button type="button" className="buttons bg-orange" onClick={buttonClicked}>-</button>
        <button type="button" className="buttons" onClick={buttonClicked}>1</button>
        <button type="button" className="buttons" onClick={buttonClicked}>2</button>
        <button type="button" className="buttons" onClick={buttonClicked}>3</button>
        <button type="button" className="buttons bg-orange" onClick={buttonClicked}>+</button>
        <button type="button" className="buttons" id="zero" onClick={buttonClicked}>0</button>
        <button type="button" className="buttons" onClick={buttonClicked}>.</button>
        <button type="button" className="buttons bg-orange" onClick={buttonClicked}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
