import React from 'react';
import ReactDOM from 'react-dom';
import { Number } from './Number'

const Numbers = (props) => {
  return (
    <div className="numbers">
      {props.symbols.map((current, index, array) => {
        while (index < props.currentBase) {
          return (
            <Number key={index} symbol={current} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation} handleDisableEvaluate={props.handleDisableEvaluate}/>
          )
        }
      })}
    </div>
  )
}

export { Numbers }