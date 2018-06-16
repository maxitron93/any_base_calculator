import React from 'react';
import ReactDOM from 'react-dom';

const Operation = (props) => {
  const addOperationAndTrack = async () => {
    await props.handleDisableEvaluate();
    await props.addToInputCalculation(props.operatorValue);
    props.trackInputCalculation();
  }

  return (
    <div className="operation" onClick={addOperationAndTrack}>{props.operatorSymbol}</div>
  )
}

export { Operation }