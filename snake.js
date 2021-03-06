const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

const box = 32;

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png"; 

let snake = [];

snake[0] = {
	x: 9*box,
	y: 10*box
};

let food = {
	x: Math.floor(Math.random()*17+1)*box,
	y: Math.floor(Math.random()*15+3)*box
}


let score = 0;


let d;

document.addEventListener("keydown",direction);

function direction(event){
	if(event.keyCode == 37 && d!= "RIGHT"){
		d = 'LEFT';
	}else if(event.keyCode == 38 && d!= "DOWN"){
		d = 'UP';
	}
	else if(event.keyCode == 39 && d!= "LEFT"){
		d = 'RIGHT';
	}else if(event.keyCode == 40 && d!= "UP"){
		d = 'DOWN';
	}
}

function draw(){
	ctx.drawImage(ground,0,0);

	for(let i = 0; i<snake.length; i++){
		ctx.fillStyle = (i == 0)? "green":"white";
		ctx.fillRect(snake[i].x, snake[i].y,box,box);
		
		ctx.strokeStyle = "red";
		ctx.strokeRect(snake[i].x, snake[i].y,box,box);
	}
	ctx.drawImage(foodImg,food.x,food.y);
	
	//old head position
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;
	
	 
	
	//which direction
	if(d == 'LEFT')snakeX -= box;
	if(d == 'UP')snakeY -= box;
	if(d == 'RIGHT')snakeX += box;
	if(d == 'DOWN')snakeY += box;
	
	// if the snake eats the food
    if(snakeX == food.x && snakeY == food.y){
        score++;
        
        food = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        }
        // we don't remove the tail
    }else{
        // remove the tail
        snake.pop();
    }
	
	
	ctx.fillStyle = 'white';
	ctx.font = '45px Changa one';
	ctx.fillText(2*score,2*box,1.6*box);
	
	//add new head
	let newHead = {
		x: snakeX,
		y: snakeY
	}
	snake.unshift(newHead);
}

let game = setInterval(draw,100);

	
	

