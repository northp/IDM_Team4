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

function findRocketPosition() {
    var posArray = [];
    for (var i in map) {
        for (var j in map[i]) {
            if (map[i][j] == 4) {
                console.log("Rocket is at index [" + i + "][" + j + "]");
                posArray.push(parseInt(i),parseInt(j));
                return posArray;
            }
        }
    }
}
var rocketPosition = findRocketPosition();

// get height and width of the map
var mapHeight = map.length;
var mapWidth = map[0].length;

//array for storing movement of rocket
var movement = [];
var algorithm = [];

//canvas attributes
var tileWidth = 50;
var tileHeight = 50;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//jQuery accessing arrows
var right = $("#right");
var left = $("#left");
var up = $("#up");
var down = $("#down");
var run = $("#run");

//each level should have a maximum number of moves you can make to emphasise efficiency
var levelMoves;

//defining the rocket coordinates
var rocketX = 150;
var rocketY = 500;

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


//drawing the canvas
function makeGame() {
// assigning the map array to the canvas to draw a board
    for (var i in map) {
        for (var j in map[i]) {
            if (map[i][j] === 0) {
                ctx.drawImage(black, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 1) {
                ctx.drawImage(blue, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 2) {
                ctx.drawImage(red, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 3) {
                ctx.drawImage(yellow, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 4) {
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

function initialise() {
    $(document).ready(function () {
        setTimeout(makeGame); // weird bug, 1 setTimeout doesnt work, need two? No idea why.
        setTimeout(makeGame, 10);
    });
}


//object to store the position of the rocket
var movementObject = {
    x: rocketX,
    y: rocketY
};
console.log("The current coordinates are: " + movementObject.x, movementObject.y);



//moving and running the rocket
function movementFunction() {
    var something = -1; //using this variable to increment so that each image will have an individual id name
    //also used it to give each value in the array an individual name

    right.click(function () {
        something++;
        $(".algorithm").append('<img src="right.png" id = "rightAlgorithm" alt = "Right arrow" width="50" height="50" />'); //drawing image
        var rightAlgorithm = $("#rightAlgorithm").attr("id", "rightAlgorithm" + something); //unique id name for each image
        var rightPush = "right" + something;
        algorithm.push(rightPush);
        removeMove(rightAlgorithm, rightPush);
        
        
    });

    left.click(function () {
        something++;
        $(".algorithm").append('<img src="left.png" id = "leftAlgorithm" alt = "Left arrow" width="50" height="50" />');
        var leftAlgorithm = $("#leftAlgorithm").attr("id", "leftAlgorithm" + something);
        var leftPush = "left" + something;
        algorithm.push(leftPush);
        removeMove(leftAlgorithm, leftPush);
    });

    up.click(function () {
        something++;
        $(".algorithm").append('<img src="up.png" id = "upAlgorithm" alt = "Up arrow" width="50" height="50" />');
        var upAlgorithm = $("#upAlgorithm").attr("id", "upAlgorithm" + something);
        var upPush = "up" + something;
        algorithm.push(upPush);
        removeMove(upAlgorithm, upPush);
    });

    down.click(function () {
        something++;
        $(".algorithm").append('<img src="down.png" id = "downAlgorithm" alt = "Down arrow" width="50" height="50" />');
        var downAlgorithm = $("#downAlgorithm").attr("id", "downAlgorithm" + something);
        var downPush = "down" + something;
        algorithm.push(downPush);
        removeMove(downAlgorithm, downPush);
    });
console.log("The current coordinates are: " + movementObject.x, movementObject.y);
    runButton();
}

//function for removing parts of algorithm
function removeMove(input, direction) {
    input.click(function () {
            input.remove(); //removes the image clicked
            algorithm.splice(algorithm.indexOf(direction), 1); //removes desired part of algorithm
        }
    );
}

function runButton() {

    var rocketAnimate = $("#rocketman");

    run.click(function () {
        //every time you hit run, get the rocket back in its original position (doesn't apply to DOM img however...)
        //rocketX = 150;
        //rocketY = 500;
        //console.log(movement);

        for (var x in algorithm) {

            //right
            if (algorithm[x].charAt(0) === "r") {
                if (rocketX >= canvas.width - tileWidth) {
                    //edge of canvas - do nothing
                } else {
                    rocketAnimate.animate({left: "+=50px"}, "fast");
                    rocketX += 50;
                    movement.push({rocketX, rocketY});
                }
                
                if(rocketPosition[1] < mapWidth - 1){
                    if((map[rocketPosition[0]][rocketPosition[1] + 1] == 2) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 3)) {
                        alert("you flew into a planet!");
                        setTimeout(location.reload.bind(location), 5000); // Temporary: reload page if player flies into a planet
                    }else if(map[rocketPosition[0]][rocketPosition[1] + 1] == 1){
                        alert("you win!");
                        setTimeout(location.reload.bind(location), 5000); // Temporary: reload page if player flies into a planet
                    }else{
                        var temp = map[rocketPosition[0]][rocketPosition[1] + 1];
                        map[rocketPosition[0]][rocketPosition[1] + 1] = 4;
                        map[rocketPosition[0]][rocketPosition[1]] = temp;
                        rocketPosition = findRocketPosition();
                    }
                }
                
            }

            //  makeGame();


            //DEBUG
            //down
            if (algorithm[x].charAt(0) === "d") {
                if (rocketY >= canvas.height - tileHeight) {
                    //edge of canvas - do nothing
                } else {
                    rocketAnimate.animate({top: "+=50px"}, "fast");
                    rocketY += 50;
                    movement.push({rocketX, rocketY});
                }
                
                if(rocketPosition[0] < mapHeight - 1){
                    if((map[rocketPosition[0] + 1][rocketPosition[1]] == 2) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 3)) {
                        alert("you flew into a planet!");
                        setTimeout(location.reload.bind(location), 5000); // Temporary: reload page if player flies into a planet
                    }else if(map[rocketPosition[0] + 1][rocketPosition[1]] == 1){
                        alert("you win!");
                        setTimeout(location.reload.bind(location), 5000); // Temporary: reload page if player flies into a planet
                    }else{
                        var temp = map[rocketPosition[0] + 1][rocketPosition[1]];
                        map[rocketPosition[0] + 1][rocketPosition[1]] = 4;
                        map[rocketPosition[0]][rocketPosition[1]] = temp;
                        rocketPosition = findRocketPosition();
                    }
                }
                
                

                // makeGame();
            }
            //left
            if (algorithm[x].charAt(0) === "l") {
                if (rocketX <= 0) {
                    //edge of canvas - do nothing
                } else {
                    rocketAnimate.animate({left: "-=50px"}, "fast");
                    rocketX -= 50;
                    movement.push({rocketX, rocketY});
                }


                if(rocketPosition[1] > 0){
                    if((map[rocketPosition[0]][rocketPosition[1] - 1] == 2) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 3)) {
                        alert("you flew into a planet baby");
                        setTimeout(location.reload.bind(location), 5000); // Temporary: reload page if player flies into a planet
                    }else if(map[rocketPosition[0]][rocketPosition[1] - 1] == 1){
                        alert("you win!");
                        setTimeout(location.reload.bind(location), 5000); // Temporary: reload page if player flies into a planet
                    }else{
                        var temp = map[rocketPosition[0]][rocketPosition[1] - 1];
                        map[rocketPosition[0]][rocketPosition[1] - 1] = 4;
                        map[rocketPosition[0]][rocketPosition[1]] = temp;
                        rocketPosition = findRocketPosition();
                    }
                }
                
                

                //makeGame();
            }
            //up
            if (algorithm[x].charAt(0) === "u") {
                if (rocketY <= 0) {
                    //edge of canvas - do nothing
                } else {
                    rocketAnimate.animate({top: "-=50px"}, "fast");
                    rocketY -= 50;
                    movement.push({rocketX, rocketY});
                }



                if(rocketPosition[0] > 0){
                    if((map[rocketPosition[0] - 1][rocketPosition[1]] == 2) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 3)) {
                        alert("you flew into a planet baby");
                        setTimeout(location.reload.bind(location), 5000); // Temporary: reload page if player flies into a planet
                    }else if(map[rocketPosition[0] - 1][rocketPosition[1]] == 1){
                        alert("you win!");
                        setTimeout(location.reload.bind(location), 5000); // Temporary: reload page if player flies into a planet
                    }else{
                        var temp = map[rocketPosition[0] - 1][rocketPosition[1]];
                        map[rocketPosition[0] - 1][rocketPosition[1]] = 4;
                        map[rocketPosition[0]][rocketPosition[1]] = temp;
                        rocketPosition = findRocketPosition();
                    }
                }
                
                

                //makeGame();
            }
            console.log(algorithm);
        }
    });
}

// a funtion to save the entered algorithm

var save = $("#save");
var savedAlgorithmTemp = [];
var savedAlgorithm = [];
var counter = 0;
save.click(function () {
    savedAlgorithmTemp = savedAlgorithmTemp.concat(algorithm);
    savedAlgorithm[counter] = savedAlgorithmTemp;
    savedAlgorithmTemp = [];
    counter++;
});


movementFunction();