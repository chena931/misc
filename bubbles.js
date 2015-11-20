//==============================
//	Bubble Object
//==============================

function Bubble(x,y){
	this.x = x;
	this.y = y;
	this.diameter = 70;
	this.shade = 0;

	this.move = function (){
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);
	}

	this.display = function (){
		fill(this.shade,0,255, 150);
		ellipse(this.x,this.y,this.diameter,this.diameter);
	
	}
	this.change = function (){
		var d = dist(mouseX,mouseY,this.x,this.y)
		if(d < this.diameter/2){
			this.shade = 255;
		}
	}

}

//==============================
//	Drawing
//==============================


var bubbles = [];

function setup(){
	createCanvas(windowWidth,windowHeight);

	for(var i = 0; i < 40; i++){
		var x = random(0,width);
		var y = random(0,height);
		bubbles.push(new Bubble(x,y));
	}

}

function draw(){

	background("lightgray");
	for(var i = 0; i < bubbles.length; i++){

		bubbles[i].move();
		bubbles[i].display();
	}
}

function mousePressed(){
	for(var i = 0; i < bubbles.length; i++){
		bubbles[i].change()
	}
}

