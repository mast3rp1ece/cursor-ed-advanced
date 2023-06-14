/* Створити функцію, яка рахує скільки разів певна буква повторюється в слові.*/
function countLetter (wrd, letter) {
	let count = 0;
	const lowerCaseWord = wrd.toLowerCase();
	const lowerCaseLetter = letter.toLowerCase();

	for (let i = 0; i < lowerCaseWord.length; i++) {
		if (lowerCaseWord[i] === lowerCaseLetter) {
			count++;
		}
	}
	return count;
}
////////////////////////////////////////////////


/* Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.*/
function getMaxDigit (number) {
	let maxDigit = 0;
	const numberToString = number.toString();

	for (let i = 0; i < numberToString.length; i++) {
		const digit = parseInt(numberToString[i]);
		if (digit > maxDigit) {
			maxDigit = digit;
		}
	}
	return maxDigit;
}
/////////////////////////////////////////

/* Створити функцію, яка форматує ім'я, роблячи першу букву великою.*/
function formatName (name) {
	const lowerCaseName = name.toLowerCase();
	const formattedName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);
	return formattedName;
}
///////////////////////////////////////////////////////////

/* Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.*/
function deleteDuplicateLetter (sentence) {
	const lowerCaseSentence = sentence.toLowerCase();
	let result = '';

	for (let i = 0; i < lowerCaseSentence.length; i++) {
		const currentChar = lowerCaseSentence[i];
		if (lowerCaseSentence.indexOf(currentChar) === lowerCaseSentence.lastIndexOf(currentChar)) {
			result += sentence[i];
		}
	}
	return result;
}
////////////////////////////////////////////////

/* Створіть функцію, яка видаляє всі букви з речення.*/
function deleteLetters (letter, sentence) {
	const regex = new RegExp(letter, 'gi');
	const resultDeletedLetter = sentence.replace(regex, '');
	return resultDeletedLetter;
}
/////////////////////////////////////////////////////////

/* Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.*/
function getRandomNumber (N, M) {
	const min = Math.ceil(N);
	const max = Math.floor(M);
	const randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
	return randomNumber;
}
////////////////////////////////////////////////////////////




console.log('The numbers of letter is: ', countLetter('Animals', 'a'));
console.log('The max number is: ',getMaxDigit(1234567890));
console.log('Formated name is: ', formatName('taRaS'));
console.log('The result with deleted dublicate letters is: ', deleteDuplicateLetter('Hello Cursor!'));
console.log('The result with deleted letters is: ', deleteLetters('b', 'BlaBlaBlA'));
console.log('The random number is: ', getRandomNumber(1, 10));

document.writeln('The numbers of letter is: ', countLetter('Animals', 'a'));
document.writeln('The max number is: ',getMaxDigit(1234567890));
document.writeln('Formated name is: ', formatName('taRaS'));
document.writeln('The result with deleted dublicate letters is: ', deleteDuplicateLetter('Hello Cursor!'));
document.writeln('The result with deleted letters is: ', deleteLetters('b', 'BlaBlaBlA'));
document.writeln('The random number is: ', getRandomNumber(1, 10));