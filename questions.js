// You should see an error in Chrome's Console
console.assert(4 == 8);

/*
 * 12 JavaScript functions requiring functions, console.assert, selection, repetition,
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
  // TODO: Complete this method
  // Use str.length()
  // Use + for concatenation
  // Use var to declare variables
  return 0;
}
// The following asserts will fail until howSwedish is fixed
// console.assert ( 0 == howSwedish ( 'no' ) );
// console.assert ( 1 == howSwedish ( 'axxc AbBa Xx' ) );
console.assert(2 == howSwedish("abbabba"));
// Add at more test cases

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
//
function mirrorEnds(str) {
  // TODO: Complete this method
  return "tba";
}

// 3) isStringSorted
// Given a String, return true if the letters are in ascending order.
// Note: 'a' < 'b' and '5' < '8'
// isStringSorted("") returns true
// isStringSorted("a") returns true
// isStringSorted("abbcddef") returns true
// isStringSorted("123456") returns true
// isStringSorted("12321") returns false
//
function isStringSorted(str) {
  // TODO: Complete this method
  return !true;
}

// 4) maxBlock
// Given a string, return the length of the largest "block" in the string.
// A block is a run of adjacent chars that are the same.
// maxBlock("hoopla") returns 2
// maxBlock("abbCCCddBBBxx") returns 3
// maxBlock("") returns 0
// maxBlock("aA") returns 1  This is case sensitive 'a' != 'A'
//
function maxBlock(str) {
  // TODO: Complete this method
  return -999;
}

// 5) isArraySorted
// Given an array , return true if the element are in ascending order.
// Note: 'abe' < 'ben' and 5 > 3
// Precondition arr has all the same type of elements
function isArraySorted(arr) {
  // TODO: Complete this method
  return !true;
}

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
  // TODO: Complete this method
  return -999;
}

// 7) frequency(array)
// Given an  array of integers in the range of 0..10 (like quiz scores),
// return an array of 11 integers where the first value (at index 0) is the
// number of 0s in the array argument, the second value (at index 1) is the number
// of ones in the array and the 11th value (at index 10) is the number of tens in the array.
//
// Precondition: arr has valid ints in the range of 0..10
function frequency(arr) {
  // TODO: Complete this method
  return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

/* Feel free to use this as one test case for frequency.  If nothing else, these
   assertions hopefully help explain the expected return value.
   
arr = frequency([ 0, 3, 3, 8, 8, 8, 8, 10, 10 ]);
console.assert(1 == arr[0]);  // There is one zero in arr
console.assert(0 == arr[1]);  // There is no quiz score of 1/10 in arr
console.assert(2 == arr[3]);  // There are two 3/10s in arr
console.assert(4 == arr[8]);  // There are four 8/10s
console.assert(0 == arr[9]);  // There is no quiz score of 9 in arr
console.assert(2 == arr[10]); // There are two 10 of 10s
*/

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
  // TODO: Complete this method.  Modify integerArray here, do not return anything.
}

// 9) addToSet
// Complete method addToSet(set, number) such that number is added
// at the end of the array parameter set only if it does not exist alreay.
//
// Precondition: each argument is alway a number.  No type mixing
function addToSet(set, number) {
  // TODO: Complete this method. Modify set here, do not return anything.
}
/*
set = [];
addToSet(set, 5)
addToSet(set, 4)
addToSet(set, 4)
addToSet(set, 3)
addToSet(set, 3)
addToSet(set, 2)
addToSet(set, 2)
console.assert(5 == set[0]);
console.assert(4 == set[1]);
console.assert(3 == set[2]);
console.assert(2 == set[3]);
console.assert(4 == set.length);
*/

// 10)  Say that a "clump" in an array is a series of 2 or more adjacent elements of
// the same value. Return the number of clumps in the given array.
//
//  countClumps( [1, 2, 2, 3, 4, 4 ] ) returns 2
//  countClumps( [1, 1, 2, 1, 1 ] ) returns 2
//  countClumps( [1, 1, 1, 1, 1 ] ) returns 1
//  countClumps( [ 1, 2, 3] ) returns 0
//  countClumps( [ 2 ] returns 0
function countClumps(arr) {
  // TODO: Complete this function
  return -999;
}
// console.assert(0 == countClumps[ 1, 2, 3]);
// console.assert(1 == countClumps[ 1, 2, 2, 2, 2, 3]);

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
  // TODO: Complete this function
}
/* // var array = [3, 2, 3, 2];
// evenOdd(array);
// console.assert(array[0] == 2);
// console.assert(array[1] == 2);
// console.assert(array[2] == 3);
// console.assert(array[3] == 3);
*/
