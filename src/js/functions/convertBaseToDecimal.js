const convertUnitToDecimal = (unit, base, position, symbols) => {
  return symbols.indexOf(unit) * (base ** position)
}

const convertBaseToDecimal = (numberAsString, base, symbols) => {  
  // Test number = F5.4A in base 16

  // 0. Test if string includes "~"
  let negativeSign = ""
  if (numberAsString.includes("~")) {
    numberAsString = numberAsString.replace("~", "")
    negativeSign = "~"
  }

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
    return convertUnitToDecimal(current, base, ((array.length - 1) - index), symbols)
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
    return convertUnitToDecimal(current, base, ((index + 1) * -1), symbols)
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
  return negativeSign.concat(decimalNumber)
}

export { convertBaseToDecimal }