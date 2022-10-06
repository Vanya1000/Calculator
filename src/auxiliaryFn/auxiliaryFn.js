export const calculateExpression = (str) => {
  const replaceStr = str.replace(/(?<!\d)\./g, '0.');
  const arr = replaceStr.split(/(\d+\.?\d*|\+|\*|\(|\))/).filter((item) => item !== '');
  const stackNumbers = []
  const stackOperators = []
  const priority = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  }

  const calculate = (a, b, operator) => {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      stackOperators.push(arr[i]);
    } else if (arr[i] === ')') {
      while (stackOperators[stackOperators.length - 1] !== '(') {
        const b = stackNumbers.pop();
        const a = stackNumbers.pop();
        const operator = stackOperators.pop();
        stackNumbers.push(calculate(a, b, operator));
      }
      stackOperators.pop();
    } else if (priority[arr[i]]) {
      while (priority[stackOperators[stackOperators.length - 1]] >= priority[arr[i]]) {
        const b = stackNumbers.pop();
        const a = stackNumbers.pop();
        const operator = stackOperators.pop();
        stackNumbers.push(calculate(a, b, operator));
      }
      stackOperators.push(arr[i]);
    } else {
      stackNumbers.push(Number(arr[i]));
    }
  }

  while (stackOperators.length) {
    const b = stackNumbers.pop();
    const a = stackNumbers.pop();
    const operator = stackOperators.pop();
    stackNumbers.push(calculate(a, b, operator));
  }
  let result = String(Number.isInteger(stackNumbers[0]) ? stackNumbers[0] : stackNumbers[0].toFixed(3)); 

  if (isNaN(result) || result === 'Infinity') {
    result = 'Error'
  }
  
  const history = `${str} = ${result}`//?
  return [result, history];
}

export const checkValue = (str) => {
  const isCheckNum = str.match(/(.?\d+\.?\d*)(\+|\-|\*|\/)(.?\d+\.?\d*)/)
  const arr = str.split('');
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      stack.push(arr[i]);
    } else if (arr[i] === ')') {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0 && isCheckNum;
}

export const validateInput = (display, s) => {
  const allString = display + s;
  if (display === '') {
    return ['*', '/', '+', '-', ')'].indexOf(s) === -1;
  }
  return !allString.match(/(\+|\-|\*|\/){2,}|\.{2,}/)
}