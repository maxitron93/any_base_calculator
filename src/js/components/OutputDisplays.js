import React from 'react';
import ReactDOM from 'react-dom';
import { OutputDisplay } from './OutputDisplay';

class OutputDisplays extends React.Component {
  state = {
    displays: [{outputBase: 2}, {outputBase: 16}, {outputBase: 10}]
  }

  addDisplay = () => {
    this.setState((prevState) => {
      let newArray = prevState.displays
      newArray.push({outputBase: (Math.floor(Math.random() * 62) + 2)})
      return {
        displays: newArray
      }
    })
  }

  removeDisplay = () => {
    this.setState((prevState) => {
      let newArray = prevState.displays
      if (newArray.length > 1) {
        newArray.pop()
        return {
          displays: newArray
        }
      } else {
        return {
          displays: prevState.displays
        }
      }
    })
  }

  render() {
    return (
    <div className="output-displays">
      <ion-icon name="remove-circle" onClick={this.removeDisplay}></ion-icon>
      <ion-icon name="add-circle" onClick={this.addDisplay}></ion-icon>
      {this.state.displays.map((current, index) => {
        return <OutputDisplay key={index} outputBase={current.outputBase} inputCalculationInBase10={this.props.inputCalculationInBase10} symbols={this.props.symbols} evaluate={this.props.evaluate}/>
      })}
    </div>
    )
  }
}

export { OutputDisplays }