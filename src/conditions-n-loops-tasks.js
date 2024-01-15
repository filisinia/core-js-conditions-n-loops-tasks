/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let res = a;

  if (b > res) {
    res = b;
  }
  if (c > res) {
    res = c;
  }

  return res;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (!a || !b || !c) return false;

  if (a === b && a + b > c) {
    return true;
  }
  if (b === c && b + c > a) {
    return true;
  }
  if (c === a && c + a > b) {
    return true;
  }

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let numToConvert = num;
  let res = '';

  const romanNum = ['X', 'IX', 'VI', 'V', 'IV', 'I'];
  const values = [10, 9, 6, 5, 4, 1];

  for (let i = 0; i < romanNum.length; i += 1) {
    while (numToConvert >= values[i]) {
      res += romanNum[i];
      numToConvert -= values[i];
    }
  }

  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        res += 'minus';
        break;
      case '+':
        res += 'plus';
        break;
      case ',':
      case '.':
        res += 'point';
        break;
      case '1':
        res += 'one';
        break;
      case '2':
        res += 'two';
        break;
      case '3':
        res += 'three';
        break;
      case '4':
        res += 'four';
        break;
      case '5':
        res += 'five';
        break;
      case '6':
        res += 'six';
        break;
      case '7':
        res += 'seven';
        break;
      case '8':
        res += 'eight';
        break;
      case '9':
        res += 'nine';
        break;
      case '0':
        res += 'zero';
        break;
      default:
        res += '';
    }
    if (numberStr.length > 1 && i !== numberStr.length - 1) res += ' ';
  }

  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let res;

  for (let i = 0; i < str.length / 2; i += 1) {
    res = str[i] === str[str.length - i - 1];
    if (!res) break;
  }

  return res;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = -1;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) index = i;
  }

  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let res = false;
  const str = String(num);

  for (let i = 0; i < str.length; i += 1) {
    if (+str[i] === digit) {
      res = true;
      break;
    }
  }

  return res;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let res = -1;
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    rightSum += arr[i];
  }

  for (let i = 0; i < arr.length; i += 1) {
    rightSum -= arr[i];

    if (leftSum === rightSum) {
      res = i;
      break;
    }

    leftSum += arr[i];
  }

  return res;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [i=1 i=2 i=3
 *          [1, 2, 3], j = 1
 *  3  =>   [8, 9, 4], j = 2
 *          [7, 6, 5]  j = 3
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }

  let value = 1;
  let startRow = 0;
  let endRow = size - 1;
  let startColumn = 0;
  let endColumn = size - 1;

  while (startRow <= endRow && startColumn <= endColumn) {
    for (let i = startColumn; i <= endColumn; i += 1) {
      matrix[startRow][i] = value;
      value += 1;
    }
    startRow += 1;

    for (let i = startRow; i <= endRow; i += 1) {
      matrix[i][endColumn] = value;
      value += 1;
    }
    endColumn -= 1;

    for (let i = endColumn; i >= startColumn; i -= 1) {
      matrix[endRow][i] = value;
      value += 1;
    }
    endRow -= 1;

    for (let i = endRow; i >= startRow; i -= 1) {
      matrix[i][startColumn] = value;
      value += 1;
    }
    startColumn += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const res = matrix;
  const arr = [];

  for (let i = 0; i < matrix.length; i += 1) {
    arr[i] = [...matrix[i]];
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      res[j][matrix.length - 1 - i] = arr[i][j];
    }
  }

  return res;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const less = [];
  let lessIndex = 0;
  const middle = [];
  let middleIndex = 0;
  const greater = [];
  let greaterIndex = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > pivot) {
      greater[greaterIndex] = arr[i];
      greaterIndex += 1;
    } else if (arr[i] < pivot) {
      less[lessIndex] = arr[i];
      lessIndex += 1;
    } else if (arr[i] === pivot) {
      middle[middleIndex] = arr[i];
      middleIndex += 1;
    }
  }

  const sorted = [...sortByAsc(less), ...middle, ...sortByAsc(greater)];
  const res = arr;
  for (let i = 0; i < res.length; i += 1) {
    res[i] = sorted[i];
  }
  return res;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let res = str;

  for (let i = 1; i <= iterations; i += 1) {
    let oddElems = '';
    let evenElems = '';

    for (let j = 0; j < res.length; j += 2) {
      evenElems += res[j];
      oddElems += res[j + 1];
    }

    res = evenElems + oddElems;
    if (res === str) return shuffleChar(str, iterations % i);
  }

  return res;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let smallest;
  let indexSmallest;
  const strOfDigits = String(number);

  for (let i = strOfDigits.length - 1; i >= 1; i -= 1) {
    if (strOfDigits[i] > strOfDigits[i - 1]) {
      smallest = strOfDigits[i - 1];
      indexSmallest = i - 1;
      break;
    }
  }

  let biggerSmallest;
  let indexBiggerSmallest;

  for (let i = strOfDigits.length - 1; i > indexSmallest; i -= 1) {
    if (
      (!biggerSmallest && strOfDigits[i] > smallest) ||
      strOfDigits[i] < biggerSmallest
    ) {
      biggerSmallest = strOfDigits[i];
      indexBiggerSmallest = i;
    }
  }

  let mixedStrOfDigits = '';

  for (let i = 0; i < strOfDigits.length; i += 1) {
    if (i === indexSmallest) {
      mixedStrOfDigits += strOfDigits[indexBiggerSmallest];
    } else if (i === indexBiggerSmallest) {
      mixedStrOfDigits += strOfDigits[indexSmallest];
    } else {
      mixedStrOfDigits += strOfDigits[i];
    }
  }

  let strToSort = '';

  for (let i = indexSmallest + 1; i < mixedStrOfDigits.length; i += 1) {
    strToSort += mixedStrOfDigits[i];
  }

  function quickSort(str) {
    if (str.length <= 1) return str;

    const pivot = str[0];
    let left = '';
    let right = '';

    for (let i = 1; i < str.length; i += 1) {
      if (str[i] < pivot) {
        left += str[i];
      } else {
        right += str[i];
      }
    }

    return quickSort(left) + pivot + quickSort(right);
  }

  let firstPart = '';

  for (let i = 0; i <= indexSmallest; i += 1) {
    firstPart += mixedStrOfDigits[i];
  }
  return Number(firstPart + quickSort(strToSort));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
