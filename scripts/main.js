//Using main.js I will create the borders, backgrounds, have enemies, and players

const canvas =  document.getElementById('ufoCanvas');


canvas.width = 900;
canvas.height = 750;





























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