/*
 * 11 JavaScript functions requiring functions, console.assert, selection, repetition,
 * strings, and arrays. The code contains a few asserts to shw the syntax.  You should add
 * many more asserts to tests. It is important to be able to write your own tests.
 */

// 1) howSwedish
// ABBA is a band, they have many songs including Dancing Queen, and
// Fernando. ABBA is actually a Swedish band, so if we wanted to find
// out howSwedish a String is, we could simply find out how many times
// the String contains the substring "abba". We want to look for this
// substring in a case insensitive manner. So "abba" counts, and so
// does "aBbA". We also want to check for overlapping abba's such as
// in the String "abbAbba" that contains "abba" twice.
//
// howSwedish("AbBa a b b a") returns 1
// howSwedish("abbabba!") returns 2

function howSwedish(str) {
  var counter = 0;
  const substr = "abba";
  const formattedInput = str.toLowerCase();
  //When you find "abba" move position to the next available "a" because it may be considered
  // the start of a new "abba" substring.
  const offSet = 2;
  //Denotes start of the string
  var position = 0;
  while (formattedInput.indexOf(substr, position) != -1) {
    //There was an abba found!
    position = formattedInput.indexOf(substr, position) + offSet;
    counter++;
  }
  return counter;
}
// The following asserts will fail until howSwedish is fixed
console.assert(0 == howSwedish("no"));
console.assert(1 == howSwedish("axxc AbBa Xx"));
console.assert(2 == howSwedish("abbabba"));
// Add at more test cases
console.assert(2 == howSwedish("abbabba!"));
console.assert(1 == howSwedish("AbBa a b b a"));
console.assert(4 == howSwedish("abBABBABBAF2434ABBa"));

// 2)  mirrorEnds
// Complete method mirrorEnds that given a string, looks for a mirror
// image (backwards) string at both the beginning and end of the given string.
// In other words, zero or more characters at the very beginning of the given
// string, and at the very end of the string in reverse order (possibly overlapping).
// For example, "abXYZba" has the mirror end "ab".
//
// mirrorEnds("") returns ""
// mirrorEnds("abcde") returns ""
// mirrorEnds("a") returns "a"
// mirrorEnds("abca") "a"
// mirrorEnds("abba") returns "abba"
// mirrorEnds("abBa")); returns "a". This is case sensitive 'b' != 'B'

function mirrorEnds(str) {
  var retStr = "";
  if (str.length === 1) return str;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == str.charAt(str.length - 1 - i)) {
      retStr += str.charAt(i);
    } else {
      break;
    }
  }
  return retStr;
}

/*tests */
console.assert("" == mirrorEnds(""));
console.assert("" == mirrorEnds("abcde"));
console.assert("a" == mirrorEnds("a"));
console.assert("abba" == mirrorEnds("abba"));
console.assert("a" == mirrorEnds("abBa"));

// 3) isStringSorted
// Given a String, return true if the letters are in ascending order.
// Note: 'a' < 'b' and '5' < '8'
// isStringSorted("") returns true
// isStringSorted("a") returns true
// isStringSorted("abbcddef") returns true
// isStringSorted("123456") returns true
// isStringSorted("12321") returns false
//http://www.asciitable.com/
/*
    PUNCTUATION < NUMBERS < CAPITAL LETTERS < LOWERCASE LETTERS
    in decimal values for ASCII characters
*/

function isStringSorted(str) {
  /* "" and any single character is sorted*/
  if (str.length < 2) {
    return true;
  }
  var pos = 0;
  var curCharCode;
  var nextCharCode;
  while (pos < str.length) {
    curCharCode = str.charAt(pos).charCodeAt();
    nextCharCode = str.charAt(pos + 1).charCodeAt();
    if (curCharCode > nextCharCode) {
      //The current char is bigger than the next char.. not ascending
      return false;
    }
    pos++;
  }
  return true;

  //   for (var i = 0; i < str.length; i++) {
  //     const curCharCode = str.charAt(i).charCodeAt();
  //     const nextCharCode = str.charAt(i + 1).charCodeAt();
  //     if (str.charAt(i).charCodeAt() < str.charAt(i + 1).charCodeAt()) {
  //       //Its correctly sorted and we can continue
  //     }
  //   }
}

/* Tests */
console.assert(true == isStringSorted(""));
console.assert(true == isStringSorted("a"));
console.assert(true == isStringSorted("abbcddef"));
console.assert(true == isStringSorted("123456"));
console.assert(false == isStringSorted("12321"));
console.assert(false == isStringSorted("ab1"));
console.assert(false == isStringSorted("ACZaD"));

// 4) maxBlock
// Given a string, return the length of the largest "block" in the string.
// A block is a run of adjacent chars that are the same.
// maxBlock("hoopla") returns 2
// maxBlock("abbCCCddBBBxx") returns 3
// maxBlock("") returns 0
// maxBlock("aA") returns 1  This is case sensitive 'a' != 'A'
//
function maxBlock(str) {
  var curStreak = 0;
  var largestStreak = 0;
  var curWord = "";
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === curWord) {
      curStreak++;
    } else {
      curWord = str.charAt(i);
      curStreak = 1;
    }
    if (curStreak > largestStreak) {
      largestStreak = curStreak;
    }
  }
  return largestStreak;
}
/* Tests */
console.assert(2 == maxBlock("hoopla"));
console.assert(3 == maxBlock("abbCCCddBBBxx"));
console.assert(0 == maxBlock(""));
console.assert(1 == maxBlock("aA"));
console.assert(3 == maxBlock("dddOOOohh"));

// 5) isArraySorted
// Given an array , return true if the element are in ascending order.
// Note: 'abe' < 'ben' and 5 > 3
// Precondition arr has all the same type of elements
function isArraySorted(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + i]) {
      //False no longer in ascending order
      return false;
    }
  }
  return true;
}
/* Tests */
console.assert(true == isArraySorted(["aaa", "bbb", "ccc"]));
console.assert(true == isArraySorted(["a", "b", "c"]));
console.assert(true == isArraySorted(["abe", "ben"]));
console.assert(false == isArraySorted([-1, 10, 0]));
console.assert(true == isArraySorted([-1, 0, 10]));

// 6) numberOfPairs
// Return the number of times a pair occurs in array. A pair is any two String values that are equal (case
// sensitive) in consecutive array elements. The array may be empty or have only one element. In both of
// these cases, return 0.
//
// numberOfPairs( ['a', 'b', 'c'] ) returns 0
// numberOfPairs( ['a', 'a', 'a'] ) returns 2
// assert(2 == numberOfPairs( ['a', 'a', 'b', 'b' ]) );
// numberOfPairs( [] ) returns 0
// numberOfPairs( ['a'] ) returns 0
// Precondition: arr has all the same type of elements
function numberOfPairs(arr) {
  var pairCounter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      pairCounter++;
    }
  }
  return pairCounter;
}

/* Tests */
console.assert(0 == numberOfPairs(["a", "b", "c"]));
console.assert(2 == numberOfPairs(["a", "a", "a"]));
console.assert(0 == numberOfPairs([]));
console.assert(0 == numberOfPairs(["a"]));
console.assert(4 == numberOfPairs(["a", "c", "c", "r", "r", "a", "a", "a"]));

// 7) frequency(array)
// Given an  array of integers in the range of 0..10 (like quiz scores),
// return an array of 11 integers where the first value (at index 0) is the
// number of 0s in the array argument, the second value (at index 1) is the number
// of ones in the array and the 11th value (at index 10) is the number of tens in the array.
//
// Precondition: arr has valid ints in the range of 0..10
function frequency(arr) {
  var retArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let elem of arr) {
    switch (elem) {
      case 0:
        retArr[0]++;
        break;
      case 1:
        retArr[1]++;
        break;
      case 2:
        retArr[2]++;
        break;
      case 3:
        retArr[3]++;
        break;
      case 4:
        retArr[4]++;
        break;
      case 5:
        retArr[5]++;
        break;
      case 6:
        retArr[6]++;
        break;
      case 7:
        retArr[7]++;
        break;
      case 8:
        retArr[8]++;
        break;
      case 9:
        retArr[9]++;
        break;
      case 10:
        retArr[10]++;
        break;
    }
  }
  // console.log(retArr);
  return retArr;
}

/* Feel free to use this as one test case for frequency.  If nothing else, these
   assertions hopefully help explain the expected return value.
*/
arr = frequency([0, 3, 3, 8, 8, 8, 8, 10, 10]);
console.assert(1 == arr[0]); // There is one zero in arr
console.assert(0 == arr[1]); // There is no quiz score of 1/10 in arr
console.assert(2 == arr[3]); // There are two 3/10s in arr
console.assert(4 == arr[8]); // There are four 8/10s
console.assert(0 == arr[9]); // There is no quiz score of 9 in arr
console.assert(2 == arr[10]); // There are two 10 of 10s

// 8) shiftNTimes(array, numShifts)
//
// Modify array so it is "left shifted" n times -- so shiftNTimes(array[6, 2, 5, 3], 1)
// changes the array argument to [2, 5, 3, 6] and shiftNTimes([6, 2, 5, 3], 2)
// changes the array argument to [5, 3, 6, 2]. You must modify the array argument by
// changing the parameter named nums inside method shiftNTimes. A change to nums inside
// the method shiftNTimes changes the argument.  Do not return anything.
//
// shiftNTimes([1, 2, 3, 4, 5, 6, 7], 3 ) modifies the array to [4, 5, 6, 7, 1, 2, 3]
// shiftNTimes( [1, 2, 3], 5) modifies the array to [3, 1, 2]
// shiftNTimes( [3], 5) modifies the array to (3)
//
// Precondition: numShifts > 0
// Precondition: integerArray has integers onlt. We do not test for strings or floats.
function shiftNTimes(integerArray, numShifts) {
  while (numShifts) {
    //Take first element off and push on the end
    //while we stil have shifts left
    var shiftedIndex = integerArray.shift();
    integerArray.push(shiftedIndex);
    numShifts--;
  }
}

/* Tests; can't really use assert since there is no return value */
var arr1, arr2, arr3, arr4, arr5;
arr1 = [1, 2, 3, 4, 5, 6, 7];
shiftNTimes(arr1, 3);
console.log(arr1); //Should return [4, 5, 6, 7, 1, 2, 3]

arr2 = [6, 2, 5, 3];
shiftNTimes(arr2, 1);
console.log(arr2); //Should return [2, 5, 3, 6]

arr3 = [6, 2, 5, 3];
shiftNTimes(arr3, 2);
console.log(arr3); //Should return [5, 3, 6, 2]

arr4 = [1, 2, 3];
shiftNTimes(arr4, 5);
console.log(arr4); //Should return [3, 1, 2]

arr5 = [3];
shiftNTimes(arr5, 3);
console.log(arr5); //Should return [3]

// 9) addToSet
// Complete method addToSet(set, number) such that number is added
// at the end of the array parameter set only if it does not exist alreay.
//
// Precondition: each argument is alway a number.  No type mixing
function addToSet(set, number) {
  if (set !== null && set.includes(number) == false) {
    set.push(number);
  }
}

set = [];
addToSet(set, 5);
addToSet(set, 4);
addToSet(set, 4);
addToSet(set, 3);
addToSet(set, 3);
addToSet(set, 2);
addToSet(set, 2);
console.assert(5 == set[0]);
console.assert(4 == set[1]);
console.assert(3 == set[2]);
console.assert(2 == set[3]);
console.assert(4 == set.length);

// 10)  Say that a "clump" in an array is a series of 2 or more adjacent elements of
// the same value. Return the number of clumps in the given array.
//
//  countClumps( [1, 2, 2, 3, 4, 4 ] ) returns 2
//  countClumps( [1, 1, 2, 1, 1 ] ) returns 2
//  countClumps( [1, 1, 1, 1, 1 ] ) returns 1
//  countClumps( [ 1, 2, 3] ) returns 0
//  countClumps( [ 2 ] returns 0
function countClumps(arr) {
  var clumpCount = 0;
  var counter = 0;
  var curElem = -1;
  for (let elem of arr) {
    console.log(`elem is ${elem}`);
    console.log(`counter is ${counter}`);
    console.log(`curElem is ${curElem}`);
    if (elem != curElem) {
      //Streak over, reset
      console.log("Streak broken");
      counter = 1;
      curElem = elem;
    } else {
      //They are equal the clump continues
      console.log("Matched and incremented counter");
      counter++;
    }
  }
  console.log(clumpCount);
  return clumpCount;
}
// console.assert(0 == countClumps([1, 2, 3]));
// console.assert(1 == countClumps([1, 2, 2, 2, 2, 3]));
//console.assert(2 == countClumps([1, 2, 2, 3, 4, 4]));
// console.assert(1 == countClumps( [1, 1, 1, 1, 1 ] ) );
// console.assert(0 == countClumps( [ 1, 2, 3] ));
// console.assert(0 == [ 2 ] );

// 11) evenOdd(array)
//
// Modify array that contains the exact same numbers as the given array,
// but rearranged so that all the even numbers come before all the odd numbers.
//  Other than that, the numbers can be in any order.
//
// evenOdd([1, 0, 1, 0, 0, 1, 1]) changes the argument to [0, 0, 0, 1, 1, 1, 1]
// evenOdd([3, 3, 2]) changes the argument to [2, 3, 3]
// evenOdd([3, 5, 4, 2]) changes the argument to [2, 4, 3, 5] or [4, 2, 3, 5]
// or [2, 4, 5, 3] or [4, 2, 5, 3]
//
// Precondition: All array elements are integers, whole nmbers with no fractional part
function evenOdd(array) {
  var temp = 0;
  var leftPointer = array.length - 1;
  var rightPointer = 0;
  for(var i = 0; i<array.length; i++){
    //If cur index is even...
    if(array[i] % 2 ===0){
        //Return if this is the only element
        if( rightPointer > leftPointer){
          return nums;
        }else{
          //Store the current
          temp = array[rightPointer];
          //Assign current pos to even value
          array[rightPointer] = array[i];
          //Assign temp to current loop position 
          array[i] = temp;
          //Move over position once swapped 
          rightPointer++;
        }

    }
  }
  console.log(array);
  return array;
}
 var array = [3, 2, 3, 2];
 evenOdd(array);
 console.assert(array[0] == 2);
 console.assert(array[1] == 2);
 console.assert(array[2] == 3);
 console.assert(array[3] == 3);

