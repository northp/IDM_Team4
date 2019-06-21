"use strict";

//level 1 map
var map = [
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];


// function to find rocket index (value 4 in the array).

function findRocketPosition(){
    for(var i in map){
        for(var j in map[i]){
            if (map[i][j] == 4){
                console.log("Rocket is at index [" + i + "][" + j +"]");
            }
        }
    }
}



//array for storing movement of rocket
var movement = [];
var algorithm = [];


//canvas attributes
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//defining the rocket
var rocket = new Image;
var rocketX = 150;
var rocketY = 500;
rocket.src = "rocket.png";

// Added images to represent space, planets etc
var black = new Image;
black.src = "black.png";

var blue = new Image;
blue.src = "blue.png";

var red = new Image;
red.src = "red.png";

var yellow = new Image;
yellow.src = "yellow.png";


var xPosition, yPosition = 0;
var mapHeight, mapWidth = 0;
//drawing the canvas
function makeGame() {
// assigning the map array to the canvas to draw a board
    for (var i in map) {
        for (var j in map[i]) {
            
            mapHeight = map.length;
            mapWidth = map[i].length;
            
            if(map[i][j] == 0){
                ctx.drawImage(black, xPosition, yPosition, 50, 50);
            }else if(map[i][j] == 1){
                ctx.drawImage(blue, xPosition, yPosition, 50, 50);
            }else if(map[i][j] == 2){
                ctx.drawImage(red, xPosition, yPosition, 50, 50);
            }else if(map[i][j] == 3){
                ctx.drawImage(yellow, xPosition, yPosition, 50, 50);
            }else if(map[i][j] == 4){
                ctx.drawImage(black, xPosition, yPosition, 50, 50);
                //ctx.drawImage(rocket, xPosition, yPosition, 50, 50);
            }
            xPosition = xPosition + 50;
        }
        yPosition = yPosition + 50;
		xPosition = 0;
    }
    yPosition = 0;
}


initialise();

function initialise(){
    $(document).ready( function () {
        setTimeout(makeGame); // weird bug, 1 setTimeout doesnt work, need two? No idea why.
        setTimeout(makeGame,10); 
    });
}


//jQuery accessing arrows
var right = $("#right");
var left = $("#left");
var up = $("#up");
var down = $("#down");
var run = $("#run");
var xValue = rocketX;
var yValue = rocketY;


//object to store the position of the rocket
var movementObject = {
    x : rocketX,
    y : rocketY
};
console.log("The current coordinates are: " + movementObject.x, movementObject.y);

// append rocket here, based on above movement variables??
//$("#rocket").append('<img src="rocket.png" width="50" height="50" left="150px" right="305px" />');

//moving the rocket
function movementFunction() {
    right.click(function () {

        $(".algorithm").append('<img src="right.png" width="50" height="50" />');
        algorithm.push("right");
        console.log("x = " + xValue + " y = " + yValue);
    });

    left.click(function () {

        $(".algorithm").append('<img src="left.png" width="50" height="50" />');
        algorithm.push("left");
        console.log(movement);
        console.log("x = " + xValue + " y = " + yValue);
    });

    up.click(function () {

        $(".algorithm").append('<img src="up.png" width="50" height="50" />');
        algorithm.push("up");
        console.log("x = " + xValue + " y = " + yValue);
    });

    down.click(function () {
        $(".algorithm").append('<img src="down.png" width="50" height="50" />');
        algorithm.push("down");
        console.log("x = " + xValue + " y = " + yValue);
    });


    run.click(function () {
        console.log("hello");
        for(var i in algorithm){
            if(algorithm[i]=="right"){
                console.log("right");
                xValue = rocketX += 50;
                movement.push({xValue, yValue});
                
                $('#rocketDiv').animate({left: '+=50px'}, "fast");
                
                // needs more work to account for planets and stars etc
                // add try catch? Need to make sure rocket doesn't go out of bounds
                // Also need to make sure planet colours arent remapped to black
                for(var x in map){
                    for(var y in map[x]){
                        if (map[x][y] == 4){
                            
                            if(y < mapWidth){
                                map[x][y+1] = 4;
                                map[x][y] = 0;
                                console.log(x + ":" + y);
                            }else{
                                console.log("out of bounds");
                                console.log(x + ":" + y);
                            }
                        }
                    }
                }
                
                makeGame();
            }else if(algorithm[i]=="down"){
                yValue = rocketY += 50;
                movement.push({xValue, yValue});
                $('#rocketDiv').animate({top: '+=50px'}, "fast");
                
                // needs more work to account for planets and stars etc
                // add try catch? Need to make sure rocket doesn't go out of bounds
                // Also need to make sure planet colours arent remapped to black
                for(var i in map){
                    for(var j in map[i]){
                        if (map[i][j] == 4){
                            
                            map[i+1][j] = 4;
                            map[i][j] = 0;
                            
                        }
                    }
                }
                
                makeGame();
            }else if(algorithm[i]=="left"){
                xValue = rocketX -= 50;
                movement.push({xValue, yValue});
                $('#rocketDiv').animate({left: '-=50px'}, "fast");
                
                // needs more work to account for planets and stars etc
                // add try catch? Need to make sure rocket doesn't go out of bounds
                // Also need to make sure planet colours arent remapped to black
                for(var i in map){
                    for(var j in map[i]){
                        if (map[i][j] == 4){
                            
                            map[i][j-1] = 4;
                            map[i][j] = 0;
                            
                        }
                    }
                }
                
                makeGame();
            }else if(algorithm[i]=="up"){
                yValue = rocketY -= 50;
                movement.push({xValue, yValue});
                $('#rocketDiv').animate({top: '-=50px'}, "fast");
                
                // needs more work to account for planets and stars etc
                // add try catch? Need to make sure rocket doesn't go out of bounds
                // Also need to make sure planet colours arent remapped to black
                for(var i in map){
                    for(var j in map[i]){
                        if (map[i][j] == 4){
                            
                            map[i-1][j] = 4;
                            map[i][j] = 0;
                            
                        }
                    }
                }
                
                makeGame();
            }
        }

    })
}

movementFunction();

