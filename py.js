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

//Creating objects and functions

const ball = {
    x: canvas.width/2, //divide by 2 because we want the circle to be at the center
    y: canvas.height/2, 
    radius: 10,
    vel_in_x_dir: 5, //velocity in x direction
    vel_in_y_dir: 5, //velocity in y direction
    speed: 7,
    color: "green"
}
  
const separator = {
    x: (canvas.width - 2)/2,
    y: 0,
    height: 10,
    width: 2,
    color: "white"
}

const user = {
    x: 0,
    y: (canvas.height - 100)/2, //subtracting so that it wont go beyond the canvas
    width: 10,
    height: 100,
    score: 0,
    color: "white"
}

const cpu = {
    x: canvas.width -10,
    y: (canvas.height - 100)/2,
    width: 10,
    height: 100,
    score: 0,
    color: "white"
}

function drawRectangle(x, y, w, h, color){
    draw.fillStyle = color;
    draw.fillRect(x, y, w, h);
}

function drawCircle(x, y, r, color){
    draw.fillStyle = color;
    draw.beginPath();
    draw.arc(x, y, r, 0, Math.PI*2, true); //arc is used to draw the circle
    draw.closePath();
    draw.fill();
}

function drawScore(text, x, y){
    draw.fillStyle = "white";
    draw.font = "60px Arial";
    draw.fillText(text, x, y);
}

function drawSeparator(){
    for(let i = 0; i <= canvas.height; i += 20){
        drawRectangle(separator.x, separator.y + i, separator.width, separator.height, separator.color)
    }
}

function helper() {
    drawRectangle(0, 0, canvas.width, canvas.height, "black");
    drawScore(0, canvas.width/4, canvas.height/5);
    drawScore(0, 3*canvas.width/4, canvas.height/5);
    drawSeparator();
    drawRectangle(user.x, user.y, user.width, user.height);
    drawRectangle(cpu.x, cpu.y, cpu.width, cpu.height);
    drawCircle(ball.x, ball.y, ball.radius, ball.width, ball.height, ball.color)
}

function call_back(){
    helper();
}

let fps = 50;
let looper = setInterval(call_back, 1000/fps);
//everytime the setInterval fucntion is callled, the circle is blackened and another circle is created thus forming an illusion that the circle is moving. 

function restart() {
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.vel_in_x_dir = -ball.vel_in_x_dir; //we want the ball to move towards the opposite direction
    ball.speed = 5;
}

canvas.addEventListener("mousemove", getMousePos);

function getMousePos(evt){
    let rect = can.getBoundingClientRect();
    user.y = evt.clientY - rect.top - user.height/2;
}

function detect_collsion(ball, player){
    player.top = player.y;
    player.bottom = player.y + player.height;
    player.left = player.x;
    player.right = player.x + player.width;

    ball.top = ball.y - ball.radius;
    ball.bottom  = ball.y + ball.radius;
    ball.left = ball.x - ball.radius;
    ball.right = ball.x + ball.radius;
}

function cpu_movement(){
    if(cpu.y < ball.y)
        cpu.y += 5;
    else
        cpu.y -= 5;
}

//Other methods aside using the cpu_movement
Mathematics:
    cpu.y += ((ball.y - (cpu.y + cpu.height/2)));

Random:
    cpu.y = Math.random()* canvas.height;