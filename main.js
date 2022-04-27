var canvas = document.querySelector('canvas');
canvas.width = 1800; 
canvas.height = 900; 
var c = canvas.getContext('2d');

var colourChanger = 'black';
var globalLineWidth = 1;

var mouse = {
    x:0,
    y:0,
    clicked:false
}

window.addEventListener('mousemove', e => {
    if (mouse.clicked==true){
        drawTheThing(c, mouse.x, mouse.y, e.x, e.y)
    }
    mouse.x = e.x;
    mouse.y = e.y;
})

window.addEventListener('mousedown', e =>{
    mouse.clicked = true;
})

window.addEventListener('mouseup', e =>{
    if (mouse.clicked==true){
        drawTheThing(c, mouse.x, mouse.y, e.x, e.y)
        mouse.clicked = false;
    }
})

window.addEventListener('keydown', e=> {
    if (e.key == "Control") {
        c.clearRect(0,0,canvas.width,canvas.height)
    }
    if (e.key == "r") {
        colourChanger = 'Red'
    }
    if (e.key == "b") {
        colourChanger = 'Black'
    }
    if (e.key == "g") {
        colourChanger = 'Green'
    }
    if (e.key == "o") {
        colourChanger = 'Orange'
    }
    if (e.key == "w") {
        colourChanger = 'White'
    }
    if (e.key == "ArrowUp") {
        globalLineWidth++;
    }
    if (e.key == "ArrowDown") {
        if (globalLineWidth > 1){
            globalLineWidth--;
        }
    }
    console.log(e.key);
})

function drawTheThing(canvas, x1 ,y1, x2, y2){
    canvas.beginPath();
    canvas.strokeStyle = colourChanger;
    canvas.lineWidth = globalLineWidth;
    canvas.moveTo(x1, y1);
    canvas.lineTo(x2, y2);
    canvas.stroke();
    canvas.closePath();
}