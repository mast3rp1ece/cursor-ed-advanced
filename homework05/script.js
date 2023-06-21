// 
function getRandomArray(length, min, max) {
	let array = [];
	for (let i = 0; i < length; i++) {
		let randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
		array.push(randomNumber);
	}
	return array;
}
const result1 = getRandomArray(15, 1, 100);
console.log('Function 1: ', result1);
//
function getAverage(...numbers) {
	let sum = numbers.reduce(function(acc, number) {
		return acc + number;
	}, 0);
	let average = sum / numbers.length;
	return average;
}
const result3 = getAverage(5, 69, 51, 2, 44, 6, 3, 2, 100, 78, 5)
console.log('Function 3: ', result3); 
//
function getMedian(...numbers) {
	let = sortedNumbers = numbers.filter(function(number) {
		return typeof number === 'number';
	}).sort(function(a, b) {
		return a - b;
	});
	let median;
	let middleIndex = Math.floor(sortedNumbers.length / 2);
	if (sortedNumbers.length % 2 === 0) {
		median = (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
	} else {
		median = sortedNumbers[middleIndex];
	}
	return median;
}
const result4 = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log('Function 4: ', result4);
//
function filterEvenNumbers(...numbers) {
	let filteredNumbers = numbers.filter(function(number) { 
		return number % 2 !== 0;
	});
	return filteredNumbers;
}
const result5 = filterEvenNumbers(5, 35, 4, 66, 80, 12, 11);
console.log('Function 5: ', result5);
//
function countPositiveNumbers(...numbers) {
	let count = 0;
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > 0) {
			count++;
		}
	}
	return count;
}
const result6 = countPositiveNumbers(1, 52, -1, -63, 6, 889, -147, 5, 89);
console.log('Function 6: ', result6);
// 
function getDividedByFive(...numbers) {
	let filteredNumbers7 = numbers.filter(function(number) {
		return number % 5 === 0;
	});
	return filteredNumbers7;
}
let = result7 = getDividedByFive(7, 60, 5, 110, 36, 100, 40, 36, 98, 60, 5, 3, 1, 33, 111);
console.log('Function 7: ', result7);
// 

