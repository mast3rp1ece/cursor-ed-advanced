let N = parseFloat(prompt('Set start value', ''));
while (isNaN(N) || !Number.isInteger(N) || N <= 0) {
	N = parseFloat(prompt('Set start value', ''));
}

let M = parseFloat(prompt('Set end value', ''));
while (isNaN(M) || !Number.isInteger(M) || M <= N) {
	M = parseFloat(prompt('Set end value', ''));
}

let skipEven = confirm('Skip even numbers?');
let result = 0;

for (let i = N; i <= M; i++) {
	if (skipEven && i % 2 === 0) {
		continue;
	}
	result += i;
}

document.writeln('The result: ', result, '!');
console.log('The result: ', result, '!');