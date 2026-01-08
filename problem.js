

// Problem-01

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example

const value = reverseString("hello");

// console.log(value);



// Problem-02

function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}

// Example

const vowelCount = countVowels("programming");

// console.log(vowelCount); 




// Problem-03

function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

// Example
const palindromeCheck = isPalindrome("madam");
// console.log(palindromeCheck); 





// Problem-04


function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// Example
const maxValue = findMax([5, 1, 9, 3]);
// console.log(maxValue); 






// Problem-05


function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

// Example

const ArrayWithDuplicates = removeDuplicates([1,2,2,3,4,5]);
// console.log(ArrayWithDuplicates)



// Problem-06

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

// Example
const result = sumArray([1, 2, 3, 4]);
// console.log(result);




// Problem-07


function findEvenNumbers(arr) {
  let evens = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }

  return evens;
}

// Example
const evenNumbers = findEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(evenNumbers); 



// Problem-08

function capitalizeWords(str) {
  let words = str.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalized =
      word.charAt(0).toUpperCase() + word.slice(1);

    result += capitalized;

    if (i < words.length - 1) {
      result += " ";
    }
  }

  return result;
}

// Example

const capitalizedString = capitalizeWords("hello world");

// console.log(capitalizedString);



// Problem-09

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}

// Example
const inputNumber = factorial(5);

// console.log(inputNumber); 




// Problem-10


function pingPong() {
  let result = [];

  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("PingPong");
    } else if (i % 3 === 0) {
      result.push("Ping");
    } else if (i % 5 === 0) {
      result.push("Pong");
    } else {
      result.push(i);
    }
  }

  console.log(result.join(", "));
}

// Run the function

// pingPong();


