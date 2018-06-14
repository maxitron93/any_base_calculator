const symbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",  "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "$"]

const convertUnitToDecimal = (unit, base, position) => {
  return symbols.indexOf(unit) * (base ** position)
}

const convertNumberToDecimal = (numberAsString, base) => {  
  // Test number = F5.4A in base 16

  // 1. Test if string includes "." and adds ".0" if not 
  if (!numberAsString.includes(".")) {
    numberAsString = numberAsString + ".0"
  }

  // 2. Split into two elements by "."
  let numbersArray = numberAsString.split(".")
  // Result is: numberAsArray = ["F5", "4A"]
  
  // 3. Convert numberAsArray[0] to decimal (result is a String)
  // -- 1. Split the string into an array of single units
  let beforeDecimalArray = numbersArray[0].split("") 
  // Result is: beforeDecimalArray = ["F", "5"]

  // -- 2. Convert each unit into decimal based on its position
  let newBeforeDecimalArray = beforeDecimalArray.map((current, index, array) => {
    return convertUnitToDecimal(current, base, ((array.length - 1) - index))
  })
  // Result is: beforeDecimalArray = ["240", "5"]

  // -- 3. Sum together the decimal values of all the units
  let beforeDeciamalSum = 0
  newBeforeDecimalArray.forEach((current) => {
    beforeDeciamalSum += parseInt(current, 10)
  });
  // Result is: beforeDeciamalSum = 245

  // 4. Convert numberAsArray[1] to decimal (result is a String)
  // -- 1. Split the string into an array of single units
  let afterDecimalArray = numbersArray[1].split("") 
  // Result is: afterDecimalArray = ["4", "A"]

  // -- 2. Convert each unit into decimal based on its position
  let newAfterDecimalArray = afterDecimalArray.map((current, index) => {
    return convertUnitToDecimal(current, base, ((index + 1) * -1))
  })
  // Result is: afterDecimalArray = ["0.25", "0.0390625"]

  // -- 3. Sum together the decimal values of all the units
  let afterDeciamalSum = 0
  newAfterDecimalArray.forEach((current) => {
    afterDeciamalSum += parseFloat(current, 10)
  });
  // Result is: afterDeciamalSum = 0.2890625

  // 5. Sum the two numbers together
  let decimalNumber = beforeDeciamalSum + afterDeciamalSum
  // Result is: decimalNumber = 20.2890625

  // 6. Return decimalNumber as a number
  return decimalNumber
}





// // Test input array
// let inputArray = ["(", "F5.4A", "+", "3.8E", ")", "**", "0.A8A"]
// let base = 16

// // Convert the input array into an array where the numbers are converted to decimal
// let outputArray = inputArray.map((current) => {
//   if (current !== "(" && current !== ")" && current !== "+" && current !== "-" && current !== "*" && current !== "/" && current !== "**") {
//     return convertNumberToDecimal(current, base)
//   } else {
//     return current
//   }
// })

// // Convert the output array into a string that can be evaluated
// let evalString = outputArray.join(" ")

// console.log(eval(evalString))






// Converting number from base ten to number in other bases 
const convertBeforeDeciamlToBase = (numberBeforerDecimal, base) => {
  let convertedNumberArray = []

  while (numberBeforerDecimal >= 1) {
    convertedNumberArray.unshift(symbols[numberBeforerDecimal % base])
    numberBeforerDecimal = (Math.floor(numberBeforerDecimal / base))
  }
  return convertedNumberArray.join("")
}

// Converting decimal places from base ten to decimal places in other bases
const convertAfterDeciamlToBase = (numberAfterDecimal, base) => {
  // Add "0." to the start of the number
  numberAfterDecimal = eval(`0.${(numberAfterDecimal.toString())}`)
  
  // Declare all the variables I need in the function
  let unitAtDecimalPlace, valueAtDecimalPlace, symbolIndex;
  let decimalPlace = 1;
  let convertedNumberArray = []

  // The while loop does not run until numberAfterDecimal === 0 because it may run forever (infinate decimal places)
    while (numberAfterDecimal >= 0.00000001) { 
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

const convertNumberToBase = (number, base) => {
  // 1. Convert number to strung
  let numberAsString = number.toString()

  // 2. Test if string includes "." and adds ".0" if not 
  if (!numberAsString.includes(".")) {
    numberAsString = numberAsString + ".0"
  }

  // 3. Split into two elements by "."
  let numbersArray = numberAsString.split(".")

  // 4. Convert numberAsArray[0] to a number in the desired base (result is a String)
  let baseBeforeDecimal = convertBeforeDeciamlToBase(parseInt(numbersArray[0], 10), base)
  
  // 5. Convert numberAsArray[1] to a number in the desired base (result is a String)
  let baseAfterDecimal = convertAfterDeciamlToBase(parseInt(numbersArray[1], 10), base)

  // 6. Join the two numbers (strings) with a "." in the middle
  let baseNumber
  if (baseAfterDecimal) {
    baseNumber = baseBeforeDecimal + "." + baseAfterDecimal
  } else {
    baseNumber = baseBeforeDecimal
  }

  // 7. Return baseNumber as a string
  return baseNumber
}

// console.log(convertNumberToBase(4, 2))

// console.log(convertNumberToBase(4.125123, 2))

// console.log(convertBeforeDeciamlToBase(4, 2))

// console.log(convertAfterDeciamlToBase(125123, 2))
