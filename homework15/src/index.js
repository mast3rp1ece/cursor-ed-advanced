import { createIdGenerator, generateId, newFontGenerator, fontUp, fontDown } from "./prev/hw13";
import { getRandomChinese } from "./prev/hw11";
import "./hw13.css";
//////////////////////////////
const idGenerator = createIdGenerator();
const generateButton = document.getElementById('generateButton');
const idDisplay = document.getElementById('idDisplay');
generateButton.addEventListener('click', () => generateId(idGenerator, idDisplay));
const fontGenerator = newFontGenerator(25);
const upButton = document.getElementById('upButton');
const downButton = document.getElementById('downButton');
const textToChange = document.getElementById('idDisplay');
upButton.addEventListener('click', () => fontUp(fontGenerator, textToChange));
downButton.addEventListener('click', () => fontDown(fontGenerator, textToChange));
////////////////////////////////

getRandomChinese(4).then((resutl) => {
	console.log('Homework 11: ', resutl);
}).catch((error) => {
	console.log(error);
});