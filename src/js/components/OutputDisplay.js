import React from 'react';
import ReactDOM from 'react-dom';
import { convertDecimalToBase } from '../functions/convertDecimalToBase'

class OutputDisplay extends React.Component {
  convertToOutputString = (inputString, newBase) => {
    // 1. Convert the string to an array
    let inputCalculationArray = inputString.split(" ")
    
    // 2. Convert every decimal number into a base number (return an array)
    let convertedArray = inputCalculationArray.map((current) => {
      if (current === "(" || current === ")" || current === "/" || current === "*" || current === "-" || current === "+" || current === "**" || current === "" || current === "~") {
        return current
      } else if (current.includes("~", 1)) {
        return current
      } else if (current.includes("~")) {
        return convertDecimalToBase(current, newBase, this.props.symbols)
      } else {
        return convertDecimalToBase(current, newBase, this.props.symbols)
      }
    })

    // 3. Convert the array back into a string
    let convertedString = convertedArray.join(" ")
    
    // 4. Return converted string
    return convertedString

  }
  
  state = {
    outputBase: this.props.outputBase,
    outputString: ""
  }

  changeBase = (event) => {
    let newBase = parseInt(event.target.value)
    if (newBase >= 2 && newBase <= 64) {
      this.setState(() => {
        return {
          outputBase: newBase,
          outputString: this.convertToOutputString(this.props.inputCalculationInBase10, newBase)
        }
      })
    }  
  }

  evaluateString = (decimalString, base, symbols) => {
    try {
      let stringWithUpdatedNegativeSymbols = decimalString.replace("~", "-")
      let evaluatedStringInDecimal = eval(stringWithUpdatedNegativeSymbols).toString()
      console.log(evaluatedStringInDecimal)
      if (evaluatedStringInDecimal > 9900000000000000000) {
        return "Value too big. The maximum calculable value is 9 quintillion (9x10^18)"
      } else {
        evaluatedStringInDecimal = evaluatedStringInDecimal.replace("-", "~")
        let evaluatedStringInBase = convertDecimalToBase(evaluatedStringInDecimal, base, symbols)
        return evaluatedStringInBase
      }
    } catch(error) {
      return "Cannot be evaluated. Please check your calculation."
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.inputCalculationInBase10 !== this.props.inputCalculationInBase10) {
      this.setState(() => {
        return {
          outputString: this.convertToOutputString(this.props.inputCalculationInBase10, this.state.outputBase)
        }
      })
    }
  }

  componentDidMount(prevProps, prevState) {
    this.setState(() => {
      return {
        outputString: this.convertToOutputString(this.props.inputCalculationInBase10, this.state.outputBase)
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
      <div className="output-display__base-output-area">{this.props.evaluate ? this.evaluateString(this.props.inputCalculationInBase10, this.state.outputBase, this.props.symbols) : this.state.outputString}</div>
    </div>
    )
  }
}

export { OutputDisplay }




// // 1. Convert the string to an array
// let inputCalculationArray = this.state.inputCalculation.split(" ")

// // 2. Convert every base number into a decimal number (return an array)
// let convertedArray = inputCalculationArray.map((current) => {
//   if (current === "(" || current === ")" || current === "/" || current === "*" || current === "-" || current === "+" || current === "**" || current === "") {
//     return current
//   } else if (current.includes("~", 1)) {
//     return current
//   } else if (current.includes("~")) {
//     return convertBaseToDecimal(current, this.state.inputBase, this.state.symbols)
//   } else {
//     return convertBaseToDecimal(current, this.state.inputBase, this.state.symbols)
//   }
// })

// // 3. Convert the array back into a string
// let convertedString = convertedArray.join(" ")

// // 4. Update state of inputCalculationInBase10 with the string
// this.setState(() => {
//   return {
//     inputCalculationInBase10: convertedString
//   }
// })