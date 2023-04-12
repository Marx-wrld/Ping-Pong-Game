let canvas = document.getElementById("table");
let draw = canvas.getContext("2d")

draw.fillStyle = "red"; //used to color
draw.fillRect(100, 100, 30, 30); 
//used to draw the rectangle
//x-100 and y-100 then width and height set to 30

draw.fillStyle = "orange"; //fills the color orange
draw.beginPath(); //called when we first want to build the shapes
draw.arc(200, 200, 10, 0, Math.PI*2, false); //x,y coordinates and radius then a zero start angle and a false-clockwise direction
draw.closePath(); 
draw.fill();

const ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 10,
    vel_in_x_dir: 5,
    vel_in_y_dir: 5,
    speed: 7,
    color: "Green"
}

const separator = {
    x: (canvas.width - 2)/2,
    y: 0,
    height: 10,
    width: 2,
    color: "white"
}