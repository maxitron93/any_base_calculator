import React from 'react';
import ReactDOM from 'react-dom';
import { evaluateDecimalString } from '../functions/evaluateDecimalString' // Takes a string with a decimal calculation, evaluates it, and converts it to a base string

class OutputDisplay extends React.Component {
  state = {
    outputBase: this.props.outputBase
  }

  changeBase = (event) => {
    let newBase = parseInt(event.target.value)
    this.setState(() => {
      return {
        outputBase: newBase
      }
    })
  }

  render() {
    return (
    <div className="output-display">
      <div className="output-display__base-change-area">
        <p>display in base:</p>
        <input type="text" onChange={this.changeBase} defaultValue={this.state.outputBase}/>
      </div>
      <div className="output-display__base-output-area">{evaluateDecimalString("Decimal string is being evaluated to base", this.state.outputBase)}</div>
    </div>
    )
  }
}

export { OutputDisplay }