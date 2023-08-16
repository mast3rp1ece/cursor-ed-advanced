export function getRandomChinese(length) {
	return new Promise((resolve) => {
		let result = "";
		const generateChar = () => {
			const sing = Date.now().toString().slice(-5);
			const char = String.fromCharCode(sing);
			result += char;
			if (result.length < length) {
				setTimeout(generateChar, 50);
			} else {
				resolve(result);
			}
		};
		generateChar();
	});
}