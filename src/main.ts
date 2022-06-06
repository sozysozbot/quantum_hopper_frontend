type Coord = [0 | 1 | 2 | 3 | 4, 0 | 1 | 2 | 3 | 4];

const makeLilyPadAt = ([x, y]: Coord, angle: number) => {

	const g = document.createElementNS('http://www.w3.org/2000/svg', "g");
	g.setAttribute("transform", `
	translate(${PADDING + SPACING_CONSTANT * x} ${PADDING + SPACING_CONSTANT * y})
	scale(${LILYPAD_RADIUS / 13})
	rotate(${angle})
	`);
	const path = document.createElementNS('http://www.w3.org/2000/svg', "path");
	path.setAttribute('fill', '#66c810');
	path.setAttribute("d", "m -13 0 a 13 13 0 0 0 25 5 a 5 5 0 0 1 0 -10 a 13 13 0 0 0 -25 5");
	g.appendChild(path);
	return g;
}

const makeGuidingLine = ([x1, y1]: Coord, [x2, y2]: Coord) => {
	const line = document.createElementNS('http://www.w3.org/2000/svg', "line");
	line.setAttribute("x1", `${PADDING + SPACING_CONSTANT * x1}`);
	line.setAttribute("y1", `${PADDING + SPACING_CONSTANT * y1}`);
	line.setAttribute('stroke', '#b4dded');
	line.setAttribute("x2", `${PADDING + SPACING_CONSTANT * x2}`);
	line.setAttribute("y2", `${PADDING + SPACING_CONSTANT * y2}`);
	return line;
}

const SPACING_CONSTANT = 30;
const PADDING = 30;
const LILYPAD_RADIUS = 15;
const FROG_RADIUS = 12;

const createBackground = () => {
	const g = document.createElementNS('http://www.w3.org/2000/svg', "g");
	const pond_water = document.createElementNS('http://www.w3.org/2000/svg', "rect");
	pond_water.setAttribute("width", `${PADDING * 2 + SPACING_CONSTANT * 4}`)
	pond_water.setAttribute("height", `${PADDING * 2 + SPACING_CONSTANT * 4}`)
	pond_water.setAttribute("fill", `#01a4e7`)

	g.appendChild(pond_water);
	g.appendChild(makeGuidingLine([0, 0], [4, 0]));
	g.appendChild(makeGuidingLine([0, 2], [4, 2]));
	g.appendChild(makeGuidingLine([0, 4], [4, 4]));
	g.appendChild(makeGuidingLine([0, 0], [0, 4]));
	g.appendChild(makeGuidingLine([2, 0], [2, 4]));
	g.appendChild(makeGuidingLine([4, 0], [4, 4]));
	g.appendChild(makeGuidingLine([0, 0], [4, 4]));
	g.appendChild(makeGuidingLine([0, 4], [4, 0]));
	g.appendChild(makeGuidingLine([0, 2], [2, 0]));
	g.appendChild(makeGuidingLine([4, 2], [2, 0]));
	g.appendChild(makeGuidingLine([0, 2], [2, 4]));
	g.appendChild(makeGuidingLine([4, 2], [2, 4]));
	g.appendChild(makeLilyPadAt([0, 0], -60)); // a1
	g.appendChild(makeLilyPadAt([2, 0], -60)); // b1
	g.appendChild(makeLilyPadAt([4, 0], 90)); // a2
	g.appendChild(makeLilyPadAt([1, 1], 180)); // c1
	g.appendChild(makeLilyPadAt([3, 1], 90)); // d1
	g.appendChild(makeLilyPadAt([0, 2], 120)); // b4
	g.appendChild(makeLilyPadAt([2, 2], -120)); // a0
	g.appendChild(makeLilyPadAt([4, 2], -60)); // b2
	g.appendChild(makeLilyPadAt([1, 3], 90)); // d2
	g.appendChild(makeLilyPadAt([3, 3], 180)); // c2
	g.appendChild(makeLilyPadAt([0, 4], 120)); // a4
	g.appendChild(makeLilyPadAt([2, 4], 90)); // b3
	g.appendChild(makeLilyPadAt([4, 4], -60)); // a3
	return g;
}

const drawFrogs = (cs: Coord[]) => {
	const g = document.createElementNS('http://www.w3.org/2000/svg', "g");

	for (const c of cs) {
		const path = document.createElementNS('http://www.w3.org/2000/svg', "circle");
		path.setAttribute("cx", `${PADDING + SPACING_CONSTANT * c[0]}`);
		path.setAttribute('fill', '#49692d');
		path.setAttribute("cy", `${PADDING + SPACING_CONSTANT * c[1]}`);
		path.setAttribute("r", `${FROG_RADIUS}`);
		g.appendChild(path);
	}
	return g;
}

const main = () => {
	const background = createBackground();
	document.getElementById("board")!.innerHTML = ""; // clear
	document.getElementById("board")!.appendChild(background);
	const frogs = drawFrogs([[0, 0], [2, 0], [4, 2], [2, 4]]);
	document.getElementById("board")!.appendChild(frogs);

}