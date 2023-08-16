export function* createIdGenerator() {
	let id = 1;
	while (true) {
	  yield id;
	  id++;
	}
}

export function generateId(idGenerator, idDisplay) {
	const nextId = idGenerator.next().value;
	idDisplay.textContent = 'ID: ' + nextId;
}

export function* newFontGenerator(startSize) {
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

export function fontUp(fontGenerator, textToChange) {
	const nextSize = fontGenerator.next("up").value;
	textToChange.style.fontSize = nextSize + "px";
}
export function fontDown(fontGenerator, textToChange) {
	const nextSize = fontGenerator.next("down").value;
	textToChange.style.fontSize = nextSize + "px";
}
