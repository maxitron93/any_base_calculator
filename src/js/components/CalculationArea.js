import React from 'react';
import ReactDOM from 'react-dom';
import { InputDisplay } from './InputDisplay'
import { Operations } from './Operations'
import { Numbers } from './Numbers'
import { ChangeSymbols } from './ChangeSymbols'

const CalculationArea = (props) => {
  return (
    <div>
      <InputDisplay changeInputBase={props.changeInputBase} currentBase={props.currentBase} inputCalculation={props.inputCalculation} clearInputCalculation={props.clearInputCalculation}/>
      <Operations addToInputCalculation={props.addToInputCalculation} clearInputCalculation={props.clearInputCalculation} deleteFromInputCalculation={props.deleteFromInputCalculation} handleEvaluate={props.handleEvaluate} trackInputCalculation={props.trackInputCalculation} handleDisableEvaluate={props.handleDisableEvaluate}/>
      <Numbers symbols={props.symbols} currentBase={props.currentBase} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation} handleDisableEvaluate={props.handleDisableEvaluate}/>
      {/* <ChangeSymbols toggleFunSymbols={props.toggleFunSymbols} clearInputCalculation={props.clearInputCalculation}/> */}
    </div>
  )
}

export { CalculationArea }