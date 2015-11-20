//var circle = {"x": 50, "y": 100, "diameter":100, "r":200, "g":0, "b":100}

var x = 50;
var y = 100;
var diameter = 40;

var r = 200;
var g = 0;
var b = 100;

function setup(){
	createCanvas(600,400);
}

function draw(){

	background("lightgray");

	fill(r,g,b);
	ellipse(x, y, diameter,diameter);

}