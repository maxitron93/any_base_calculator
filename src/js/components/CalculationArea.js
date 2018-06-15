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
      <Operations addToInputCalculation={props.addToInputCalculation} clearInputCalculation={props.clearInputCalculation} deleteFromInputCalculation={props.deleteFromInputCalculation} evaluateInputCalculation={props.evaluateInputCalculation} trackInputCalculation={props.trackInputCalculation}/>
      <Numbers symbols={props.symbols} currentBase={props.currentBase} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation}/>
      <ChangeSymbols toggleFunSymbols={props.toggleFunSymbols} clearInputCalculation={props.clearInputCalculation}/>
    </div>
  )
}

export { CalculationArea }