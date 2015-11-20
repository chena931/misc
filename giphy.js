//==============================
//	.gif search
//
// https://api.giphy.com/
//
// public key: dc6zaTOxFJmzC
// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC
//==============================

function setup(){
	noCanvas();
	loadJSON('http://api.giphy.com/v1/gifs/search?q=computers&api_key=dc6zaTOxFJmzC',printGifs);
}

function printGifs(giphy){
	for(var i = 0;i<10;i++){
		createImg(giphy.data[i].images.original.url);	
	}
}



