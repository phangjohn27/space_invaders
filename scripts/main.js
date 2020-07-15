
const canvas =  document.getElementById('ufoCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(0,0,150,75); // 0,0 to start on top left corner. 150 is width of rect 75 height

ctx.font = '38px Arial';
ctx.fillStyle = 'red';
ctx.fillText("UFO", 30, 130);
ctx.strokeText("Hunter", 120, 130);