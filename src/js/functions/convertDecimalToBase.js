// Converting number from base ten to number in other bases 
const convertBeforeDeciamlToBase = (numberBeforerDecimal, base, symbols) => {
  let convertedNumberArray = []

  while (numberBeforerDecimal >= 1) {
    convertedNumberArray.unshift(symbols[numberBeforerDecimal % base])
    numberBeforerDecimal = (Math.floor(numberBeforerDecimal / base))
  }
  return convertedNumberArray.join("")
}

// Converting decimal places from base ten to decimal places in other bases
const convertAfterDeciamlToBase = (numberAfterDecimal, base, symbols) => {
  // Add "0." to the start of the number
  numberAfterDecimal = eval(`0.${(numberAfterDecimal.toString())}`)
  
  // Declare all the variables I need in the function
  let unitAtDecimalPlace, valueAtDecimalPlace, symbolIndex;
  let decimalPlace = 1;
  let convertedNumberArray = []

  // The while loop does not run until numberAfterDecimal === 0 because it may run forever (infinate decimal places)
    while (numberAfterDecimal >= 0.0001) { 
      // 1. Calculate the decimal value of the decimalPlace
      valueAtDecimalPlace = base ** -decimalPlace

      // 2. Calculate the number of times numberAfterDecimal will fit into valueAtDecimalPlace to determine the symbol
      symbolIndex = Math.floor(numberAfterDecimal / valueAtDecimalPlace)

      // 3. Add the symbol to the array
      convertedNumberArray.push(symbols[symbolIndex])

      // 4. 
      numberAfterDecimal = numberAfterDecimal - valueAtDecimalPlace * symbolIndex
      
      // 5. Go to the next decimal place
      decimalPlace++
    }
  return convertedNumberArray.join("")
}

const convertDecimalToBase = (number, base, symbols) => {
  // 0. Test if string includes "~"
  let negativeSign = ""
  if (number.includes("~")) {
    number = number.replace("~", "")
    negativeSign = "~"
  }

  // 1. Convert number to strung
  let numberAsString = number.toString()

  // 2. Test if string includes "." and adds ".0" if not 
  if (!numberAsString.includes(".")) {
    numberAsString = numberAsString + ".0"
  }

  // 3. Split into two elements by "."
  let numbersArray = numberAsString.split(".")

  // 4. Convert numberAsArray[0] to a number in the desired base (result is a String)
  let baseBeforeDecimal = convertBeforeDeciamlToBase(parseInt(numbersArray[0], 10), base, symbols)
  
  // 5. Convert numberAsArray[1] to a number in the desired base (result is a String)
  let baseAfterDecimal = convertAfterDeciamlToBase(parseInt(numbersArray[1], 10), base, symbols)

  // 6. Join the two numbers (strings) with a "." in the middle
  let baseNumber
  if (baseAfterDecimal) {
    baseNumber = negativeSign + baseBeforeDecimal + "." + baseAfterDecimal
  } else {
    baseNumber = negativeSign + baseBeforeDecimal
  }

  // 7. Return baseNumber as a string
  return baseNumber
}

export { convertDecimalToBase }