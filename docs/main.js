"use strict";
var clicked_coords = [];
function showGuide(_a) {
    var x = _a[0], y = _a[1];
    if (clicked_coords.length === 0) {
        var circle = document.createElementNS('http://www.w3.org/2000/svg', "circle");
        circle.setAttribute("cx", "" + (OUTER_PADDING + SPACING_CONSTANT * x));
        circle.setAttribute("cy", "" + (OUTER_PADDING + SPACING_CONSTANT * y));
        circle.setAttribute("r", "" + LILYPAD_RADIUS * 0.8);
        circle.setAttribute("fill-opacity", "0.5");
        circle.setAttribute("fill", "#ff0000");
        document.getElementById("board").appendChild(circle);
        clicked_coords.push([x, y]);
    }
    else {
        var circle = document.createElementNS('http://www.w3.org/2000/svg', "circle");
        circle.setAttribute("cx", "" + (OUTER_PADDING + SPACING_CONSTANT * x));
        circle.setAttribute("cy", "" + (OUTER_PADDING + SPACING_CONSTANT * y));
        circle.setAttribute("r", "" + LILYPAD_RADIUS * 0.8);
        circle.setAttribute("fill-opacity", "0.5");
        circle.setAttribute("fill", "#ffff00");
        document.getElementById("board").appendChild(circle);
        clicked_coords.push([x, y]);
    }
}
var makeLilyPadAt = function (_a, angle) {
    var x = _a[0], y = _a[1];
    var path = document.createElementNS('http://www.w3.org/2000/svg', "path");
    path.setAttribute("transform", "\n\ttranslate(" + (OUTER_PADDING + SPACING_CONSTANT * x) + " " + (OUTER_PADDING + SPACING_CONSTANT * y) + ")\n\tscale(" + LILYPAD_RADIUS / 13 + ")\n\trotate(" + angle + ")\n\t");
    path.setAttribute('fill', '#66c810');
    path.setAttribute("d", "m -13 0 a 13 13 0 0 0 25 5 a 5 5 0 0 1 0 -10 a 13 13 0 0 0 -25 5");
    path.addEventListener("click", function () { showGuide([x, y]); });
    return path;
};
var makeGuidingLine = function (_a, _b) {
    var x1 = _a[0], y1 = _a[1];
    var x2 = _b[0], y2 = _b[1];
    var line = document.createElementNS('http://www.w3.org/2000/svg', "line");
    line.setAttribute("x1", "" + (OUTER_PADDING + SPACING_CONSTANT * x1));
    line.setAttribute("y1", "" + (OUTER_PADDING + SPACING_CONSTANT * y1));
    line.setAttribute('stroke', '#b4dded');
    line.setAttribute("x2", "" + (OUTER_PADDING + SPACING_CONSTANT * x2));
    line.setAttribute("y2", "" + (OUTER_PADDING + SPACING_CONSTANT * y2));
    return line;
};
var SPACING_CONSTANT = 40;
var OUTER_PADDING = 30;
var LILYPAD_RADIUS = 25;
var FROG_RADIUS = 10;
var createBackground = function () {
    var g = document.createElementNS('http://www.w3.org/2000/svg', "g");
    var pond_water = document.createElementNS('http://www.w3.org/2000/svg', "rect");
    pond_water.setAttribute("width", "" + (OUTER_PADDING * 2 + SPACING_CONSTANT * 4));
    pond_water.setAttribute("height", "" + (OUTER_PADDING * 2 + SPACING_CONSTANT * 4));
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
var frogImg = function () {
    var frog = document.createElementNS('http://www.w3.org/2000/svg', "g");
    frog.setAttribute("transform", "\n\t\t\tscale(1, 1.5)\n\t\t\tscale(" + FROG_RADIUS / 10 + ")");
    var frog_bg = document.createElementNS('http://www.w3.org/2000/svg', "path");
    frog_bg.setAttribute('fill', '#49692d');
    frog_bg.setAttribute("d", "m -10 0 C -10 7 10 7 10 0 C 10 -2 9 -3 6 -4 C 7 -7 3 -8 2 -5 C 1 -6 -1 -6 -2 -5 C -3 -8 -7 -7 -6 -4 C -9 -3 -10 -2 -10 0");
    var frog_eye = document.createElementNS('http://www.w3.org/2000/svg', "circle");
    frog_eye.setAttribute("fill", "#000000");
    frog_eye.setAttribute("cx", "4.5");
    frog_eye.setAttribute("cy", "-4");
    frog_eye.setAttribute("r", "1");
    var frog_eye2 = document.createElementNS('http://www.w3.org/2000/svg', "circle");
    frog_eye2.setAttribute("fill", "#000000");
    frog_eye2.setAttribute("cx", "-4.5");
    frog_eye2.setAttribute("cy", "-4");
    frog_eye2.setAttribute("r", "1");
    var frog_eye3 = document.createElementNS('http://www.w3.org/2000/svg', "circle");
    frog_eye3.setAttribute("fill", "#FFA500");
    frog_eye3.setAttribute("cx", "4");
    frog_eye3.setAttribute("cy", "-4");
    frog_eye3.setAttribute("r", "2");
    var frog_eye4 = document.createElementNS('http://www.w3.org/2000/svg', "circle");
    frog_eye4.setAttribute("fill", "#FFA500");
    frog_eye4.setAttribute("cx", "-4");
    frog_eye4.setAttribute("cy", "-4");
    frog_eye4.setAttribute("r", "2");
    var frog_mouth = document.createElementNS('http://www.w3.org/2000/svg', "path");
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
};
var drawFrogs = function (fs) {
    var frogs = document.createElementNS('http://www.w3.org/2000/svg', "g");
    for (var _i = 0, fs_1 = fs; _i < fs_1.length; _i++) {
        var f = fs_1[_i];
        var frog = document.createElementNS('http://www.w3.org/2000/svg', "g");
        frog.setAttribute("transform", "translate(" + (OUTER_PADDING + SPACING_CONSTANT * f.coord[0]) + " " + (OUTER_PADDING + SPACING_CONSTANT * f.coord[1]) + ")");
        if (f.prob != 1) {
            var FROG_PROB_RADIUS = 13;
            var frog_prob = document.createElementNS('http://www.w3.org/2000/svg', "path");
            frog_prob.setAttribute('fill', "transparent");
            frog_prob.setAttribute('stroke', f.color);
            frog_prob.setAttribute("d", "m " + FROG_PROB_RADIUS + " 0 A " + FROG_PROB_RADIUS + " " + FROG_PROB_RADIUS + " 0 0 0 " + (FROG_PROB_RADIUS * Math.cos(Math.PI * 2 * f.prob)).toFixed(2) + " " + (FROG_PROB_RADIUS * Math.sin(Math.PI * 2 * f.prob)).toFixed(2));
            frog_prob.setAttribute("stroke-width", "3");
            frog.appendChild(frog_prob);
        }
        frog.appendChild(frogImg());
        frogs.appendChild(frog);
    }
    return frogs;
};
var state2 = [
    { coord: [0, 2], prob: 1, color: "transparent" },
    { coord: [0, 4], prob: 0.5, color: "#5242aa" },
    { coord: [1, 3], prob: 1, color: "transparent" },
    { coord: [2, 2], prob: 0.5, color: "#5242aa" },
    { coord: [2, 4], prob: 0.5, color: "#aa5242" },
    { coord: [3, 3], prob: 0.5, color: "#aa5242" },
];
var state3 = [
    { coord: [0, 2], prob: 0.5, color: "#a37acc" },
    { coord: [0, 4], prob: 0.5, color: "#5242aa" },
    { coord: [1, 3], prob: 1, color: "transparent" },
    { coord: [2, 2], prob: 0.5, color: "#5242aa" },
    { coord: [2, 4], prob: 0.5, color: "#aa5242" },
    { coord: [3, 3], prob: 0.5, color: "#aa5242" },
    { coord: [4, 2], prob: 0.5, color: "#a37acc" },
];
var state1 = [
    { coord: [0, 2], prob: 1, color: "transparent" },
    { coord: [1, 3], prob: 1, color: "transparent" },
    { coord: [2, 4], prob: 1, color: "transparent" },
    { coord: [3, 3], prob: 1, color: "transparent" },
    { coord: [4, 4], prob: 1, color: "transparent" },
];
var state4 = [
    { coord: [0, 2], prob: 1, color: "transparent" },
    { coord: [1, 3], prob: 1, color: "transparent" },
    { coord: [2, 2], prob: 1, color: "transparent" },
    { coord: [2, 4], prob: 1, color: "transparent" },
];
var state5 = [
    { coord: [0, 4], prob: 1, color: "transparent" },
    { coord: [2, 4], prob: 1, color: "transparent" },
    { coord: [3, 3], prob: 1, color: "transparent" },
];
// split_hop({from: [4,4], to1: [2,2], to2: [0,4]}) 
// state1 --> state2
// hop({from: [0,2], to: [4,2]})
// state2 --> state3
// hop({from: [0,2], to: [2,4])
// state2 --> either state4 or state5
var current_state = 1;
var trigger_fake_demo = function () {
    if (current_state === 1
        && clicked_coords[0][0] === 4
        && clicked_coords[0][1] === 4
        && (clicked_coords[1][0] === 2
            && clicked_coords[1][1] === 2
            && clicked_coords[2][0] === 0
            && clicked_coords[2][1] === 4
            || clicked_coords[2][0] === 2
                && clicked_coords[2][1] === 2
                && clicked_coords[1][0] === 0
                && clicked_coords[1][1] === 4)) {
        renderState(state2);
        current_state = 2;
        clicked_coords.length = 0;
    }
    else if (current_state === 2) {
        if (clicked_coords[0][0] === 0 && clicked_coords[0][1] === 2 && clicked_coords[1][0] === 4 && clicked_coords[1][1] === 2) {
            renderState(state3);
            current_state = 3;
            clicked_coords.length = 0;
        }
        else if (clicked_coords[0][0] === 0 && clicked_coords[0][1] === 2 && clicked_coords[1][0] === 2 && clicked_coords[1][1] === 4) {
            if (Math.random() < 0.5) {
                renderState(state4);
                current_state = 4;
                clicked_coords.length = 0;
            }
            else {
                renderState(state5);
                current_state = 5;
                clicked_coords.length = 0;
            }
        }
    }
};
var renderState = function (state) {
    var background = createBackground();
    document.getElementById("board").innerHTML = ""; // clear
    document.getElementById("board").appendChild(background);
    var frogs = drawFrogs(state);
    document.getElementById("board").appendChild(frogs);
};
var main = function () { renderState(state1); };
