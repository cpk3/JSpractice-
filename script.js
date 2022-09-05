// Javascript Logic Exercise 

/*
  Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
  make a function that organizes these into individual array that is ordered.
  For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2],4,5,10,[20,20],391,392,591].
  Bonus: Make it so it organizes strings differently from number types.
  i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
*/

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]


// sort array into numeric order
const sorted = array.sort((a, b) => a - b);


// create empty array 
const newArray = []

// marker for number of repeated values
let numberOfRepeatValues = 0 

// check elements 1 by 1 - loop
// if i = 1 and copy of i2 = 1, then add a number to the repeated value marker 
// comparing copy of array (index2) to index1 of first array

for (let i=0; i<array.length; i++) {
	for (let i2 = i+1; i2<array.length; i2++) {

		if(array[i] === array[i2]) {
			numberOfRepeatValues++;
		}
	//Sorting the new values into the newArray
			else {
					if (numberOfRepeatValues > 0) {
						newArray.push (new Array[numberOfRepeatValues+1].fill(array[i2]));
					}
						
					else {newArray.push(array[i2]);
					}
						
	// *repeating value marker indicates how many times it matched the same number (need +1 to include the inital value)

			 }

			 return newArray;
	 }
}; 


//return error thrown




// call the sorted array
console.log(sorted(array));


// https://github.com/Osunadev/coding-challenge-6/blob/master/question1.js
