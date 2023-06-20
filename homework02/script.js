let N = '';
while (isNaN(N) || !Number.isInteger(parseFloat(N)) || N <= 0 || N.includes(',')) {
  N = prompt('Set start value', '');
}

let M = '';
while (isNaN(M) || !Number.isInteger(parseFloat(M)) || M <= N || M.includes(',')) {
  M = prompt('Set end value', '');
}

let skipEven = confirm('Skip even numbers?');
let result = 0;

for (let i = parseInt(N); i <= parseInt(M); i++) {
	if (skipEven && i % 2 === 0) {
	  continue;
	}
	result += i;
 }

document.writeln('The result: ', result, '!');
console.log('The result: ', result, '!');