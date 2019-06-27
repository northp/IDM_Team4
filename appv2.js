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
                posArray.push(parseInt(i), parseInt(j));
                return posArray;
            }
        }
    }
}

var rocketPosition = findRocketPosition();

//storing original index position array in constant array
const originalRocketIndex = rocketPosition;
//Object.freeze(originalRocketIndex);

// get height and width of the map
var mapHeight = map.length;
var mapWidth = map[0].length;

//array for storing movement of rocket
var movement = [];

//the main array/algorithm the user creates
var algorithm = [];

//the secondary array that the user creates which they can use inside the main one
var functionTwo = [];

//variables that store the array - will be changed depending on what function is clicked by the user
var arraySelect; //array
var classSelect; //array images

//canvas attributes
var tileWidth = 50;
var tileHeight = 50;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//for resetting position of rocket - value will change depending on level
var styleLeft = "205px";
var styleBottom = "250px";

//jQuery accessing arrows
var right = $("#right");
var left = $("#left");
var up = $("#up");
var down = $("#down");
var run = $("#run");
var functTwoSelect = $("#functiontwoselect");

//each level should have a maximum number of moves you can make to emphasise efficiency
var levelMoves = 10;

//defining the rocket coordinates
var rocketX = 150;
var rocketY = 500;

//rocket variable
var rocketAnimate = $("#rocketman");

//storing original coordinates in constant variable
const rocketX1 = rocketX;
const rocketY1 = rocketY;

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

//begin game with the main function already being clicked
function startState() {
    arraySelect = algorithm; //directions selected will be put into this array
    classSelect = $(".algorithm"); //images put into this class
    levelMoves = 10; //can only enter 10 moves
    $("#mainfunction").css("border", "3px solid black "); //highlight
    $("#functiontwo").css("border", "none"); //reset
}

//checking which function the user has clicked on to enter the algorithm (either the main function array or the secondary array)
$("#mainfunction").click(startState);

$("#functiontwo").click(function () {

    //update variable values that will be used in movementFunction()
    arraySelect = functionTwo; //directions selected will be put into this array
    classSelect = $(".functions"); //images put into this class
    levelMoves = 4; //can only enter 4 moves
    $("#functiontwo").css("border", "3px solid black"); //highlight
    $("#mainfunction").css("border", "none"); //reset

});


//moving the rocket

function movementFunction() {
    var something = -1; //using this variable to increment so that each image will have an individual id name
    //also used it to give each value in the array an individual name

    right.click(function () {
        //if statement so that users can only add certain number of moves in the algorithm
        if (arraySelect.length < levelMoves) {
            something++;
            $(classSelect).append('<img src="right.png" id = "rightAlgorithm" alt = "Right arrow" width="50" height="50" />'); //drawing image
            var rightAlgorithm = $("#rightAlgorithm").attr("id", "rightAlgorithm" + something); //unique id name for each image
            var rightPush = "right" + something;
            arraySelect.push(rightPush);
            removeMove(rightAlgorithm, rightPush, arraySelect);
        }


    });

    left.click(function () {
        if (arraySelect.length < levelMoves) {
            something++;
            $(classSelect).append('<img src="left.png" id = "leftAlgorithm" alt = "Left arrow" width="50" height="50" />');
            var leftAlgorithm = $("#leftAlgorithm").attr("id", "leftAlgorithm" + something);
            var leftPush = "left" + something;
            arraySelect.push(leftPush);
            removeMove(leftAlgorithm, leftPush, arraySelect);
        }
    });

    up.click(function () {
        if (arraySelect.length < levelMoves) {
            something++;
            $(classSelect).append('<img src="up.png" id = "upAlgorithm" alt = "Up arrow" width="50" height="50" />');
            var upAlgorithm = $("#upAlgorithm").attr("id", "upAlgorithm" + something);
            var upPush = "up" + something;
            arraySelect.push(upPush);
            removeMove(upAlgorithm, upPush, arraySelect);
        }
    });

    down.click(function () {
        if (arraySelect.length < levelMoves) {
            something++;
            $(classSelect).append('<img src="down.png" id = "downAlgorithm" alt = "Down arrow" width="50" height="50" />');
            var downAlgorithm = $("#downAlgorithm").attr("id", "downAlgorithm" + something);
            var downPush = "down" + something;
            arraySelect.push(downPush);
            removeMove(downAlgorithm, downPush, arraySelect);
        }
    });

    //debug :
    // doesn't update in F1 if you've changed F2 after adding F2 to F1

    functTwoSelect.click(function () {
        if (arraySelect.length < levelMoves) {

            something++;
            $(classSelect).append('<img src="functionTwo.png" id = "secondfunction" alt = "Function 2 image" width="50" height="50" />');
            var functionTwoAlgorithm = $("#secondfunction").attr("id", "secondfunction" + something);

            for (var index in functionTwo) {
                var twoPush = functionTwo[index];
                arraySelect.push(functionTwo[index]);
                removeMove(functionTwoAlgorithm, twoPush, arraySelect);

            }


        }

    });
    console.log("The current coordinates are: " + movementObject.x, movementObject.y);
    runButton();
}

//function for removing parts of algorithm
function removeMove(image, direction, thisArray) {
    image.click(function () {
            image.remove(); //removes the image clicked
            thisArray.splice(thisArray.indexOf(direction), 1); //removes index from correct array
        }
    );
}

//every time you hit run, the rocket will return back to its original position and go from there
function originalPos() {

    //reset animation
    //resetting the rocket to its default position
    rocketAnimate.css({
        "left": styleLeft,
        "bottom": styleBottom
    });

    //reset coordinates
    rocketX = rocketX1;
    rocketY = rocketY1;

    //reset map and rocketPosition arrays back so rocket index is at original position
    //replacing value 4 in the array with 0 to replace it
    for (var i in map) {
        for (var j in map[i]) {
            if (map[i][j] === 4) {
                map[i][j] = 0;
            }
        }
    }

    rocketPosition = originalRocketIndex;

}


var loss, victory = 0;


function runButton() {
    
    var moveCounter = 0;
    
    run.click(function () {

            //the function will only run if the rocket is not currently animating because otherwise if the run button is hit repeatedly
            //the rocket can go off canvas
            if (!rocketAnimate.is(':animated')) {

                //rocket goes back in original position
                originalPos();


                for (var x in algorithm) {

                    //right
                    if (algorithm[x].charAt(0) === "r") {
                        if (rocketX >= canvas.width - tileWidth) {
                            //edge of canvas - do nothing
                        } else {
                            rocketAnimate.animate({left: "+=50px"}, "fast", function() {
                                counter++;
                                if(counter == algorithm.length){
                                    if(loss==1){
                                        alert("LOSS");
                                        setTimeout(location.reload.bind(location), 1000);
                                    }else if(victory == 1){
                                        alert("VICTORY");
                                        setTimeout(location.reload.bind(location), 1000);
                                    }
                                }
                            });
                            rocketX += 50;
                            movement.push({rocketX, rocketY});
                        }

                        if (rocketPosition[1] < mapWidth - 1) {
                            if ((map[rocketPosition[0]][rocketPosition[1] + 1] == 2) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 3)) {
                                loss = 1;
                            } else if (map[rocketPosition[0]][rocketPosition[1] + 1] == 1) {
                                victory = 1;
                            } else {
                                var temp = map[rocketPosition[0]][rocketPosition[1] + 1];
                                map[rocketPosition[0]][rocketPosition[1] + 1] = 4;
                                map[rocketPosition[0]][rocketPosition[1]] = temp;
                                rocketPosition = findRocketPosition();
                            }
                        }

                    }


                    //down
                    if (algorithm[x].charAt(0) === "d") {
                        if (rocketY >= canvas.height - tileHeight) {
                            //edge of canvas - do nothing
                        } else {
                            rocketAnimate.animate({bottom: "-=50px"}, "fast", function() {
                                counter++;
                                if(counter == algorithm.length){
                                    if(loss==1){
                                        alert("LOSS");
                                        setTimeout(location.reload.bind(location), 1000);
                                    }else if(victory == 1){
                                        alert("VICTORY");
                                        setTimeout(location.reload.bind(location), 1000);
                                    }
                                }
                            });
                            rocketY += 50;
                            movement.push({rocketX, rocketY});
                        }

                        if (rocketPosition[0] < mapHeight - 1) {
                            if ((map[rocketPosition[0] + 1][rocketPosition[1]] == 2) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 3)) {
                                loss = 1;
                            } else if (map[rocketPosition[0] + 1][rocketPosition[1]] == 1) {
                                victory = 1;
                            } else {
                                var temp = map[rocketPosition[0] + 1][rocketPosition[1]];
                                map[rocketPosition[0] + 1][rocketPosition[1]] = 4;
                                map[rocketPosition[0]][rocketPosition[1]] = temp;
                                rocketPosition = findRocketPosition();
                            }
                        }

                    }
                    //left
                    if (algorithm[x].charAt(0) === "l") {
                        if (rocketX <= 0) {
                            //edge of canvas - do nothing
                        } else {
                            rocketAnimate.animate({left: "-=50px"}, "fast", function() {
                                counter++;
                                if(counter == algorithm.length){
                                    if(loss==1){
                                        alert("LOSS");
                                        setTimeout(location.reload.bind(location), 1000);
                                    }else if(victory == 1){
                                        alert("VICTORY");
                                        setTimeout(location.reload.bind(location), 1000);
                                    }
                                }
                            });
                            rocketX -= 50;
                            movement.push({rocketX, rocketY});
                        }


                        if (rocketPosition[1] > 0) {
                            if ((map[rocketPosition[0]][rocketPosition[1] - 1] == 2) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 3)) {
                                loss = 1;
                            } else if (map[rocketPosition[0]][rocketPosition[1] - 1] == 1) {
                                victory = 1;
                            } else {
                                var temp = map[rocketPosition[0]][rocketPosition[1] - 1];
                                map[rocketPosition[0]][rocketPosition[1] - 1] = 4;
                                map[rocketPosition[0]][rocketPosition[1]] = temp;
                                rocketPosition = findRocketPosition();
                            }
                        }

                    }
                    //up
                    if (algorithm[x].charAt(0) === "u") {
                        if (rocketY <= 0) {
                            //edge of canvas - do nothing
                        } else {
                            rocketAnimate.animate({bottom: "+=50px"}, "fast", function() {
                                counter++;
                                if(counter == algorithm.length){
                                    if(loss==1){
                                        alert("LOSS");
                                        setTimeout(location.reload.bind(location), 1000);
                                    }else if(victory == 1){
                                        alert("VICTORY");
                                        setTimeout(location.reload.bind(location), 1000);
                                    }
                                }
                            });
                            rocketY -= 50;
                            movement.push({rocketX, rocketY});
                        }


                        if (rocketPosition[0] > 0) {
                            if ((map[rocketPosition[0] - 1][rocketPosition[1]] == 2) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 3)) {
                                loss = 1;
                            } else if (map[rocketPosition[0] - 1][rocketPosition[1]] == 1) {
                                victory = 1;
                            } else {
                                var temp = map[rocketPosition[0] - 1][rocketPosition[1]];
                                map[rocketPosition[0] - 1][rocketPosition[1]] = 4;
                                map[rocketPosition[0]][rocketPosition[1]] = temp;
                                rocketPosition = findRocketPosition();
                            }
                        }

                    }
                    console.log(algorithm);
                }
            }
        }
    );
}

// a function to save the entered algorithm

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

startState();
movementFunction();