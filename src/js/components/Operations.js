import React from 'react';
import ReactDOM from 'react-dom';
import { Operation } from './Operation'

const Operations = (props) => {
  const deleteAndTrack = async () => {
    await props.deleteFromInputCalculation();
    props.trackInputCalculation();
  }
  return (
    <div className="operations">
      <Operation operatorSymbol={"("} operatorValue={" ( "} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation}/>
      <Operation operatorSymbol={")"} operatorValue={" ) "} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation}/>
      <Operation operatorSymbol={"+/-"} operatorValue={"~"} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation}/>
      <Operation operatorSymbol={"."} operatorValue={"."} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation}/>
      <Operation operatorSymbol={"/"} operatorValue={" / "} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation}/>
      <Operation operatorSymbol={"x"} operatorValue={" * "} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation}/>
      <Operation operatorSymbol={"-"} operatorValue={" - "} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation}/>
      <Operation operatorSymbol={"+"} operatorValue={" + "} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation}/>
      <Operation operatorSymbol={"^"} operatorValue={" ** "} addToInputCalculation={props.addToInputCalculation} trackInputCalculation={props.trackInputCalculation}/>
      <button className="operations__equals" onClick={props.evaluateInputCalculation}>=</button>
      <button className="operations__delete" onClick={deleteAndTrack}>{"<"}</button>
      <button className="operations__clear" onClick={props.clearInputCalculation}>Clear</button>
    </div>
  )
}

export { Operations }