function getRandomChinese(lenght) {
	return new Promise((resolve) => {
		let result = "";
		let count = 0;
		const generateCharacter = () => {
			const sing = String.fromCharCode(Math.floor(Math.random() * (65536 - 19968) + 19968));
			result += sing;
			count++;
			if (count === lenght) {
				resolve(result);
			} else {
				setTimeout(generateCharacter, 50);
			}
		};
		generateCharacter();
	});
}
getRandomChinese(4).then((resutl) => {
	console.log(resutl);
});