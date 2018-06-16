import React from 'react';
import ReactDOM from 'react-dom';
import { OutputDisplays } from './OutputDisplays'
import { CalculationArea } from './CalculationArea'
import { convertBaseToDecimal } from '../functions/convertBaseToDecimal'
import { symbols } from '../functions/symbols'
import { funSymbols } from '../functions/funSymbols'


class Calculator extends React.Component {
  funSymbols = funSymbols
  symbols = symbols
  convertBaseToDecimal = convertBaseToDecimal

  state = {
    symbols: symbols,
    inputBase: 64,
    inputCalculation: "",
    inputCalculationInBase10: ""
  }

  changeInputBase = (newBase) => {
    this.setState(() => {
      return {
        inputBase: newBase
      }
    })
  }

  toggleFunSymbols = () => {
    this.setState((prevState) => {
      if (prevState.symbols === this.symbols) {
        return {
          symbols: this.funSymbols
        }
      } else {
        return {
          symbols: this.symbols
        }
      }
    })
  }

  addToInputCalculation = (addString) => {
    this.setState((prevState) => {
      return {
        inputCalculation: prevState.inputCalculation.concat(addString)
      }
    })
  }

  clearInputCalculation = () => {
    this.setState(() => {
      return {
        inputCalculation: "",
        inputCalculationInBase10: ""
      }
    })
  }

  deleteFromInputCalculation = () => {
    this.setState((prevState) => {
      return {
        inputCalculation: prevState.inputCalculation.slice(0, -1)
      }
    })
  }

  trackInputCalculation = () => {
    // 1. Convert the string to an array
    let inputCalculationArray = this.state.inputCalculation.split(" ")

    // 2. Convert every base number into a decimal number (return an array)
    let convertedArray = inputCalculationArray.map((current) => {
      if (current === "(" || current === ")" || current === "/" || current === "*" || current === "-" || current === "+" || current === "**" || current === "" || current === "~") {
        return current
      } else if (current.includes("~", 1)) {
        return current
      } else if (current.includes("~")) {
        return convertBaseToDecimal(current, this.state.inputBase, this.state.symbols)
      } else {
        return convertBaseToDecimal(current, this.state.inputBase, this.state.symbols)
      }
    })

    // 3. Convert the array back into a string
    let convertedString = convertedArray.join(" ")

    // 4. Update state of inputCalculationInBase10 with the string
    this.setState(() => {
      return {
        inputCalculationInBase10: convertedString
      }
    })
  }

  evaluateInputCalculation = () => {
    try {
      console.log(eval(this.state.inputCalculation))
    } catch(error) {
      console.log("Error")
    }
  }

  render() {
    return (
      <div className="calculator">
        <OutputDisplays inputCalculationInBase10={this.state.inputCalculationInBase10} symbols={this.state.symbols}/>
        <CalculationArea symbols={this.state.symbols} changeInputBase={this.changeInputBase} currentBase={this.state.inputBase} toggleFunSymbols={this.toggleFunSymbols} inputCalculation={this.state.inputCalculation} addToInputCalculation={this.addToInputCalculation} clearInputCalculation={this.clearInputCalculation} deleteFromInputCalculation={this.deleteFromInputCalculation} evaluateInputCalculation={this.evaluateInputCalculation} trackInputCalculation={this.trackInputCalculation}/>
      </div>
    )
  }
}

export { Calculator }