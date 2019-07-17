"use strict";


// //level 1 map
// var map = [
// [0, 0, 0, 1, 1, 1, 0, 0, 0],
// [0, 0, 0, 0, 1, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 2, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 3, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 4, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0, 0]
// ];

//level 1 map
var map = [
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function insertDOMandCSS() {
    // a function to load DOM and CSS elements based on map.
    // If map 1, load DOM and CSS as below.
    // Later we need to change these hard values to variables which will change depending on which map is loaded.
    // for example, var planetFireBottom could be created and assigned a string value '253px' for one map at the asterix below, but this value would change for another map
    $('#planetFire').attr('src', 'planet_fire.png');
    $('#planetFire').css({
        'position': 'absolute',
        'left': '150px',
        'bottom': '253px', // ****
        'height': '50px',
        'width': '50px'
    });

    $('#planetMetal').attr('src', 'planet_metal.png');
    $('#planetMetal').css({
        'position': 'absolute',
        'left': '300px',
        'bottom': '53px',
        'height': '50px',
        'width': '50px'
    });

    $('#planetDestination').attr('src', 'planet_destination.png');
    $('#planetDestination').css({
        'position': 'absolute',
        'left': '220px',
        'bottom': '415px',
        'height': '100px',
        'width': '100px',
        'transform': 'rotate(30deg)'
    });

    $('#rocketman').attr('src', 'spaceship_pink.png');
    $('#rocketman').css({
        'position': 'absolute',
        'left': '150px',
        'bottom': '53px',
        'height': '50px',
        'width': '50px'
    });

}

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

//storing original index position array in const array
const originalRocketIndex = rocketPosition;

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
var styleLeft = "150px";
// var styleBottom = "250px";
var styleBottom = "50px";

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
var rocketY = 450;

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
red.src = "planet_fire.png";

var yellow = new Image;
yellow.src = "planet_metal.png";


var xPosition, yPosition = 0;


//drawing the canvas
function makeGame() {
// assigning the map array to the canvas to draw a board
    for (var i in map) {
        for (var j in map[i]) {
            if (map[i][j] === 0) {
                ctx.drawImage(black, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 1) {
                //ctx.drawImage(blue, xPosition, yPosition, 50, 50); //planet image drawn in DOM
                ctx.drawImage(black, xPosition, yPosition, 50, 50);
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

$(document).ready(function () {
    insertDOMandCSS();
    initialise();
});

function initialise() {
    $(document).ready(function () {
        setTimeout(makeGame, 10); // weird bug, 1 setTimeout doesnt work, need two? No idea why.
        setTimeout(makeGame, 100);
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

    functTwoSelect.click(function () {
        if (arraySelect.length < levelMoves) {
            if (arraySelect === algorithm) {
                something++;
                $(classSelect).append('<img src="functionTwo.png" id = "secondfunction" alt = "Function 2 image" width="50" height="50" />');
                var functionTwoAlgorithm = $("#secondfunction").attr("id", "secondfunction" + something);
                arraySelect.push(functionTwo);
                removeMove(functionTwoAlgorithm, functionTwo, arraySelect);
            }
        }

        //handling loops (calling F2 inside F2)
        //currently loops until it hits an edge then it exits the loop
        //should add a stop button for if it gets stuck in a loop
         if (arraySelect === functionTwo) {
            for (var i = 0; i <= 5; i++) {
                for (var j in functionTwo) {
                    functionTwo.push(functionTwo[j]);
                    //console.log(functionTwo);
                }
            }
            something++;
            $(classSelect).append('<img src="functionTwo.png" id = "secondfunction" alt = "Function 2 image" width="50" height="50" />');
            var functionTwoAlgorithm = $("#secondfunction").attr("id", "secondfunction" + something);
            removeMove(functionTwoAlgorithm, functionTwo, arraySelect);
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

function clickElements() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var planetFire = $("#planetFire");
    var planetMetal = $("#planetMetal");
    var planetDestination = $("#planetDestination");

    planetFire.click(function () {
        modal.style.display = "block";
        $("#planetModal").attr("src", "planet_fire.png");
        $("#planetCharacteristics").text("Fire");
        $("#title").text("Planet").css("font-weight", "bold");
    });

    planetMetal.click(function () {
        modal.style.display = "block";
        $("#planetModal").attr("src", "planet_metal.png");
        $("#planetCharacteristics").text("Metal");
        $("#title").text("Planet").css("font-weight", "bold");
    });

    planetDestination.click(function () {
        modal.style.display = "block";
        $("#planetModal").attr("src", "planet_destination.png");
        $("#planetCharacteristics").text("This is your destination!");
        $("#title").text("Planet").css("font-weight", "bold");
    });

    rocketAnimate.click(function () {
        modal.style.display = "block";
        $("#planetModal").attr("src", "spaceship_pink.png");
        $("#planetCharacteristics").text("Move the rocket to its destination by using the arrow keys below.");
        $("#title").text("Rocket").css("font-weight", "bold");
    });

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
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
var moveCounter = 0;

function runButton() {
    run.click(function () {

            //the function will only run if the rocket is not currently animating because otherwise if the run button is hit repeatedly
            //the rocket can go off canvas
            if (!rocketAnimate.is(':animated')) {

                //rocket goes back in original position
                originalPos();


                for (var x in algorithm) {

                    //animating the function 2 values when called in the main algorithm, tracking loss and victory, updating rocket index
                    if (typeof algorithm[x] === "object") {

                        for (var i in algorithm[x]) {

                            //right
                            if (algorithm[x][i].charAt(0) === "r") {
                                moveRight();
                            }

                            //left
                            if (algorithm[x][i].charAt(0) === "l") {
                                moveLeft();
                            }

                            //up
                            if (algorithm[x][i].charAt(0) === "u") {
                                moveUp();
                            }

                            //down
                            if (algorithm[x][i].charAt(0) === "d") {
                                moveDown();
                            }
                        }
                    }

                    //animating main algorithm, tracking loss and victory, updating rocket index
                    //right
                    else if (algorithm[x].charAt(0) === "r") {
                        moveRight();
                    }

                    //down
                    else if (algorithm[x].charAt(0) === "d") {
                        moveDown();
                    }

                    //left
                    else if (algorithm[x].charAt(0) === "l") {
                        moveLeft();
                    }
                    //up
                    else if (algorithm[x].charAt(0) === "u") {
                        moveUp();
                    }

                    console.log(algorithm);
                }
            }
            moveCounter = 0;
        }
    );
}

//bug with moveCounter and edge detection; moveCounter doesn't increment if an edge is hit
//moveCounter !== algorithm length so nothing happens

function moveRight() {
    if (rocketX >= canvas.width - tileWidth) {
        //edge of canvas - do nothing
    } else {
        rocketAnimate.animate({left: "+=50px"}, "fast", function () {
            moveCounter++;
            console.log(moveCounter);
            if (moveCounter == algorithm.length) {
                if (loss == 1) {
                    Swal.fire({
                        position: 'center-start',
                        type: 'error',
                        title: 'You Lose!',
                        text: 'Your rocket has collided with a planet!'
                    });
                    setTimeout(location.reload.bind(location), 3000);
                } else if (victory == 1) {
                    Swal.fire({
                        position: 'center-start',
                        type: 'success',
                        title: 'You Win!',
                        text: 'Your rocket has escaped this sector!'
                    });
                    setTimeout(location.reload.bind(location), 3000);
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

function moveDown() {
    if (rocketY >= canvas.height) {
        //edge of canvas - do nothing
    } else {
        rocketAnimate.animate({bottom: "-=50px"}, "fast", function () {
            moveCounter++;
            if (moveCounter == algorithm.length) {
                if (loss == 1) {
                    Swal.fire({
                        position: 'center-start',
                        type: 'error',
                        title: 'You Lose!',
                        text: 'Your rocket has collided with a planet!'
                    });
                    setTimeout(location.reload.bind(location), 3000);
                } else if (victory == 1) {
                    Swal.fire({
                        position: 'center-start',
                        type: 'success',
                        title: 'You Win!',
                        text: 'Your rocket has escaped this sector!'
                    });
                    setTimeout(location.reload.bind(location), 3000);
                }
            }
        });
        console.log(rocketY);
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

function moveLeft() {
    if (rocketX <= 0) {
        //edge of canvas - do nothing
    } else {
        rocketAnimate.animate({left: "-=50px"}, "fast", function () {
            moveCounter++;
            if (moveCounter == algorithm.length) {
                if (loss == 1) {
                    Swal.fire({
                        position: 'center-start',
                        type: 'error',
                        title: 'You Lose!',
                        text: 'Your rocket has collided with a planet!'
                    });
                    setTimeout(location.reload.bind(location), 3000);
                } else if (victory == 1) {
                    Swal.fire({
                        position: 'center-start',
                        type: 'success',
                        title: 'You Win!',
                        text: 'Your rocket has escaped this sector!'
                    });
                    setTimeout(location.reload.bind(location), 3000);
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

function moveUp() {

    if (rocketY <= 50) {
        console.log("edge");

        //edge of canvas - do nothing
    } else {
        //every time the rocket animates, increment moveCounter
        //however, rocket does not animate if an edge is detected
        //loop: for every (up) index in array, increment moveCounter

        rocketAnimate.animate({bottom: "+=50px"}, "fast", function () {
            moveCounter++;
            console.log(moveCounter);
            if (moveCounter == algorithm.length) {
                if (loss == 1) {
                    Swal.fire({
                        position: 'center-start',
                        type: 'error',
                        title: 'You Lose!',
                        text: 'Your rocket has collided with a planet!'
                    });
                    setTimeout(location.reload.bind(location), 3000);
                } else if (victory == 1) {
                    console.log("treadmill");
                    Swal.fire({
                        position: 'center-start',
                        type: 'success',
                        title: 'You Win!',
                        text: 'Your rocket has escaped this sector!'
                    });
                    setTimeout(location.reload.bind(location), 3000);
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
            console.log("victory");
            victory = 1;
        } else {
            var temp = map[rocketPosition[0] - 1][rocketPosition[1]];
            map[rocketPosition[0] - 1][rocketPosition[1]] = 4;
            map[rocketPosition[0]][rocketPosition[1]] = temp;
            rocketPosition = findRocketPosition();
        }
    }

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
    console.log(savedAlgorithmTemp, savedAlgorithm, algorithm)
});

startState();
movementFunction();
clickElements();