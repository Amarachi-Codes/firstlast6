// String-1 -- firstTwo
// Given a string, return the string made of its first two chars, so the String "Hello" yields "He". 
// If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty 
// string "" yields the empty string "". Note that str.length() returns the length of a string.

// Examples

// firstTwo('Hello') → He
// firstTwo('abcdefg') → ab
// firstTwo('ab') → ab

function firstTwo(str){
    if(str.length < 2){
    return str.charAt(0)
    }if(str.length >= 2){
    return str.charAt(0) + str.charAt(1)
    }
  }

  function sum(a,b){
    return a+ b;
  }
  console.log(sum(1,' 2'));