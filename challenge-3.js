// Challenge 3
// Create a function called map that takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
// map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
// multiplyByTwo(1); //-> 2
// multiplyByTwo(2); //-> 4

function addTwo(num) {
	return num + 2;
}

function map(array, callback) {
	const output = [];
//   loop through the array
  for (let i = 0; i < array.length; i++) {
    //   applying the callback function on each element of the array
    output.push(callback(array[i]));
  }
  return output;
}

// const multiplyByTwo = input => input * 2;
console.log(map([1, 2, 3], addTwo));
