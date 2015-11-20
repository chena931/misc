function setup(){
	createCanvas(600,400);
}

function draw(){

	//var col = map(mouseX, 0,600, 0, 255);
	
	background(mouseX);

	fill("blue");
	ellipse(mouseX, 200, 50,50);

}