// * Exercise 5 *

// Nomer 1

function lowHighAvg(arr) {
    let lowest = Infinity;
    let highest = 0;
    let average = 0;
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < lowest) {
        lowest = arr[i];
      }
  
      if (arr[i] > highest) {
        highest = arr[i];
      }
      sum += arr[i];
    }
  
    average = sum / arr.length;
  
    return `{lowest: ${lowest}, highest: ${highest}, average: ${average}}`;
  }
  
  console.log(lowHighAvg([12, 5, 23, 18, 4, 45, 32]));
  
  // Nomer 2
  
  function arrToWord(arr) {
    let result = "";
  
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        result += `and ${arr[i]}.`;
      } else {
        result += `${arr[i]}, `;
      }
    }
  
    return result;
  }
  
  console.log(arrToWord(["Apple", "Banana", "Cherry", "Date"]));
  
  // Nomer 3

  function splitString(str) {
    
    // Looped Version
  
    let result = [];
    let temp = "";
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        result.push(temp);
        temp = "";
        continue;
      } else {
        temp += str[i];
      }
    }
  
    result.push(temp);
  
    return result;
  
  }
  
  console.log(splitString("Hello World"));
  
  // Nomer 4

  function addArr(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return `Invalid Array Input`;
    }
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
      result.push(arr1[i] + arr2[i]);
    }
  
    return result;
  }
  
  console.log(addArr([1, 2, 3], [3, 2, 1]));
  
  // Nomer 5

  function addNewToArr(arr, newElement) {
  
    // Looped Version
    let inArray = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === newElement) {
        inArray = true;
        break;
      }
    }
    if (inArray === false) {
      arr.push(newElement);
    }
  
    return arr;
  }
  
  console.log(addNewToArr([1, 2, 3, 4], 11));
  
  // Nomer 6

  function evenNum(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  
  console.log(evenNum([1, 2, 3, 4, 5, 6]));
  
  // Nomer 7
  
  function maxArrayInt(size, ...givenInteger) {
    let result = [];
  
    if (size > givenInteger.length) {
      return givenInteger;
    }
    for (let i = 0; i < size; i++) {
      result.push(givenInteger[i]);
    }
  
    return result;
  }
  
  console.log(maxArrayInt(10, 5, 10, 24, 3, 6, 7, 8));
  
  // Nomer 8

  function combineArr(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
  
    return arr1;
  }
  
  console.log(combineArr([1, 2, 3], [4, 5, 6]));
  
  // Nomer 9
  
  function findDuplicate(arr) {
    let result = [];
    let arrayCount = [];
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
        }
      }
      arrayCount.push(count);
    }
  
    for (let i = 0; i < arrayCount.length; i++) {
      if (arrayCount[i] > 1) {
        if (result.includes(arr[i])) {
          continue;
        } else {
          result.push(arr[i]);
        }
      }
    }
  
    return result;
  }
  
  console.log(findDuplicate([1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 6, 6, 7]));
  
  // Nomer 10
  
  function diffArray(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        continue;
      } else {
        result.push(arr1[i]);
      }
    }
  
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.includes(arr2[i])) {
        continue;
      } else {
        result.push(arr2[i]);
      }
    }
  
    result.sort((a, b) => a - b);
  
    return result;
  }

  console.log(diffArray([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
  
  // Nomer 11
  
    function primitiveTypesOnly(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "object") {
        continue;
      } else {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  
  console.log(primitiveTypesOnly([1, [], undefined, {}, "string", {}, []]));
  
  // Nomer 12

  function secSmall(arr) {
    arr.sort((a, b) => a - b);
    return arr[1];
  }

  console.log(secSmall([5, 3, 1, 7, 2, 6]));
  
  // Nomer 13
  
  function sumNumber(arr) {
    let numArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        numArr.push(arr[i]);
      }
    }
  
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
      sum += numArr[i];
    }
  
    return sum;
  }
  
  console.log(sumNumber(["3", 1, "string", null, false, undefined, 2]));
  
  // Nomer 14
  
  function sumDuplicate(arr) {
    let counterArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      let counter = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          counter++;
        }
      }
      counterArr.push(counter);
    }
  
    let sum = 0;
    for (let i = 0; i < counterArr.length; i++) {
      if (counterArr[i] > 1) {
        sum = counterArr[i] * arr[i];
        break;
      }
    }
  
    return sum;
  }
  
  console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]));
  
  // Nomer 15
  
  function rockPaperScissor(hand) {
    let random = Math.floor(Math.random() * 3) + 1;
    let value = "";
    if (random === 1) {
      value = "Rock";
    } else if (random === 2) {
      value = "Paper";
    } else {
      value = "Scissor";
    }
  
    if (hand === value) {
      return `You Won`;
    } else {
      return `You lose`;
    }
  }
  
  console.log(rockPaperScissor("Paper"));