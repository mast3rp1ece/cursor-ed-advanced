function generateBlocks() {
	const container = document.getElementById("container");

	for (let i = 0; i < 25; i++) {
	  const square = document.createElement("div");
	  square.classList.add("square");
	  square.style.backgroundColor = getRandomColor();
 
	  const row = Math.floor(i / 5);
	  let rowContainer = container.querySelector(`#row-${row}`);
 
	  if (!rowContainer) {
		 rowContainer = document.createElement("div");
		 rowContainer.classList.add("row");
		 rowContainer.id = `row-${row}`;
		 container.appendChild(rowContainer);
	  }
 
	  rowContainer.appendChild(square);
	}
}

function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function generateBlocksInterval() {
	generateBlocks();
	setInterval(changeColors, 1000);
}

function changeColors() {
	const squares = document.getElementsByClassName("square");
	for (let i = 0; i < squares.length; i++) {
	  squares[i].style.backgroundColor = getRandomColor();
	}
}

document.getElementById("container").innerHTML = "";
generateBlocksInterval();
