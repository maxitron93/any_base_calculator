import React from 'react';
import ReactDOM from 'react-dom';
import { Operation } from './Operation'

const Operations = (props) => {
  const deleteAndTrack = async () => {
    await props.deleteFromInputCalculation();
    props.trackInputCalculation();
    props.handleDisableEvaluate();
  }

  const clearAndDisableEvaluate = async () => {
    await props.handleDisableEvaluate();
    props.clearInputCalculation();
  }
  return (
    <div className="operations">
      <Operation operatorSymbol={"("} operatorValue={" ( "} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation} handleDisableEvaluate={props.handleDisableEvaluate}/>
      <Operation operatorSymbol={")"} operatorValue={" ) "} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation} handleDisableEvaluate={props.handleDisableEvaluate}/>
      <Operation operatorSymbol={"+/-"} operatorValue={"~"} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation} handleDisableEvaluate={props.handleDisableEvaluate}/>
      <Operation operatorSymbol={"."} operatorValue={"."} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation} handleDisableEvaluate={props.handleDisableEvaluate}/>
      <Operation operatorSymbol={"/"} operatorValue={" / "} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation} handleDisableEvaluate={props.handleDisableEvaluate}/>
      <Operation operatorSymbol={"x"} operatorValue={" * "} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation} handleDisableEvaluate={props.handleDisableEvaluate}/>
      <Operation operatorSymbol={"-"} operatorValue={" - "} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation} handleDisableEvaluate={props.handleDisableEvaluate}/>
      <Operation operatorSymbol={"+"} operatorValue={" + "} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation} handleDisableEvaluate={props.handleDisableEvaluate}/>
      <Operation operatorSymbol={"^"} operatorValue={" ** "} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation} handleDisableEvaluate={props.handleDisableEvaluate}/>
      <button className="operations__equals" onClick={props.handleEvaluate}>=</button>
      <button className="operations__delete" onClick={deleteAndTrack}>{"<"}</button>
      <button className="operations__clear" onClick={clearAndDisableEvaluate}>Clear</button>
    </div>
  )
}

export { Operations }