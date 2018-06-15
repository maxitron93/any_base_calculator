import React from 'react';
import ReactDOM from 'react-dom';

const ChangeSymbols = (props) => {
  const toggleAndClear = () => {
    props.toggleFunSymbols();
    props.clearInputCalculation();
  }

  return (
    <div className="change-symbols">
      <p className="change-symbols__prompt">Did you know that a + b = c? Don't believen me? See for yourself ---><button className="change-symbols__button" onClick={toggleAndClear}>Toggle Fun Symbols</button></p>
      
    </div>
  )
}

export { ChangeSymbols }