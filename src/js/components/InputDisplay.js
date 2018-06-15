import React from 'react';
import ReactDOM from 'react-dom';

class InputDisplay extends React.Component {
  updateBaseandAndClearInput = (event) => {
    this.props.changeInputBase(event.target.value);
    this.props.clearInputCalculation();
  }

  render() {
    return (
      <div className="input-display">
        <div className="input-display__base-change-area">
          <p>calculate in base:</p>
          <input type="text" defaultValue={this.props.currentBase} onChange={this.updateBaseandAndClearInput}/>
        </div>
        <div className="input-display__base-input-area">{this.props.inputCalculation}</div>
      </div>
    )
  }
}

export { InputDisplay }