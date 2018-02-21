function add (a,b) {
  return parseInt(a) + parseInt(b)
}

function divide (a,b) {
  return parseInt(a) / parseInt(b)
}

function multiply (a,b) {
  return parseInt(a) * parseInt(b)
}

function subtract (a,b) {
  return parseInt(a) - parseInt(b)
}

function test () {
  let num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 10
  let num2 = Math.floor(Math.random() * (10 - 1 + 1)) + 10
  
  console.log(add(num1, num2))
  console.log(divide(num1, num2))
  console.log(multiply(num1, num2))
  console.log(subtract(num1, num2))
}

test()