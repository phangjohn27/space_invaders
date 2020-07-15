//Using main.js I will create the borders, backgrounds, have enemies, and players

const canvas =  document.getElementById('ufoCanvas');


canvas.width = 900;
canvas.height = 750;

//I want to auto-resize my canvas
function resize(){
    // Our canvas must cover full height of screen regardless of the resolution
    const height = window.innerHeight - 20;

    //So we need to calculate the proper scaled width that should work wel with every resolution
    const ratio = canvas.width / canvas.height
    const width = height * ratio;

    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
}

window.addEventListener('load', resize, false);

// Game Basics
function GameBasics(canvas){
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;


    //active playing field
    //How Javascript rights function;
    this.playBoundaries = {
        top: 150,
        bottom: 650,
        left: 100,
        right: 800
    };

    this.setting = {
        //game settings
    }

    //collect here the different position, states of the game
    //Stack data structure to use instead of a queue?
    this.positionContainer = [];
}

// Return to current game position, status. Always returns the top element of positionContainer.
GameBasics.prototype.presentPosition = function () {
    // > 0 means if positionContainer is not empty.
    //Then return the last position it was at
    //Obvious if it is empty then return null.
    return this.positionContainer.length > 0 ? this.positionContainer[this.positionContainer.length  - 1] : null;
};

//Move to the desired position
GameBasics.prototype.goToPosition = function(position){
    //If we're already in a position clear the positionContainer.
    if(this.presentPosition()){
        this.positionContainer.length = 0;
    }

    // If we find an 'entry' in a given position, we call it.
    if(position.entry){
        position.entry(play);
    }

    //Setting the current game position in the positionContainer
    this.positionContainer.push(position);
};

//Push our new position into the positionContainer
GameBasics.prototype.pushPosition = function(position){
    this.positionContainer.push(position);
};

//Pop the position from the positionContainer
GameBasics.prototype.popPosition = function () {
    this.positionContainer.pop();
}




















//If I didn't have background images then I would've used something like this
//to create my grid
// ctx.fillStyle = 'green';
// ctx.fillRect(0,0,150,75); // 0,0 to start on top left corner. 150 is width of rect 75 height

// ctx.font = '38px Arial';
// ctx.fillStyle = 'red';
// ctx.fillText("UFO", 30, 130);
// ctx.strokeText("Hunter", 120, 130);



//2nd method to put images on background image
// udemy_image = new Image();
// udemy_image.src = 'images/udemy.png';

// udemy_image.onload = function(){
//     return ctx.drawImage(udemy_image, 0, 0);