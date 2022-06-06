"use strict";
var makeLilyPadAt = function (_a, angle) {
    var x = _a[0], y = _a[1];
    var g = document.createElementNS('http://www.w3.org/2000/svg', "g");
    g.setAttribute("transform", "\n\ttranslate(" + (PADDING + SPACING_CONSTANT * x) + " " + (PADDING + SPACING_CONSTANT * y) + ")\n\tscale(" + LILYPAD_RADIUS / 13 + ")\n\trotate(" + angle + ")\n\t");
    var path = document.createElementNS('http://www.w3.org/2000/svg', "path");
    path.setAttribute('fill', '#66c810');
    path.setAttribute("d", "m -13 0 a 13 13 0 0 0 25 5 a 5 5 0 0 1 0 -10 a 13 13 0 0 0 -25 5");
    g.appendChild(path);
    return g;
};
var makeGuidingLine = function (_a, _b) {
    var x1 = _a[0], y1 = _a[1];
    var x2 = _b[0], y2 = _b[1];
    var line = document.createElementNS('http://www.w3.org/2000/svg', "line");
    line.setAttribute("x1", "" + (PADDING + SPACING_CONSTANT * x1));
    line.setAttribute("y1", "" + (PADDING + SPACING_CONSTANT * y1));
    line.setAttribute('stroke', '#b4dded');
    line.setAttribute("x2", "" + (PADDING + SPACING_CONSTANT * x2));
    line.setAttribute("y2", "" + (PADDING + SPACING_CONSTANT * y2));
    return line;
};
var SPACING_CONSTANT = 30;
var PADDING = 30;
var LILYPAD_RADIUS = 15;
var FROG_RADIUS = 12;
var createBackground = function () {
    var g = document.createElementNS('http://www.w3.org/2000/svg', "g");
    var pond_water = document.createElementNS('http://www.w3.org/2000/svg', "rect");
    pond_water.setAttribute("width", "" + (PADDING * 2 + SPACING_CONSTANT * 4));
    pond_water.setAttribute("height", "" + (PADDING * 2 + SPACING_CONSTANT * 4));
    pond_water.setAttribute("fill", "#01a4e7");
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
};
var drawFrogs = function (cs) {
    var g = document.createElementNS('http://www.w3.org/2000/svg', "g");
    for (var _i = 0, cs_1 = cs; _i < cs_1.length; _i++) {
        var c = cs_1[_i];
        var path = document.createElementNS('http://www.w3.org/2000/svg', "circle");
        path.setAttribute("cx", "" + (PADDING + SPACING_CONSTANT * c[0]));
        path.setAttribute('fill', '#49692d');
        path.setAttribute("cy", "" + (PADDING + SPACING_CONSTANT * c[1]));
        path.setAttribute("r", "" + FROG_RADIUS);
        g.appendChild(path);
    }
    return g;
};
var main = function () {
    var background = createBackground();
    document.getElementById("board").innerHTML = ""; // clear
    document.getElementById("board").appendChild(background);
    var frogs = drawFrogs([[0, 0], [2, 0], [4, 2], [2, 4]]);
    document.getElementById("board").appendChild(frogs);
};
