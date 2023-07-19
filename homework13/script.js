function* createIdGenerator() {
	let id = 1;
	while (true) {
	  yield id;
	  id++;
	}
}

const idGenerator = createIdGenerator();
const generateButton = document.getElementById('generateButton');
const idDisplay = document.getElementById('idDisplay');

function generateId() {
	const nextId = idGenerator.next().value;
	idDisplay.textContent = 'ID: ' + nextId;
}

generateButton.addEventListener('click', generateId);
////////////////////////////////////////////

function* newFontGenerator(startSize) {
	let fontSize = startSize;
	while (true) {
		const direction = yield fontSize;
		if (direction === "up") {
			fontSize += 2;
		} else if (direction === "down") {
			fontSize -= 2;
		}
	}
}

const fontGenerator = newFontGenerator(25);
const upButton = document.getElementById('upButton');
const downButton = document.getElementById('downButton');
const textToChange = document.getElementById('idDisplay');

function fontUp() {
	const nextSize = fontGenerator.next("up").value;
	textToChange.style.fontSize = nextSize + "px";
}
function fontDown() {
	const nextSize = fontGenerator.next("down").value;
	textToChange.style.fontSize = nextSize + "px";
}

upButton.addEventListener('click', fontUp);
downButton.addEventListener('click', fontDown);