// In challenge 3, you've created a function called map. 
// In this challenge, you're going to rebuild the map function by creating a function called mapWith. 
// This time you're going to use forEach inside of mapWith instead of using a for loop.

function addTwo(num) {
	return num + 2;
}

function mapWith(array, callback) {
	const output = [];
  forEach(array, element => output.push(callback(element)));
  return output;
  
}
console.log(mapWith([1, 2, 3], addTwo));