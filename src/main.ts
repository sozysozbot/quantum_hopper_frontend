type Coord = [0 | 1 | 2 | 3 | 4, 0 | 1 | 2 | 3 | 4];

const makeLilyPadAt = ([x, y]: Coord, angle: number) => {
	const path = document.createElementNS('http://www.w3.org/2000/svg', "path");

	path.setAttribute("transform", `
	translate(${OUTER_PADDING + SPACING_CONSTANT * x} ${OUTER_PADDING + SPACING_CONSTANT * y})
	scale(${LILYPAD_RADIUS / 13})
	rotate(${angle})
	`);
	path.setAttribute('fill', '#66c810');
	path.setAttribute("d", "m -13 0 a 13 13 0 0 0 25 5 a 5 5 0 0 1 0 -10 a 13 13 0 0 0 -25 5");
	return path
}

const makeGuidingLine = ([x1, y1]: Coord, [x2, y2]: Coord) => {
	const line = document.createElementNS('http://www.w3.org/2000/svg', "line");
	line.setAttribute("x1", `${OUTER_PADDING + SPACING_CONSTANT * x1}`);
	line.setAttribute("y1", `${OUTER_PADDING + SPACING_CONSTANT * y1}`);
	line.setAttribute('stroke', '#b4dded');
	line.setAttribute("x2", `${OUTER_PADDING + SPACING_CONSTANT * x2}`);
	line.setAttribute("y2", `${OUTER_PADDING + SPACING_CONSTANT * y2}`);
	return line;
}

const SPACING_CONSTANT = 40;
const OUTER_PADDING = 30;
const LILYPAD_RADIUS = 25;
const FROG_RADIUS = 10;

const createBackground = () => {
	const g = document.createElementNS('http://www.w3.org/2000/svg', "g");
	const pond_water = document.createElementNS('http://www.w3.org/2000/svg', "rect");
	pond_water.setAttribute("width", `${OUTER_PADDING * 2 + SPACING_CONSTANT * 4}`)
	pond_water.setAttribute("height", `${OUTER_PADDING * 2 + SPACING_CONSTANT * 4}`)
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

type Frog = { coord: Coord, prob: number, color: string };

const frogImg = () => {
	const frog = document.createElementNS('http://www.w3.org/2000/svg', "g");
	frog.setAttribute("transform", `
			scale(1, 1.5)
			scale(${FROG_RADIUS / 10})`);

	const frog_bg = document.createElementNS('http://www.w3.org/2000/svg', "path");
	frog_bg.setAttribute('fill', '#49692d');
	frog_bg.setAttribute("d", "m -10 0 C -10 7 10 7 10 0 C 10 -2 9 -3 6 -4 C 7 -7 3 -8 2 -5 C 1 -6 -1 -6 -2 -5 C -3 -8 -7 -7 -6 -4 C -9 -3 -10 -2 -10 0");

	const frog_eye = document.createElementNS('http://www.w3.org/2000/svg', "circle");
	frog_eye.setAttribute("fill", "#000000");
	frog_eye.setAttribute("cx", "4.5");
	frog_eye.setAttribute("cy", "-4");
	frog_eye.setAttribute("r", "1");


	const frog_eye2 = document.createElementNS('http://www.w3.org/2000/svg', "circle");
	frog_eye2.setAttribute("fill", "#000000");
	frog_eye2.setAttribute("cx", "-4.5");
	frog_eye2.setAttribute("cy", "-4");
	frog_eye2.setAttribute("r", "1");

	const frog_eye3 = document.createElementNS('http://www.w3.org/2000/svg', "circle");
	frog_eye3.setAttribute("fill", "#FFA500");
	frog_eye3.setAttribute("cx", "4");
	frog_eye3.setAttribute("cy", "-4");
	frog_eye3.setAttribute("r", "2");


	const frog_eye4 = document.createElementNS('http://www.w3.org/2000/svg', "circle");
	frog_eye4.setAttribute("fill", "#FFA500");
	frog_eye4.setAttribute("cx", "-4");
	frog_eye4.setAttribute("cy", "-4");
	frog_eye4.setAttribute("r", "2");

	const frog_mouth = document.createElementNS('http://www.w3.org/2000/svg', "path");
	frog_mouth.setAttribute('stroke', '#000000');
	frog_mouth.setAttribute('fill', 'transparent');
	frog_mouth.setAttribute("d", "m-7 0C-3 3 3 3 7 0");


	frog.appendChild(frog_bg);
	frog.appendChild(frog_eye3);
	frog.appendChild(frog_eye4);
	frog.appendChild(frog_eye);
	frog.appendChild(frog_eye2);
	frog.appendChild(frog_mouth);
	return frog;
}

const drawFrogs = (fs: Frog[]) => {
	const frogs = document.createElementNS('http://www.w3.org/2000/svg', "g");
	for (const f of fs) {
		const frog = document.createElementNS('http://www.w3.org/2000/svg', "g");
		frog.setAttribute("transform", `translate(${OUTER_PADDING + SPACING_CONSTANT * f.coord[0]} ${OUTER_PADDING + SPACING_CONSTANT * f.coord[1]})`);
		if (f.prob != 1) {
			const FROG_PROB_RADIUS = 13;
			const frog_prob = document.createElementNS('http://www.w3.org/2000/svg', "path");
			frog_prob.setAttribute('fill', "transparent");
			frog_prob.setAttribute('stroke', f.color);
			frog_prob.setAttribute("d", `m ${FROG_PROB_RADIUS} 0 A ${FROG_PROB_RADIUS} ${FROG_PROB_RADIUS} 0 0 0 ${(FROG_PROB_RADIUS * Math.cos(Math.PI * 2 * f.prob)).toFixed(2)} ${(FROG_PROB_RADIUS * Math.sin(Math.PI * 2 * f.prob)).toFixed(2)}`)
			frog_prob.setAttribute("stroke-width", "3");
			frog.appendChild(frog_prob);
		}
		frog.appendChild(frogImg());

		frogs.appendChild(frog);
	}
	return frogs;
}

const main = () => {
	const background = createBackground();
	document.getElementById("board")!.innerHTML = ""; // clear
	document.getElementById("board")!.appendChild(background);
	const frogs = drawFrogs([
		{ coord: [0, 2], prob: 1, color: "transparent" },
		{ coord: [0, 4], prob: 0.5, color: "#5242aa" },
		{ coord: [1, 3], prob: 1, color: "transparent" },
		{ coord: [2, 2], prob: 0.5, color: "#5242aa" },
		{ coord: [2, 4], prob: 0.5, color: "#aa5242" },
		{ coord: [3, 3], prob: 0.5, color: "#aa5242" },
	]);
	document.getElementById("board")!.appendChild(frogs);

}