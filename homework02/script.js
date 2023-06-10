let N = Math.round(parseFloat(prompt('Set start value', '')));
while (isNaN(N)) {
	N = Math.round(parseFloat(prompt('Set start value', '')));
}
let M = Math.round(parseFloat(prompt('Set end value', '')));
while (isNaN(M)) {
	M = Math.round(parseFloat(prompt('Set end value', '')));
}
let skipEven = confirm('Skip even numbers?');
let result = 0;

for (let i = N; i <= M; i++) {
	if (skipEven && i % 2 === 0) {
		continue;
	}
	result += i;
}
document.writeln('The result: ', result, '!')
console.log('The result: ', result, '!')