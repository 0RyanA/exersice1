var colors = ["green", "blue", "red", "yellow", "grey"];

console.log(colors[0]);
console.log(colors[2]);

colors[4] = "black";
var fourthColor = colors[3];
colors.push("purple");

colors.unshift("white");

console.log(colors.length);
colors.pop();
console.log(colors.length);

var ben;
var shapiro = " ";
for (ben = 0; ben < colors.length; ben++){
	shapiro += colors[ben] + " ";
}
console.log(shapiro);

var s2h2a2p2i2r2o2 = " ";
for (ben = 0; ben < colors.length; ben++){
	s2h2a2p2i2r2o2 += ben + ", " + colors[ben] + " ";
}
console.log(s2h2a2p2i2r2o2);

var b2e2n2 = 1;
var lastColor = colors[colors.length-b2e2n2];