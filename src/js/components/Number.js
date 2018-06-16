import React from 'react';
import ReactDOM from 'react-dom';

const Number = (props) => {
  const addNumberAndTrackInput = async () => {
    await props.addToInputCalculation(props.symbol)
    props.trackInputCalculation();
    props.handleDisableEvaluate();
  }

  return (
    <div className="number" onClick={addNumberAndTrackInput}>{props.symbol}</div>
  )
}

export { Number }