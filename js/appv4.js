"use strict";

/* Below code now in checkpoint.js */



// // A variable to represent the selected map
var currentLevel = 0;


// // A variable to represent the highest completed level.
var highestCompletedLevel = 0;


/* Adding LocalStorage Code */

// function loadStorageData(){
    // // Local storage: Current Level and Highest Completed level start at 0;
    // currentLevel = parseInt(localStorage.getItem("currentLevel"));
    // localStorage.setItem("currentLevel", currentLevel);

    // highestCompletedLevel = parseInt(localStorage.getItem("highestCompletedLevel"));
    // localStorage.setItem("highestCompletedLevel", highestCompletedLevel);
// }

// loadStorageData();

if((!parseInt(localStorage.getItem("currentLevel")) >= 1) || (!parseInt(localStorage.getItem("currentLevel")) > 8)){
    localStorage.setItem("currentLevel", currentLevel);
    localStorage.setItem("highestCompletedLevel", highestCompletedLevel);
}

loadStorageData();



//for resetting position of rocket - value will change depending on level
var rocketMarginLeft;
var rocketMarginTop;

//defining the rocket coordinates
var rocketX = 250;
var rocketY = 350;

//storing original rocket coordinates in variable
var rocketX1 = rocketX;
var rocketY1 = rocketY;

//asteroid positioning variables
var asteroidMarginLeft;
var asteroidMarginTop;
var asteroidX;
var originalAsteroidX;

//falling star positioning variables
var fallingStarMarginLeft;
var fallingStarMarginTop;
var fallingStarY;
var originalFallingStarY;

/*planet positioning*/

var destinationMarginLeft;
var destinationMarginTop;
var planetDestinationImage;

var planetIceMarginLeft;
var planetIceMarginTop;
var planetIceWidth;

var planetLavaMarginLeft;
var planetLavaMarginTop;
var planetLavaWidth;

var planetMoonMarginLeft;
var planetMoonMarginTop;
var planetMoonWidth;

var planetEarthMarginLeft;
var planetEarthMarginTop;
var planetEarthWidth;

var planetFireMarginLeft;
var planetFireMarginTop;
var planetFireWidth;

var planetMetalMarginLeft;
var planetMetalMarginTop;
var planetMetalWidth;

var map = [];

var something = -1; //using this variable to increment so that each arrow image will have an individual id name
//also used it to give each value in the array an individual name

var algorithmLevelMoves;
var functionTwoLevelMoves;

var version = -1;

var versionListLevel0 = [];
var versionListLevel1 = [];
var versionListLevel2 = [];
var versionListLevel3 = [];
var versionListLevel4 = [];
var versionListLevel5 = [];
var versionListLevel6 = [];
var versionListLevel7 = [];


//DOM accessing modal
var modal = document.getElementById("myModal");
var navModal = document.getElementById("navModal");
var span = document.getElementsByClassName("close")[0];
var stay = document.getElementsByClassName("btn-stay")[0];


function loadVersions() {
// Arrays to hold Level 0 versions 1, 2, 3 and 4:
    versionListLevel0 =
        [
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
            ]
        ];


// Arrays to hold Level 1 versions 1, 2, 3 and 4:
    versionListLevel1 =
        [
            [
                [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 2.5, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 2, 2.5, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 2.5, 0, 0, 0, 0, 0],
                [0, 0, 3.5, 3.5, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 2.5, 2.5, 2.5, 0, 0, 0, 0, 0, 0],
                [0, 0, 2.5, 2, 2.5, 0, 0, 0, 0, 0, 0],
                [0, 0, 2.5, 2.5, 2.5, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 3.5, 3.5, 0, 0, 0, 0],
                [0, 0, 0, 4, 0, 3.5, 3, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2.5, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 2.5, 2, 2.5, 0, 0, 4, 0, 0, 0],
                [0, 0, 0, 2.5, 2.5, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 2.5, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 3.5, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 3.5, 3, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 2.5, 2, 2.5, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 2.5, 2.5, 2.5, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 2.5, 0, 3.5, 0],
                [0, 0, 0, 4, 0, 0, 0, 0, 0, 3, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]
        ];

// Arrays to hold Level 2 versions 1, 2, 3 and 4:
    versionListLevel2 =
        [
            [
                [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0],
                [0, 0, 0, 6, 0, 2.5, 2.5, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 3.5, 3, 3.5, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 3.5, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 3, 3.5, 0, 0, 0, 0, 0, 0],
                [0, 0, 3.5, 3.5, 0, 0, 5, 5, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0],
                [0, 0, 2.5, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2.5, 6, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0],
                [0, 0, 2.5, 2.5, 0, 5, 5, 0, 0, 0, 0],
                [0, 0, 2, 2.5, 0, 0, 0, 0, 6, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 3.5, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 3.5, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0],
                [0, 0, 0, 2.5, 2.5, 0, 5, 5, 0, 0, 0],
                [0, 0, 0, 2, 2.5, 0, 0, 6, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 3.5, 3, 3.5, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0]
            ]
        ];

    // Arrays to hold Level 2 versions 1, 2, 3 and 4:
    versionListLevel3 =
        [
            [
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0.2, 0, 0, 0],
                [0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 2.5, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 2.5, 2, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                [0, 0, 0.2, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0.1, 0, 0, 2.5, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 2.5, 0, 0, 0, 0, 0, 0],
                [0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0.2, 0, 0, 0, 2.5, 0, 0, 0, 0],
                [0, 4, 0, 0, 0, 2.5, 2, 2.5, 0, 0, 0],
                [0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0.2, 0, 0, 0],
                [0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 2.5, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2.5, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]

        ];


    // Arrays to hold Level 4 versions 1, 2, 3 and 4:
    versionListLevel4 =

        [
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 8, 8, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 8, 8, 0, 5, 0, 0, 0.2, 0, 0, 0],
            [0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 3.5, 0, 2.5, 2, 0, 0, 6, 0],
            [0, 0, 3.5, 3.5, 0, 0, 2.5, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];


    // Arrays to hold Level 5 versions 1, 2, 3 and 4:
    versionListLevel5 =
        [
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0.2, 0],
            [0, 0, 6, 6, 0, 0, 2, 0, 0, 0, 0],
            [0, 0, 6, 6, 0, 2.5, 2.5, 2.5, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2.5, 0, 0, 0, 0],
            [0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0],
            [0.1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];

    versionListLevel6 =
        [
            [0, 0, 0, 0, 0, 0, 0.2, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            [0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 6, 0, 0, 0, 0, 0, 5, 0, 0],
            [0, 0, 0, 0, 2, 2.5, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 2.5, 0, 0, 0, 0, 0],
            [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 3, 0, 0, 0, 0, 0, 8, 8],
            [0, 0, 0, 0, 0, 7, 0, 0, 0, 8, 8],
            [0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];

    versionListLevel7 =
        [
            [0, 1, 1, 1, 0, 0.2, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 8, 0, 0],
            [0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0],
            [0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0],
            [0, 0, 2.5, 2.5, 2.5, 0, 0, 5, 5, 0, 0],
            [0, 0, 2.5, 2, 2.5, 0, 0, 0, 0, 0, 0],
            [0, 0, 2.5, 2.5, 2.5, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 3.5, 3, 0],
            [0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 4]
        ];

}

chooseLevel();
var gamePlayed1 = false;
var gamePlayed2 = false;
var gamePlayed3 = false;
var existingLabels = false;

//put following in function because it was being called repetitively
function hideElements() {
    $("#submit").hide();
    $(".gameImg").attr("src", "");
    $(".reaction").hide();
    $(".fire").hide();
    $(".metal").hide();
    $(".ice").hide();
    $(".gameImg1").hide();
    $(".gameImg2").hide();
    $(".gameImg3").hide();
    $("#submitmetal").hide();
    $("#submitice").hide();
}

function chooseLevel() {
    if (currentLevel > 1) {
        $(".functions").show();
        $(".side-navigation").show();
        $('.navigation').hide();
        $("head link#levels").attr("href", "css/app-advance.css");
    }
    loadVersions();
    if (currentLevel === 0) {

        // Randomise number between 1 and 4 to represent Level 0 version
        version = Math.floor((Math.random() * 4));
        console.log("Level " + currentLevel + " , version " + version);

        // Assign randomised version number to map for level 0
        map = versionListLevel0[version];
        insertDOM0();
        setTimeout(instructions, 750); //instructions
        gamePlayed1 = false;
        gamePlayed2 = false;
        gamePlayed3 = false;
        existingLabels = false;
        solvedfire = false;
        solvedmetal = false;
        solvedice = false;
        $(".labels").text("");
        $(".gif").attr("src", "img/instruction/instruction1.gif");
        $(".functions").hide();
        $(".side-navigation").hide();
        $('.navigation').show();
        $("head link#levels").attr("href", "css/app-simple.css");
        hideElements()
    }

    //currently planets level (planet with index 2 has danger zone)
    if (currentLevel === 1) {

        // Randomise number between 1 and 4 to represent Level 1 version
        version = Math.floor((Math.random() * 4));
        console.log("Level " + currentLevel + " , version " + version);


        // Assign randomised version number to map for level 1
        map = versionListLevel1[version];

        insertDOM1();
        setTimeout(instructionsTwo, 750); //instructions
        gamePlayed1 = false;
        gamePlayed2 = false;
        gamePlayed3 = false;
        existingLabels = false;
        solvedfire = false;
        solvedmetal = false;
        solvedice = false;
        $(".labels").text("");
        $(".gif").attr("src", "img/instruction/instruction2.gif");
        $(".functions").hide();
        $(".side-navigation").hide();
        $('.navigation').show();
        $("head link#levels").attr("href", "css/app-simple.css");
        hideElements()
    }

    // if level 2:
    if (currentLevel === 2) {


        // Randomise number between 1 and 4 to represent Level 2 version
        version = Math.floor((Math.random() * 4));
        console.log("Level " + currentLevel + " , version " + version);

        // Assign randomised version number to map for level 2
        map = versionListLevel2[version];

        insertDOM2();
        setTimeout(instructionsThree, 750); //instructions
        gamePlayed1 = false;
        gamePlayed2 = false;
        gamePlayed3 = false;
        existingLabels = false;
        solvedfire = false;
        solvedmetal = false;
        solvedice = false;
        $(".labels").text("");
        $(".gif").attr("src", "img/instruction/instruction3.gif");
    }

    if (currentLevel === 3) {
        // Randomise number between 1 and 4 to represent Level 3 version
        version = Math.floor((Math.random() * 4));
        console.log("Level " + currentLevel + " , version " + version);

        // Assign randomised version number to map for level 3
        map = versionListLevel3[version];

        insertDOM3();
        setTimeout(instructionsFour, 750); //instructions
        gamePlayed1 = false;
        gamePlayed2 = false;
        gamePlayed3 = false;
        existingLabels = false;
        solvedfire = false;
        solvedmetal = false;
        solvedice = false;
        $(".labels").text("");
        $(".gif").attr("src", "img/instruction/instruction4.gif");
    }

    if (currentLevel === 4) {
        // Randomise number between 1 and 4 to represent Level 4 version
        //version = Math.floor((Math.random() * 4));
        //console.log("Level " + currentLevel + " , version " + version);
        console.log("Level " + currentLevel);

        // Assign randomised version number to map for level 4
        //map = versionListLevel4[version];
        map = versionListLevel4;

        insertDOM4();
        setTimeout(instructionsFive, 750); //instructions
        gamePlayed1 = false;
        gamePlayed2 = false;
        gamePlayed3 = false;
        existingLabels = false;
        solvedfire = false;
        solvedmetal = false;
        solvedice = false;
        $(".labels").text("");

    }
    if (currentLevel === 5) {
        // Randomise number between 1 and 4 to represent Level 5 version
        //version = Math.floor((Math.random() * 4));
        //console.log("Level " + currentLevel + " , version " + version);
        console.log("Level " + currentLevel);
        // Assign randomised version number to map for level 4
        map = versionListLevel5;

        insertDOM5();
        closeModal();
        gamePlayed1 = false;
        gamePlayed2 = false;
        gamePlayed3 = false;
        existingLabels = false;
        solvedfire = false;
        solvedmetal = false;
        solvedice = false;
        $(".labels").text("");

    }

    if (currentLevel === 6) {
        // Randomise number between 1 and 4 to represent Level 5 version
        //version = Math.floor((Math.random() * 4));
        //console.log("Level " + currentLevel + " , version " + version);
        console.log("Level " + currentLevel);

        // Assign randomised version number to map for level 4
        map = versionListLevel6;

        insertDOM6();
        closeModal();
        gamePlayed1 = false;
        gamePlayed2 = false;
        gamePlayed3 = false;
        existingLabels = false;
        solvedfire = false;
        solvedmetal = false;
        solvedice = false;
        $(".labels").text("");

    }

    if (currentLevel === 7) {
        // Randomise number between 1 and 4 to represent Level 5 version
        //version = Math.floor((Math.random() * 4));
        //console.log("Level " + currentLevel + " , version " + version);
        console.log("Level " + currentLevel);

        // Assign randomised version number to map for level 4
        map = versionListLevel7;

        insertDOM7();
        closeModal();
        gamePlayed1 = false;
        gamePlayed2 = false;
        gamePlayed3 = false;
        existingLabels = false;
        solvedfire = false;
        solvedmetal = false;
        solvedice = false;
        $(".labels").text("");

    }
}


function insertCSS() {
    $rocketAnimate.attr('src', 'img/playfield/spaceship_pink.png').css({
        'position': 'absolute',
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop,
        'max-height': 'auto',
        'max-width': '9%',
        'z-index': '1',
        'opacity': '1'
    });
    $rocketAnimateRight.attr('src', 'img/playfield/spaceship_pink_right.png').css({
        'position': 'absolute',
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop,
        'max-height': 'auto',
        'max-width': '9%',
        'z-index': '1',
        'opacity': '0'
    });
    $rocketAnimateDown.attr('src', 'img/playfield/spaceship_pink_down.png').css({
        'position': 'absolute',
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop,
        'max-height': 'auto',
        'max-width': '9%',
        'z-index': '1',
        'opacity': '0'
    });
    $rocketAnimateLeft.attr('src', 'img/playfield/spaceship_pink_left.png').css({
        'position': 'absolute',
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop,
        'max-height': 'auto',
        'max-width': '9%',
        'z-index': '1',
        'opacity': '0'
    });


    if (currentLevel < 7) {
        $planetDestination.attr('src', 'img/playfield/planets/destinationplanets/' + planetDestinationImage).css({
            'position': 'absolute',
            'margin-left': destinationMarginLeft,
            'margin-top': destinationMarginTop,
            'max-height': 'auto',
            'max-width': '18%',
            'transform': "rotate(12deg)"
        });
    }

    else if (currentLevel === 7) {
        $planetDestination.attr('src', 'img/playfield/planets/destinationplanets/' + planetDestinationImage).css({
            'position': 'absolute',
            'margin-left': destinationMarginLeft,
            'margin-top': destinationMarginTop,
            'max-height': 'auto',
            'max-width': '15%',
            'transform': "rotate(31deg)"
        });
    }

    $asteroid.attr('src', 'img/playfield/asteroid.png').css({
        'position': 'absolute',
        'margin-left': asteroidMarginLeft,
        'margin-top': asteroidMarginTop,
        'max-height': 'auto',
        'max-width': '9%'

    });

    $fallingStar.attr('src', 'img/playfield/shootingstar.png').css({
        'position': 'absolute',
        'margin-left': fallingStarMarginLeft,
        'margin-top': fallingStarMarginTop,
        'max-height': 'auto',
        'max-width': '12%',
    });

    $originalRocketSpace.attr('src', 'img/playfield/start_pos.png').css({
        'position': 'absolute',
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop,
        'max-height': 'auto',
        'max-width': '9%',
    });

    $planetFire.attr('src', 'img/playfield/planets/planet_fire.png').css({
        'position': 'absolute',
        'margin-left': planetFireMarginLeft,
        'margin-top': planetFireMarginTop,
        'max-height': 'auto',
        'max-width': planetFireWidth,
    });

    $planetMetal.attr('src', 'img/playfield/planets/planet_metal.png').css({
        'position': 'absolute',
        'margin-left': planetMetalMarginLeft,
        'margin-top': planetMetalMarginTop,
        'max-height': 'auto',
        'max-width': planetMetalWidth,
    });

    $planetEarth.attr('src', 'img/playfield/planets/planet_earth.png').css({
        'position': 'absolute',
        'margin-left': planetEarthMarginLeft,
        'margin-top': planetEarthMarginTop,
        'max-height': 'auto',
        'max-width': planetEarthWidth,
    });
    $planetMoon.attr('src', 'img/playfield/planets/planet_moon.png').css({
        'position': 'absolute',
        'margin-left': planetMoonMarginLeft,
        'margin-top': planetMoonMarginTop,
        'max-height': 'auto',
        'max-width': planetMoonWidth,
    });
    $planetLava.attr('src', 'img/playfield/planets/planet_lava.png').css({
        'position': 'absolute',
        'margin-left': planetLavaMarginLeft,
        'margin-top': planetLavaMarginTop,
        'max-height': 'auto',
        'max-width': planetLavaWidth,
    });
    $planetIce.attr('src', 'img/playfield/planets/planet_ice.png').css({
        'position': 'absolute',
        'margin-left': planetIceMarginLeft,
        'margin-top': planetIceMarginTop,
        'max-height': 'auto',
        'max-width': planetIceWidth,
    });
}


/*JQUERY VARIABLES*/
//modal
var $modalText = $("#modalText");
var $modalTitle = $("#title");
var $modalImage = $("#modalImage");
var $modalNext = $("#next");
var $point = $("#point");
var $commandsOverlay = $("#commandsoverlay");
var $winModal = $("#myModalTwo");

//jQuery canvas elements
var $planetFire;
var $planetMetal;
var $planetDestination;
var $planetEarth;
var $planetIce;
var $planetMoon;
var $planetLava;
var $rocket;
var $rocketAnimate;
var $rocketAnimateRight;
var $rocketAnimateLeft;
var $rocketAnimateDown;
var $originalRocketSpace;
var $hint;
var $helpDot;
var $helpButton;
var $home;
var $homeDot;
var $asteroid;
var $fallingStar;

//putting it in a function because variables can only be assigned after the images have been created in the insertDOMandCSS functions
function jQueryVariables() {
    $hint = $("#hintSimple");
    $helpDot = $(".dot-help");
    $helpButton = $(".help-button");
    $planetEarth = $("#planetEarth");
    $planetDestination = $("#planetDestination");
    $planetMetal = $("#planetMetal");
    $planetIce = $("#planetIce");
    $planetFire = $("#planetFire");
    $planetMoon = $("#planetMoon");
    $planetLava = $("#planetLava");
    $rocket = $(".rocket");
    $rocketAnimate = $("#rocketman");
    $rocketAnimateRight = $("#rocketmanRight");
    $rocketAnimateDown = $("#rocketmanDown");
    $rocketAnimateLeft = $("#rocketmanLeft");
    $originalRocketSpace = $("#originalrocketspace");
    $home = $("#home");
    $homeDot = $(".dot-home");
    $asteroid = $("#asteroid");
    $fallingStar = $("#fallingstar");
}

//jQuery accessing arrows
var $right = $("#right");
var $left = $("#left");
var $up = $("#up");
var $down = $("#down");
var $functTwoSelect = $("#functiontwoselect");
var $run = $("#run");

//jQuery icons
var $mainFunctionIcon = $("#mainfunction");
var $functionTwoIcon = $("#functiontwo");

//jQuery command display field
var $algoSpace = $(".algo-space");
var $funcSpace = $(".func-space");

/*END OF JQUERY VARIABLES*/


function insertDOM0() {
    // map 0 selected
    // next step: insert img tags

    $('.canvas')
        .prepend('<img id="rocketman" class="rocket"/>')
        .prepend('<img id="rocketmanRight" class="rocket"/>')
        .prepend('<img id="rocketmanDown" class="rocket"/>')
        .prepend('<img id="rocketmanLeft" class="rocket"/>')
        .prepend('<img id="planetDestination"/>')
        .prepend('<img id ="originalrocketspace"/>');

    jQueryVariables(); //calling function that puts above img elements into variables

    //number of moves you can make
    algorithmLevelMoves = 10;
    functionTwoLevelMoves = 4;
    planetDestinationImage = "1.png";

    switch (version) {
        case 0:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '18.2%';
            rocketMarginTop = '45.5%';

            //defining the rocket coordinates
            rocketX = 100;
            rocketY = 300;

            //defining the destination coordinates
            destinationMarginLeft = '58.5%';
            destinationMarginTop = '39%';

            break;
        case 1:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '45.5%';
            rocketMarginTop = '18.2%';

            //defining the rocket coordinates
            rocketX = 250;
            rocketY = 150;

            //defining the destination coordinates
            destinationMarginLeft = '4%';
            destinationMarginTop = '57%';

            break;
        case 2:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '45.5%';
            rocketMarginTop = '55%';

            //defining the rocket coordinates
            rocketX = 250;
            rocketY = 350;

            //defining the destination coordinates
            destinationMarginLeft = '40%';
            destinationMarginTop = '3%';

            break;
        case 3:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '45.5%';
            rocketMarginTop = '9%';

            //defining the rocket coordinates
            rocketX = 250;
            rocketY = 100;

            //defining the destination coordinates
            destinationMarginLeft = '40%';
            destinationMarginTop = '75%';

            break;
    }
    rocketX1 = rocketX;
    rocketY1 = rocketY;
    insertCSS();

}


// below function loads DOM and CSS for map 1 only
function insertDOM1() {
    // a function to load DOM and CSS elements based on map.

    // map 1 selected
    // next step: insert img tags

    $('.canvas')
        .prepend('<img id="rocketman" class="rocket"/>')
        .prepend('<img id="rocketmanRight" class="rocket"/>')
        .prepend('<img id="rocketmanDown" class="rocket"/>')
        .prepend('<img id="rocketmanLeft" class="rocket"/>')
        .prepend('<img id="planetMetal"/>')
        .prepend('<img id="planetFire"/>')
        .prepend('<img id="planetDestination"/>')
        .prepend('<img id ="originalrocketspace"/>');

    jQueryVariables(); //calling function that puts above img elements into variables

    //number of moves you can make
    algorithmLevelMoves = 10;
    functionTwoLevelMoves = 4;

    planetFireWidth = '9%';
    planetMetalWidth = '9%';

    planetDestinationImage = "2.png";

    switch (version) {
        case 0:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '27.4%';
            rocketMarginTop = '72.75%';

            //defining the rocket coordinates
            rocketX = 150;
            rocketY = 450;

            //defining the destination coordinates
            destinationMarginLeft = '40%';
            destinationMarginTop = '3%';

            // defining the planet coordinates
            planetMetalMarginLeft = '27.6%';
            planetMetalMarginTop = '63.75%';

            planetFireMarginLeft = '45.4%';
            planetFireMarginTop = '36.5%';


            break;
        case 1:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '27.4%';
            rocketMarginTop = '72.75%';

            //defining the rocket coordinates
            rocketX = 150;
            rocketY = 450;

            //defining the destination coordinates
            destinationMarginLeft = '40%';
            destinationMarginTop = '3%';

            // defining the planet coordinates
            planetMetalMarginLeft = '54.6%';
            planetMetalMarginTop = '72.75%';

            planetFireMarginLeft = '27.4%';
            planetFireMarginTop = '36.5%';

            break;
        case 2:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '63.75%';
            rocketMarginTop = '36%';

            //defining the rocket coordinates
            rocketX = 350;
            rocketY = 250;

            //defining the destination coordinates
            destinationMarginLeft = '4%';
            destinationMarginTop = '75%';

            // defining the planet coordinates
            planetMetalMarginLeft = '54.6%';
            planetMetalMarginTop = '72.75%';

            planetFireMarginLeft = '27.4%';
            planetFireMarginTop = '36.5%';

            break;
        case 3:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '27.4%';
            rocketMarginTop = '36.4%';

            //defining the rocket coordinates
            rocketX = 150;
            rocketY = 250;

            //defining the destination coordinates
            destinationMarginLeft = '68%';
            destinationMarginTop = '3%';

            // defining the planet coordinates
            planetMetalMarginLeft = '82.3%';
            planetMetalMarginTop = '36.4%';

            planetFireMarginLeft = '45.4%';
            planetFireMarginTop = '9.5%';

            break;
    }
    rocketX1 = rocketX;
    rocketY1 = rocketY;
    insertCSS();
}

// Insert DOM and CSS for map 2
function insertDOM2() {
    // map 2 selected
    // next step: insert img tags for lvl 2
    $('.canvas')
        .prepend('<img id="planetIce"/>')
        .prepend('<img id="planetEarth"/>')
        .prepend('<img id="planetDestination"/>')
        .prepend('<img id="planetFire"/>')
        .prepend('<img id="planetMetal"/>')
        .prepend('<img id="rocketman" class="rocket"/>')
        .prepend('<img id="rocketmanRight" class="rocket"/>')
        .prepend('<img id="rocketmanDown" class="rocket"/>')
        .prepend('<img id="rocketmanLeft" class="rocket"/>')
        .prepend('<img id ="originalrocketspace"/>');

    jQueryVariables(); //calling function that puts above img elements into variables

    //number of moves you can make
    algorithmLevelMoves = 10;
    functionTwoLevelMoves = 4;

    planetFireWidth = '9%';
    planetMetalWidth = '9%';
    planetIceWidth = '15%';
    planetEarthWidth = '9%';

    planetDestinationImage = "3.png";


    switch (version) {
        case 0:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '63.7%';
            rocketMarginTop = '72.75%';

            //defining the rocket coordinates
            rocketX = 350;
            rocketY = 450;

            //defining the destination coordinates
            destinationMarginLeft = '22%';
            destinationMarginTop = '3%';

            // defining the metal planet coordinates
            planetMetalMarginLeft = '27%';
            planetMetalMarginTop = '36.7%';

            // defining the fire planet coordinates
            planetFireMarginLeft = '45%';
            planetFireMarginTop = '9.55%';

            // defining the ice planet coordinates
            planetIceMarginLeft = '38%';
            planetIceMarginTop = '56%';

            // defining the Earth planet coordinates
            planetEarthMarginLeft = '27.5%';
            planetEarthMarginTop = '18.5%';

            break;
        case 1:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '36.4%';
            rocketMarginTop = '73%';

            //defining the rocket coordinates
            rocketX = 200;
            rocketY = 450;

            //defining the destination coordinates
            destinationMarginLeft = '58.5%';
            destinationMarginTop = '3%';

            // defining the metal planet coordinates
            planetMetalMarginLeft = '27.4%';
            planetMetalMarginTop = '27%';

            // defining the fire planet coordinates
            planetFireMarginLeft = '27.4%';
            planetFireMarginTop = '54.55%';

            // defining the ice planet coordinates
            planetIceMarginLeft = '56%';
            planetIceMarginTop = '38%';

            // defining the Earth planet coordinates
            planetEarthMarginLeft = '36.75%';
            planetEarthMarginTop = '63.75%';

            break;
        case 2:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '27.4%';
            rocketMarginTop = '81.75%';

            //defining the rocket coordinates
            rocketX = 150;
            rocketY = 500;

            //defining the destination coordinates
            destinationMarginLeft = '58.5%';
            destinationMarginTop = '3%';

            // defining the metal planet coordinates
            planetMetalMarginLeft = '18%';
            planetMetalMarginTop = '64%';

            // defining the fire planet coordinates
            planetFireMarginLeft = '18.4%';
            planetFireMarginTop = '45.55%';

            // defining the ice planet coordinates
            planetIceMarginLeft = '47%';
            planetIceMarginTop = '28%';

            // defining the Earth planet coordinates
            planetEarthMarginLeft = '72.75%';
            planetEarthMarginTop = '45.55%';

            break;
        case 3:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '36.4%';
            rocketMarginTop = '81.75%';

            //defining the rocket coordinates
            rocketX = 200;
            rocketY = 500;

            //defining the destination coordinates
            destinationMarginLeft = '58.5%';
            destinationMarginTop = '3%';

            // defining the metal planet coordinates
            planetMetalMarginLeft = '27.3%';
            planetMetalMarginTop = '63.7%';

            // defining the fire planet coordinates
            planetFireMarginLeft = '27.4%';
            planetFireMarginTop = '45.55%';

            // defining the ice planet coordinates
            planetIceMarginLeft = '56.6%';
            planetIceMarginTop = '27.4%';

            // defining the Earth planet coordinates
            planetEarthMarginLeft = '63.75%';
            planetEarthMarginTop = '45.55%';

            break;
    }
    rocketX1 = rocketX;
    rocketY1 = rocketY;
    insertCSS();


}

function insertDOM3() {

    $('.canvas')
        .prepend('<img id="planetDestination"/>')
        .prepend('<img id="planetFire"/>')
        .prepend('<img id="rocketman" class="rocket"/>')
        .prepend('<img id="rocketmanRight" class="rocket"/>')
        .prepend('<img id="rocketmanDown" class="rocket"/>')
        .prepend('<img id="rocketmanLeft" class="rocket"/>')
        .prepend('<img id="asteroid"/>')
        .prepend('<img id ="fallingstar"/>')
        .prepend('<img id ="originalrocketspace"/>');

    jQueryVariables(); //calling function that puts above img elements into variables

    //number of moves you can make
    algorithmLevelMoves = 10;
    functionTwoLevelMoves = 4;
    planetFireWidth = '9%';

    planetDestinationImage = "4.png";

    switch (version) {
        case 0:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '54.7%';
            rocketMarginTop = '63.5%';

            asteroidMarginLeft = '0%';
            asteroidMarginTop = '27.5%';
            asteroidX = 0;

            fallingStarMarginLeft = '62.5%';
            fallingStarMarginTop = '16%';
            fallingStarY = 150;

            //defining the rocket coordinates
            rocketX = 300;
            rocketY = 400;

            //defining the destination coordinates
            destinationMarginLeft = '58.5%';
            destinationMarginTop = '3%';

            // Fire planet coordinates
            planetFireMarginLeft = '54.74%';
            planetFireMarginTop = '54.55%';

            break;
        case 1:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '18.4%';
            rocketMarginTop = '45.5%';

            asteroidMarginLeft = '0%';
            asteroidMarginTop = '27.5%';
            asteroidX = 0;

            fallingStarMarginLeft = '17%';
            fallingStarMarginTop = '7%';
            fallingStarY = 50;

            //defining the rocket coordinates
            rocketX = 100;
            rocketY = 300;

            //defining the destination coordinates
            destinationMarginLeft = '49%';
            destinationMarginTop = '3%';

            // Fire planet coordinates
            planetFireMarginLeft = '27.4%';
            planetFireMarginTop = '36.55%';

            break;
        case 2:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '9.4%';
            rocketMarginTop = '18.5%';

            asteroidMarginLeft = '0%';
            asteroidMarginTop = '27.5%';
            asteroidX = 0;

            fallingStarMarginLeft = '17%';
            fallingStarMarginTop = '7%';
            fallingStarY = 50;

            //defining the rocket coordinates
            rocketX = 50;
            rocketY = 150;

            //defining the destination coordinates
            destinationMarginLeft = '76.5%';
            destinationMarginTop = '48%';

            // Fire planet coordinates
            planetFireMarginLeft = '54.7%';
            planetFireMarginTop = '18.55%';

            break;
        case 3:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '36.4%';
            rocketMarginTop = '63.5%';

            asteroidMarginLeft = '0%';
            asteroidMarginTop = '27.5%';
            asteroidX = 0;

            fallingStarMarginLeft = '62.5%';
            fallingStarMarginTop = '16%';
            fallingStarY = 150;

            //defining the rocket coordinates
            rocketX = 200;
            rocketY = 400;

            //defining the destination coordinates
            destinationMarginLeft = '58.5%';
            destinationMarginTop = '3%';

            // Fire planet coordinates
            planetFireMarginLeft = '27.4%';
            planetFireMarginTop = '45.55%';

            break;
    }
    rocketX1 = rocketX;
    rocketY1 = rocketY;
    originalAsteroidX = asteroidX;
    originalFallingStarY = fallingStarY;
    insertCSS();
}

function insertDOM4() {
    $('.canvas')
        .prepend('<img id="planetDestination"/>')
        .prepend('<img id="planetFire"/>')
        .prepend('<img id="rocketman" class="rocket"/>')
        .prepend('<img id="rocketmanRight" class="rocket"/>')
        .prepend('<img id="rocketmanDown" class="rocket"/>')
        .prepend('<img id="rocketmanLeft" class="rocket"/>')
        .prepend('<img id="asteroid"/>')
        .prepend('<img id ="fallingstar"/>')
        .prepend('<img id ="planetMetal"/>')
        .prepend('<img id ="planetEarth"/>')
        .prepend('<img id ="planetIce"/>')
        .prepend('<img id ="planetLava"/>')
        .prepend('<img id ="planetMoon"/>')
        .prepend('<img id ="originalrocketspace"/>');

    jQueryVariables(); //calling function that puts above img elements into variables

    //number of moves you can make
    algorithmLevelMoves = 10;
    functionTwoLevelMoves = 4;

    planetDestinationImage = "5.png";

    //for resetting position of rocket - value will change depending on level
    rocketMarginLeft = '45.5%';
    rocketMarginTop = '73%';

    asteroidMarginLeft = '0%';
    asteroidMarginTop = '27.5%';
    asteroidX = 0;

    fallingStarMarginLeft = '62.5%';
    fallingStarMarginTop = '16%';
    fallingStarY = 150;

    //defining the rocket coordinates
    rocketX = 300;
    rocketY = 450;

    //defining the destination coordinates
    destinationMarginLeft = '58.5%';
    destinationMarginTop = '3%';

    planetFireMarginLeft = '54%';
    planetFireMarginTop = '55%';
    planetFireWidth = '9%';

    planetMetalMarginLeft = '18%';
    planetMetalMarginTop = '54%';
    planetMetalWidth = '9%';

    planetEarthMarginLeft = '82%';
    planetEarthMarginTop = '55%';
    planetEarthWidth = '9%';

    planetMoonMarginLeft = '27%';
    planetMoonMarginTop = '36%';
    planetMoonWidth = '9%';

    planetLavaMarginLeft = '10%';
    planetLavaMarginTop = '11%';
    planetLavaWidth = '15%';

    planetIceMarginLeft = '36.5%';
    planetIceMarginTop = '18%';
    planetIceWidth = '9%';

    rocketX1 = rocketX;
    rocketY1 = rocketY;
    originalAsteroidX = asteroidX;
    originalFallingStarY = fallingStarY;
    insertCSS();
}

function insertDOM5() {
    // map 5 selected
    // next step: insert img tags for lvl 5
    $('.canvas')
        .prepend('<img id="planetLava"/>')
        .prepend('<img id="planetEarth"/>')
        .prepend('<img id="planetDestination"/>')
        .prepend('<img id="planetFire"/>')
        .prepend('<img id="rocketman" class="rocket"/>')
        .prepend('<img id="rocketmanRight" class="rocket"/>')
        .prepend('<img id="rocketmanDown" class="rocket"/>')
        .prepend('<img id="rocketmanLeft" class="rocket"/>')
        .prepend('<img id="asteroid"/>')
        .prepend('<img id ="fallingstar"/>')
        .prepend('<img id ="planetMoon"/>')
        .prepend('<img id ="originalrocketspace"/>');

    jQueryVariables(); //calling function that puts above img elements into variables

    //number of moves you can make
    algorithmLevelMoves = 10;
    functionTwoLevelMoves = 4;

    planetDestinationImage = "6.png";

    planetEarthWidth = '18%';
    planetMoonWidth = '23%';
    planetFireWidth = '9%';
    planetLavaWidth = '9%';

    //for resetting position of rocket - value will change depending on level
    rocketMarginLeft = '36.4%';
    rocketMarginTop = '72.75%';

    //defining the rocket coordinates
    rocketX = 200;
    rocketY = 450;

    //defining the destination coordinates
    destinationMarginLeft = '40.5%';
    destinationMarginTop = '3%';

    asteroidMarginLeft = '0%';
    asteroidMarginTop = '72.5%';
    asteroidX = 0;

    fallingStarMarginLeft = '81%';
    fallingStarMarginTop = '7%';
    fallingStarY = 50;

    // defining the lava planet coordinates
    planetLavaMarginLeft = '36.4%';
    planetLavaMarginTop = '45.7%';

    // defining the fire planet coordinates
    planetFireMarginLeft = '54.6%';
    planetFireMarginTop = '18.2%';

    // defining the lava planet coordinates
    planetEarthMarginLeft = '18.2%';
    planetEarthMarginTop = '18.7%';

    // defining the moon planet coordinates
    planetMoonMarginLeft = '61%';
    planetMoonMarginTop = '52%';


    rocketX1 = rocketX;
    rocketY1 = rocketY;
    originalAsteroidX = asteroidX;
    originalFallingStarY = fallingStarY;
    insertCSS();
}

function insertDOM6() {
    $('.canvas')
        .prepend('<img id="planetDestination"/>')
        .prepend('<img id="planetFire"/>')
        .prepend('<img id="rocketman" class="rocket"/>')
        .prepend('<img id="rocketmanRight" class="rocket"/>')
        .prepend('<img id="rocketmanDown" class="rocket"/>')
        .prepend('<img id="rocketmanLeft" class="rocket"/>')
        .prepend('<img id="asteroid"/>')
        .prepend('<img id ="fallingstar"/>')
        .prepend('<img id ="planetMetal"/>')
        .prepend('<img id ="planetEarth"/>')
        .prepend('<img id ="planetIce"/>')
        .prepend('<img id ="planetLava"/>')
        .prepend('<img id ="planetMoon"/>')
        .prepend('<img id ="originalrocketspace"/>');

    jQueryVariables(); //calling function that puts above img elements into variables

    //number of moves you can make
    algorithmLevelMoves = 10;
    functionTwoLevelMoves = 4;

    planetDestinationImage = "7.png";

    //for resetting position of rocket - value will change depending on level
    rocketMarginLeft = '9%';
    rocketMarginTop = '82%';

    asteroidMarginLeft = '0%';
    asteroidMarginTop = '18%';
    asteroidX = 0;

    fallingStarMarginLeft = '53.4%';
    fallingStarMarginTop = '-2%';
    fallingStarY = 0;

    //defining the rocket coordinates
    rocketX = 50;
    rocketY = 500;

    //defining the destination coordinates
    destinationMarginLeft = '76%';
    destinationMarginTop = '3%';

    planetFireMarginLeft = '36%';
    planetFireMarginTop = '37%';
    planetFireWidth = '9%';

    planetMetalMarginLeft = '20%';
    planetMetalMarginTop = '56%';
    planetMetalWidth = '15%';

    planetEarthMarginLeft = '18%';
    planetEarthMarginTop = '28%';
    planetEarthWidth = '9%';

    planetMoonMarginLeft = '45.5%';
    planetMoonMarginTop = '73%';
    planetMoonWidth = '9%';

    planetLavaMarginLeft = '83%';
    planetLavaMarginTop = '65%';
    planetLavaWidth = '15%';

    planetIceMarginLeft = '72.5%';
    planetIceMarginTop = '27%';
    planetIceWidth = '9%';

    rocketX1 = rocketX;
    rocketY1 = rocketY;
    originalAsteroidX = asteroidX;
    originalFallingStarY = fallingStarY;
    insertCSS();

}

function insertDOM7() {
    $('.canvas')
        .prepend('<img id="planetDestination"/>')
        .prepend('<img id="planetFire"/>')
        .prepend('<img id="rocketman" class="rocket"/>')
        .prepend('<img id="rocketmanRight" class="rocket"/>')
        .prepend('<img id="rocketmanDown" class="rocket"/>')
        .prepend('<img id="rocketmanLeft" class="rocket"/>')
        .prepend('<img id="asteroid"/>')
        .prepend('<img id ="fallingstar"/>')
        .prepend('<img id ="planetMetal"/>')
        .prepend('<img id ="planetEarth"/>')
        .prepend('<img id ="planetIce"/>')
        .prepend('<img id ="planetLava"/>')
        .prepend('<img id ="planetMoon"/>')
        .prepend('<img id ="originalrocketspace"/>');

    jQueryVariables(); //calling function that puts above img elements into variables

    //number of moves you can make
    algorithmLevelMoves = 10;
    functionTwoLevelMoves = 4;

    planetDestinationImage = "planet_destination.png";

    //for resetting position of rocket - value will change depending on level
    rocketMarginLeft = '91%';
    rocketMarginTop = '82%';

    //defining the rocket coordinates
    rocketX = 550;
    rocketY = 500;

    asteroidMarginLeft = '0%';
    asteroidMarginTop = '27.5%';
    asteroidX = 0;

    fallingStarMarginLeft = '44.5%';
    fallingStarMarginTop = '-2%';
    fallingStarY = 0;

    //defining the destination coordinates
    destinationMarginLeft = '15%';
    destinationMarginTop = '0%';

    planetFireMarginLeft = '27%';
    planetFireMarginTop = '55%';
    planetFireWidth = '9%';

    planetMetalMarginLeft = '82%';
    planetMetalMarginTop = '73%';
    planetMetalWidth = '9%';

    planetEarthMarginLeft = '36%';
    planetEarthMarginTop = '18%';
    planetEarthWidth = '9%';

    planetMoonMarginLeft = '8%';
    planetMoonMarginTop = '81%';
    planetMoonWidth = '12%';

    planetLavaMarginLeft = '73%';
    planetLavaMarginTop = '9.1%';
    planetLavaWidth = '9%';

    planetIceMarginLeft = '65.5%';
    planetIceMarginTop = '38%';
    planetIceWidth = '15%';

    rocketX1 = rocketX;
    rocketY1 = rocketY;
    originalAsteroidX = asteroidX;
    originalFallingStarY = fallingStarY;
    insertCSS();

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

function findAsteroidPosition() {
    var asteroidArray = [];
    for (var i in map) {
        for (var j in map[i]) {
            if (map[i][j] == 0.1) {
                console.log("Asteroid is at index [" + i + "][" + j + "]");
                asteroidArray.push(parseInt(i), parseInt(j));
                return asteroidArray;

            }
        }
    }
}

var asteroidPosition = findAsteroidPosition();

function findStarPosition() {
    var starArray = [];
    for (var i in map) {
        for (var j in map[i]) {
            if (map[i][j] == 0.2) {
                console.log("Star is at index [" + i + "][" + j + "]");
                starArray.push(parseInt(i), parseInt(j));
                return starArray;
            }
        }
    }
}

var starPosition = findStarPosition();


//storing original index position array in const array
var originalRocketIndex = rocketPosition;

var originalAsteroidIndex = asteroidPosition;

var originalStarIndex = starPosition;

// get height and width of the map
var mapHeight = map.length;
var mapWidth = map[0].length;

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
// var styleLeft = "150px";
// var styleBottom = "50px";

//number of moves you can make in level
var levelMoves;

// //defining the rocket coordinates
// moved to level checker at line 35
// var rocketX = 150;
// var rocketY = 450;

//storing original coordinates in constant variable
// const rocketX1 = rocketX;
// const rocketY1 = rocketY;

// Added images to represent space, planets etc
var black = new Image;
black.src = "img/playfield/black.png";

var ice = new Image;
ice.src = "img/playfield/planets/planet_ice.png";

var fire = new Image;
fire.src = "img/playfield/planets/planet_fire.png";

var metal = new Image;
metal.src = "img/playfield/planets/planet_metal.png";

var earth = new Image;
earth.src = "img/playfield/planets/planet_earth.png";

var moon = new Image;
moon.src = "img/playfield/planets/planet_moon.png";

var lava = new Image;
lava.src = "img/playfield/planets/planet_lava.png";

// var background = new Image;
// background.src = "playfiled bg.png";

var xPosition, yPosition = 0;


//drawing the canvas
function makeGame() {
// assigning the map array to the canvas to draw a board
    for (var i in map) {
        for (var j in map[i]) {
            if (map[i][j] === 0) {
                ctx.globalAlpha = 0.15;
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(black, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 0.1 || 0.2) {
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(black, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 1) {
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(black, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 2) {
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(fire, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 2.5) {
                ctx.globalAlpha = 0.1;
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(black, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 3) {
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(metal, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 3.5) {
                ctx.globalAlpha = 0.1;
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(black, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 4) {
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(black, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 5) {
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(ice, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 6) {
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(earth, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 7) {
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(moon, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 8) {
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(lava, xPosition, yPosition, 50, 50);
            }

            xPosition = xPosition + 50;
        }
        yPosition = yPosition + 50;
        xPosition = 0;
    }
    yPosition = 0;
}

$(document).ready(function () {
    initialise();
});

function initialise() {
    $(document).ready(function () {
        setTimeout(makeGame, 10); // weird bug, 1 setTimeout doesn't work, need two? No idea why.
        setTimeout(makeGame, 100);
    });
}

/*CHECKING WHICH FUNCTION THE USER HAS CLICKED ON TO ENTER ALGORITHM (function one array or function two array)*/
$mainFunctionIcon.click(startState);
$algoSpace.click(startState);

$functionTwoIcon.click(funcTwoState);
$funcSpace.click(funcTwoState);

function funcTwoState() {
    //update variable values that will be used in movementFunction()
    arraySelect = functionTwo; //directions selected will be put into this array
    classSelect = $(".func-space"); //images put into this class
    levelMoves = functionTwoLevelMoves; //can only enter 4 moves
    $mainFunctionIcon.css("color", "white"); //reset

    if (currentLevel >= 2) {
        $("#bg").css("background", "url(img/playfield/playfield_advance_final_highlight_functions.png)");
        $("#bg").css("background-size", "contain");
    }
}

//begin game with the main function already clicked
function startState() {
    arraySelect = algorithm; //directions selected will be put into this array
    classSelect = $(".algo-space"); //images put into this class
    levelMoves = algorithmLevelMoves; //can only enter 10 moves
    $functionTwoIcon.css("color", "white");

    if (currentLevel === 0 || 1) {
        $("#bg").css("background", "url(img/playfield/playfield_simple_final_highlight_main.jpg)");
        $("#bg").css("background-size", "contain");
        //console.log("Highlight in simple view works");
    }

    if (currentLevel >= 2) {
        $("#bg").css("background", "url(img/playfield/playfield_advance_final_highlight_main.png)");
        $("#bg").css("background-size", "contain");
    }
}

/*MOVING THE ROCKET*/
function movementFunction() {
    $right.click(function () {
        //if statement so that users can only add certain number of moves in the algorithm
        if (arraySelect.length < levelMoves) {
            something++;
            $(classSelect).append('<img src="img/playfield/right.png" id = "rightAlgorithm" alt = "Right arrow" width="20%" height="20%" class="added"/>'); //drawing image
            var rightAlgorithm = $("#rightAlgorithm").attr("id", "rightAlgorithm" + something); //unique id name for each image
            var rightPush = "right" + something;
            arraySelect.push(rightPush);
            removeMove(rightAlgorithm, rightPush, arraySelect);
        }
    });

    $left.click(function () {
        if (arraySelect.length < levelMoves) {
            something++;
            $(classSelect).append('<img src="img/playfield/left.png" id = "leftAlgorithm" alt = "Left arrow" width="20%" height="20%" class="added"/>');
            var leftAlgorithm = $("#leftAlgorithm").attr("id", "leftAlgorithm" + something);
            var leftPush = "left" + something;
            arraySelect.push(leftPush);
            removeMove(leftAlgorithm, leftPush, arraySelect);
        }
    });

    $up.click(function () {
        if (arraySelect.length < levelMoves) {
            something++;
            $(classSelect).append('<img src="img/playfield/up.png" id = "upAlgorithm" alt = "Up arrow" width="20%" height="20%" class="added"/>');
            var upAlgorithm = $("#upAlgorithm").attr("id", "upAlgorithm" + something);
            var upPush = "up" + something;
            arraySelect.push(upPush);
            removeMove(upAlgorithm, upPush, arraySelect);
        }
    });

    $down.click(function () {
        if (arraySelect.length < levelMoves) {
            something++;
            $(classSelect).append('<img src="img/playfield/down.png" id = "downAlgorithm" alt = "Down arrow" width="20%" height="20%" class="added"/>');
            var downAlgorithm = $("#downAlgorithm").attr("id", "downAlgorithm" + something);
            var downPush = "down" + something;
            arraySelect.push(downPush);
            removeMove(downAlgorithm, downPush, arraySelect);
        }
    });


    $functTwoSelect.click(function () {
        if (arraySelect.length < levelMoves) {
            if (arraySelect === algorithm) {
                something++;
                $(classSelect).append('<img src="img/playfield/algo-button.png" id = "secondfunction" alt = "Function 2 image" width="10%" height="20%" class="added"/>');
                var functionTwoAlgorithm = $("#secondfunction").attr("id", "secondfunction" + something);
                arraySelect.push(functionTwo);
                removeMove(functionTwoAlgorithm, functionTwo, arraySelect);
            }

            //handling loops (calling F2 inside F2)
            //3 is a random number - didn't want the number to be too high/an infinite loop as it would break the code
            if (arraySelect === functionTwo) {
                if (arraySelect.length > 0) {
                    for (var i = 0; i <= 3; i++) {
                        for (var j in functionTwo) {
                            functionTwo.push(functionTwo[j]);
                        }
                    }
                    something++;
                    $(classSelect).append('<img src="img/playfield/algo-button.png" id = "secondfunction" alt = "Function 2 image" width="10%" height="20%" />');
                    functionTwoAlgorithm = $("#secondfunction").attr("id", "secondfunction" + something);
                    removeMove(functionTwoAlgorithm, functionTwo, arraySelect);
                }
            }
        }
    });

    console.log("The current coordinates are: " + rocketX, rocketY);
}

//function for removing parts of algorithm
function removeMove(image, direction, thisArray) {
    image.click(function () {

            image.remove(); //removes the image clicked
            thisArray.splice(thisArray.indexOf(direction), 1); //removes index from correct array

            var images = $(".func-space").children("img"); //accessing images within function 2 grid so that we can set the function 2 array length back to
            //however many images are in the grid (easy way to reset the array)

            //if the user removes F2 from F2
            if (thisArray === functionTwo && direction === functionTwo) {
                for (var i = 0; i <= images.length; i++) {
                    functionTwo.length = images.length; //amount of images that are present
                }
            }
        }
    );
}

//booleans used to stop the danger area from being drawn every single time you click off of a modal
var fireBool = false;
var metalBool = false;
var iceBool = false;
var solvedfire = false;
var solvedmetal = false;
var solvedice = false;


//function will be updated to only come up once a mini-game has been solved
function dangerArea(planet) {
    function drawZone() {
        modal.style.display = "none";
        for (var i in map) {
            for (var j in map[i]) {
                if (planet == "fire") {
                    if ((map[i][j] === 2.5) || (map[i][j] === 2)) {
                        if (fireBool === false) {
                            ctx.globalAlpha = 0.4;
                            ctx.fillStyle = "#FF0000"; //low contrast
                            //ctx.fillStyle = "#90e7fd"; //better for accessibility / colourblindness / low vision ?
                            ctx.fillRect(xPosition, yPosition, 50, 50);
                        }
                    }
                }

                if (planet == "ice") {
                    if (map[i][j] === 5) {
                        if (iceBool === false) {
                            ctx.globalAlpha = 0.4;
                            ctx.fillStyle = "#88ff00"; //low contrast
                            ctx.fillRect(xPosition, yPosition, 50, 50);
                        }
                    }
                }

                if (planet == "metal") {
                    if ((map[i][j] === 3.5) || (map[i][j] === 3)) {
                        if (metalBool === false) {
                            ctx.globalAlpha = 0.4;
                            ctx.fillStyle = "#88ff00"; // Added Green
                            //ctx.fillStyle = "#FF0000"; //low contrast
                            //ctx.fillStyle = "#90e7fd"; //better for accessibility / colourblindness / low vision ?
                            ctx.fillRect(xPosition, yPosition, 50, 50);
                        }
                    }
                }
                xPosition = xPosition + 50;

            }
            yPosition = yPosition + 50;
            xPosition = 0;
        }
        yPosition = 0;
    }

    function checkAnswers(x, planet, solved, planetBool) {
        if ($('input[type=radio]:checked').val() == x) {
            drawZone();
            $(".modal").hide();
            $(".reaction").hide();
            planetBool = true;
            solved = true;
            $("." + planet + " label").remove();
            $("." + planet).text("You already solved the puzzle.");
        } else if ($('input[type=radio]:checked').val() != x) {
            $(".reaction").show();
            setTimeout(function () {
                $(".reaction").hide()
            }, 1000);
        }
    }

// fire planet submit
    if (planet == "fire") {
        $("#submit").click(function () {
            if ($(".gameImg1").attr("id") === "minigameone") {
                checkAnswers(0, "fire", solvedfire, fireBool)
            }
            if ($(".gameImg1").attr("id") === "minigametwo") {
                checkAnswers(0, "fire", solvedfire, fireBool)
            }
            if ($(".gameImg1").attr("id") === "minigamethree") {
                checkAnswers(2, "fire", solvedfire, fireBool)
            }
            if ($(".gameImg1").attr("id") === "minigamefour") {
                checkAnswers(2, "fire", solvedfire, fireBool)
            }
        });
    }

    //metal planet submit
    if (planet == "metal") {
        $("#submitmetal").click(function () {
            if ($(".gameImg2").attr("id") === "minigameone") {
                checkAnswers(0, "metal", solvedmetal, metalBool)
            }
            if ($(".gameImg2").attr("id") === "minigametwo") {
                checkAnswers(3, "metal", solvedmetal, metalBool)
            }
            if ($(".gameImg2").attr("id") === "minigamethree") {
                checkAnswers(2, "metal", solvedmetal, metalBool);
            }
            if ($(".gameImg2").attr("id") === "minigamefour") {
                checkAnswers(2, "metal", solvedmetal, metalBool);
            }
        });
    }
    if (planet == "ice") {
        $("#submitice").click(function () {
            if ($(".gameImg3").attr("id") === "minigameone") {
                checkAnswers(3, "ice", solvedice, iceBool);
            }
            if ($(".gameImg3").attr("id") === "minigametwo") {
                checkAnswers(4, "ice", solvedice, iceBool);
            }
            if ($(".gameImg3").attr("id") === "minigamethree") {
                checkAnswers(4, "ice", solvedice, iceBool);
            }
            if ($(".gameImg3").attr("id") === "minigamefour") {
                checkAnswers(2, "ice", solvedice, iceBool);
            }
        });
    }

}

var gamesPath = [
    ["minigameone.png", "minigame_one_0.png", "minigame_one_1.png", "minigame_one_2.png", "minigame_one_3.png", "minigame_one_4.png", "minigame_one_5.png"],
    ["minigametwo.png", "minigame_two_0.png", "minigame_two_1.png", "minigame_two_2.png", "minigame_two_3.png", "minigame_two_4.png", "minigame_two_5.png"],
    ["minigamethree.png", "minigame_three_0.png", "minigame_three_1.png", "minigame_three_2.png", "minigame_three_3.png", "minigame_three_4.png", "minigame_three_5.png"],
    ["minigamefour.png", "minigame_four_0.png", "minigame_four_1.png", "minigame_four_2.png", "minigame_four_3.png", "minigame_four_4.png", "minigame_four_5.png"],
    ["minigameone.png", "minigame_one_0.png", "minigame_one_1.png", "minigame_one_2.png", "minigame_one_3.png", "minigame_one_4.png", "minigame_one_5.png"],
    ["minigametwo.png", "minigame_two_0.png", "minigame_two_1.png", "minigame_two_2.png", "minigame_two_3.png", "minigame_two_4.png", "minigame_two_5.png"],
    ["minigamethree.png", "minigame_three_0.png", "minigame_three_1.png", "minigame_three_2.png", "minigame_three_3.png", "minigame_three_4.png", "minigame_three_5.png"],
    ["minigamefour.png", "minigame_four_0.png", "minigame_four_1.png", "minigame_four_2.png", "minigame_four_3.png", "minigame_four_4.png", "minigame_four_5.png"],
    ["minigameone.png", "minigame_one_0.png", "minigame_one_1.png", "minigame_one_2.png", "minigame_one_3.png", "minigame_one_4.png", "minigame_one_5.png"],
    ["minigametwo.png", "minigame_two_0.png", "minigame_two_1.png", "minigame_two_2.png", "minigame_two_3.png", "minigame_two_4.png", "minigame_two_5.png"],
    ["minigamethree.png", "minigame_three_0.png", "minigame_three_1.png", "minigame_three_2.png", "minigame_three_3.png", "minigame_three_4.png", "minigame_three_5.png"],
    ["minigamefour.png", "minigame_four_0.png", "minigame_four_1.png", "minigame_four_2.png", "minigame_four_3.png", "minigame_four_4.png", "minigame_four_5.png"]
];

// generate a mini game randomly
function generateMinigame(planet) {

    // create array of first elements of each index
    var arrayTitle = gamesPath.map(function (x) {
        return x[0];
    });

    //game titles
    var arrayTitleOne = arrayTitle.slice(0, 4);
    var arrayTitleTwo = arrayTitle.slice(4, 8);
    var arrayTitleThree = arrayTitle.slice(8, 12);

    // choose a random title from the new array
    var gameTitleOne = arrayTitleOne[Math.floor(Math.random() * arrayTitleOne.length)];
    var gameTitleTwo = arrayTitleTwo[Math.floor(Math.random() * arrayTitleTwo.length)];
    var gameTitleThree = arrayTitleThree[Math.floor(Math.random() * arrayTitleThree.length)];
    var solution;

    $(".gameImg1").css("width", "90%");
    $(".gameImg2").css("width", "90%");
    $(".gameImg3").css("width", "90%");

    if (gamePlayed1 === false) {
        if (planet == "fire") {
            console.log(planet);
            if (gameTitleOne == "minigameone.png") {
                solution = gamesPath[0].slice(1, 7);
                addGameimg(gameTitleOne);
            }

            if (gameTitleOne == "minigametwo.png") {
                solution = gamesPath[1].slice(1, 7);
                addGameimg(gameTitleOne);
            }

            if (gameTitleOne == "minigamethree.png") {
                solution = gamesPath[2].slice(1, 7);
                addGameimg(gameTitleOne);
            }

            if (gameTitleOne == "minigamefour.png") {
                solution = gamesPath[3].slice(1, 7);
                addGameimg(gameTitleOne);
            }
        }
    }

    if (gamePlayed2 === false) {
        if (planet == "metal") {
            console.log(planet);
            if (gameTitleTwo == "minigameone.png") {
                solution = gamesPath[4].slice(1, 7);
                addGameimg(gameTitleTwo);
            }

            if (gameTitleTwo == "minigametwo.png") {
                solution = gamesPath[5].slice(1, 7);
                addGameimg(gameTitleTwo);
            }

            if (gameTitleTwo == "minigamethree.png") {
                solution = gamesPath[6].slice(1, 7);
                addGameimg(gameTitleTwo);
            }

            if (gameTitleTwo == "minigamefour.png") {
                solution = gamesPath[7].slice(1, 7);
                addGameimg(gameTitleTwo);
            }
        }
    }


    if (gamePlayed3 === false) {
        if (planet == "ice") {
            console.log(planet);
            if (gameTitleThree == "minigameone.png") {
                solution = gamesPath[8].slice(1, 7);
                addGameimg(gameTitleThree);
            }

            if (gameTitleThree == "minigametwo.png") {
                solution = gamesPath[9].slice(1, 7);
                addGameimg(gameTitleThree);
            }

            if (gameTitleThree == "minigamethree.png") {
                solution = gamesPath[10].slice(1, 7);
                addGameimg(gameTitleThree);
            }

            if (gameTitleThree == "minigamefour.png") {
                solution = gamesPath[11].slice(1, 7);
                addGameimg(gameTitleThree);
            }
        }
    }

    function addGameimg(title) {
        showSolutions(solution);
        if (planet == "fire") {
            $(".gameImg1").attr("id", title.slice(0, -4));
            $(".gameImg1").attr("src", "img/minigames/fire/" + title);
            gamePlayed1 = true;
            existingLabels = true;
        }
        if (planet == "metal") {
            $(".gameImg2").attr("id", title.slice(0, -4));
            $(".gameImg2").attr("src", "img/minigames/metal/" + title);
            gamePlayed2 = true;
            existingLabels = true;
        }
        if (planet == "ice") {
            $(".gameImg3").attr("id", title.slice(0, -4));
            $(".gameImg3").attr("src", "img/minigames/ice/" + title);
            gamePlayed3 = true;
            existingLabels = true;
        }

    }

    function showSolutions(placeholder) {
        if (existingLabels === false) {
            $(".labels").append("<div class='fire'></div><div class='metal'></div><div class='ice'></div>")
        }
        for (var i = 0; i < placeholder.length; i++) {
            if (existingLabels === false) {
                $(".fire").append("<label><input type='radio' name='answer' value=' " + i + "'><img class='fire" + i + "'></label>");
                $(".metal").append("<label><input type='radio' name='answer' value=' " + i + "'><img class='metal" + i + "'></label>");
                $(".ice").append("<label><input type='radio' name='answer' value=' " + i + "'><img class='ice" + i + "'></label>");
            }
            if (planet == "fire") {
                $(".fire" + i).attr("src", "img/minigames/fire/" + placeholder[i]);
                $(".fire" + i).css("width", "30%");
                $(".fire" + i).css("margin-right", "2%");

            }
            if (planet == "metal") {
                $(".metal" + i).attr("src", "img/minigames/metal/" + placeholder[i]);
                $(".metal" + i).css("width", "30%");
                $(".metal" + i).css("margin-right", "2%");
            }
            if (planet == "ice") {
                $(".ice" + i).attr("src", "img/minigames/ice/" + placeholder[i]);
                $(".ice" + i).css("width", "30%");
                $(".ice" + i).css("margin-right", "2%");
            }
        }
    }

}

function clickElements() {

    $home.click(function () {
        navModal.style.display = "block";
        $point.hide();
        $commandsOverlay.hide();
    });

    $homeDot.click(function () {
        navModal.style.display = "block";
        $point.hide();
        $commandsOverlay.hide();
    });

    $helpDot.click(function () {
        modal.style.display = "block";
        $modalText.text("");
        $modalTitle.show();
        $modalTitle.text("Hint").css("font-weight", "bold");
        $modalImage.hide();
        $modalNext.hide();
        hideElements();
        $(".gif").css({"width": "100%", "margin-left": "0", "margin-top": "2%"});
        $(".gif").show();
    });

    $helpButton.click(function () {
        modal.style.display = "block";
        $modalText.text("");
        $modalTitle.show();
        $modalTitle.text("Hint").css("font-weight", "bold");
        $modalImage.hide();
        $modalNext.hide();
        hideElements();
        $(".gif").css({"width": "100%", "margin-left": "0", "margin-top": "0%"});
        $(".gif").show();

    });


    $planetFire.click(function () {
        modal.style.display = "block";
        $modalImage.show();
        $modalImage.attr("src", "img/playfield/planets/planet_fire.png").css("height", "3%", "width", "3%");
        $modalText.text("Choose the right answer to solve the puzzle.");
        $modalTitle.hide();
        $modalNext.hide();
        $point.hide();
        $commandsOverlay.hide();
        dangerArea("fire");
        generateMinigame("fire");
        $(".gameImg1").show();
        $(".gameImg2").hide();
        $(".gameImg3").hide();
        $(".fire").show();
        $(".metal").hide();
        $(".ice").hide();
        $(".gif").hide();
        if (solvedfire === false) {
            $("#submit").show();
        } else {
            $("#submit").hide();
            $(".reaction").hide();
        }

        $("#submitmetal").hide();
        $("#submitice").hide();

    });

    $planetMetal.click(function () {
        modal.style.display = "block";
        $modalImage.show();
        $modalImage.attr("src", "img/playfield/planets/planet_metal.png").css("height", "3%", "width", "3%");
        $modalText.text("Choose the right answer to solve the puzzle.");
        $modalTitle.hide();
        $modalNext.hide();
        $point.hide();
        $commandsOverlay.hide();
        dangerArea("metal");
        generateMinigame("metal");
        $(".gameImg1").hide();
        $(".gameImg2").show();
        $(".gameImg3").hide();
        $(".fire").hide();
        $(".metal").show();
        $(".ice").hide();
        $("#submit").hide();
        $("#submitmetal").show();
        $("#submitice").hide();
        $(".gif").hide();
        if (solvedmetal === false) {
            $("#submitmetal").show();
        } else {
            $("#submitmetal").hide();
            $(".reaction").hide();
        }
    });

    $planetDestination.click(function () {
        modal.style.display = "block";
        $modalImage.attr("src", "img/playfield/planets/destinationplanets/" + planetDestinationImage).css("height", "5%", "width", "5%");
        $modalImage.show();
        $modalText.text("This is your destination!");
        $modalTitle.hide();
        $modalNext.hide();
        $commandsOverlay.hide();
        $(".gif").hide();
        $point.hide();
        hideElements();
    });

    $planetIce.click(function () {
        modal.style.display = "block";
        $modalImage.show();
        $modalImage.attr("src", "img/playfield/planets/planet_ice.png").css("height", "3%", "width", "3%");
        $modalText.text("Choose the right answer to solve the puzzle.");
        $modalTitle.hide();
        $modalNext.hide();
        $("#submit").hide();
        $(".gameImg").attr("src", "");
        $(".reaction").hide();
        $point.hide();
        $commandsOverlay.hide();
        dangerArea("ice");
        generateMinigame("ice");
        $(".gameImg1").hide();
        $(".gameImg2").hide();
        $(".gameImg3").show();
        $(".fire").hide();
        $(".metal").hide();
        $(".ice").show();
        $("#submit").hide();
        $("#submitmetal").hide();
        $("#submitice").show();
        $(".gif").hide();
        if (solvedice === false) {
            $("#submitice").show();
        } else {
            $("#submitice").hide();
            $(".reaction").hide();
        }
    });

    $planetEarth.click(function () {
        modal.style.display = "block";
        $modalImage.show();
        $modalImage.attr("src", "img/playfield/planets/planet_earth.png").css("height", "5%", "width", "5%");
        $modalImage.show();
        $modalText.text("This planet is safe to fly through."); //make it safe for abstraction purposes
        $modalTitle.hide();
        $modalNext.hide();
        $point.hide();
        hideElements()
    });

    $planetMoon.click(function () {
        modal.style.display = "block";
        $modalImage.attr("src", "img/playfield/planets/planet_moon.png").css("height", "5%", "width", "5%");
        $modalImage.show();
        $modalText.text("This planet is dangerous. You cannot fly through it.");
        $modalTitle.hide();
        $modalNext.hide();
        $point.hide();
        hideElements()
    });

    $planetLava.click(function () {
        modal.style.display = "block";
        $modalImage.attr("src", "img/playfield/planets/planet_lava.png").css("height", "5%", "width", "5%");
        $modalImage.show();
        $modalText.text("This planet is dangerous. You cannot fly through it.");
        $modalTitle.hide();
        $modalNext.hide();
        $point.hide();
        $commandsOverlay.hide();
        hideElements()
    });

    $asteroid.click(function () {
        modal.style.display = "block";
        $modalImage.attr("src", "img/playfield/asteroid.png").css("height", "5%", "width", "5%");
        $modalText.text("Asteroids move from left to right.");
        $modalTitle.hide();
        $modalImage.show();
        $modalNext.hide();
        $point.hide();
        hideElements()
    });

    $fallingStar.click(function () {
        modal.style.display = "block";
        $modalImage.attr("src", "img/playfield/shootingstar.png").css("height", "5%", "width", "5%");
        $modalText.text("Falling stars move downwards.");
        $modalTitle.hide();
        $modalImage.show();
        $modalNext.hide();
        $point.hide();
        hideElements()
    });

    $rocketAnimate.click(function () {
        modal.style.display = "block";
        $modalImage.show();
        $modalImage.attr("src", "img/playfield/spaceship_pink.png").css("height", "10%", "width", "10%");
        $modalText.text("Move the rocket to its destination by using the arrow keys below.");
        $modalTitle.hide();
        $modalNext.hide();
        $point.hide();
        $commandsOverlay.hide();
        $(".gif").hide();
        hideElements()

    });

    stay.onclick = function () {
        modal.style.display = "none";
        navModal.style.display = "none";

    };


}

//every time you hit stop, all animations will return back to their original position
function originalPos() {

    $rocketAnimateRight.css({'opacity': "0"});
    $rocketAnimate.css({'opacity': "1"});
    $rocketAnimateLeft.css({'opacity': "0"});
    $rocketAnimateDown.css({'opacity': "0"});

    //reset animation
    //resetting the rocket to its default position
    // $rocketAnimate.css({
    $rocket.css({
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop
    });

    $asteroid.css({
        'margin-left': asteroidMarginLeft,
        'margin-top': asteroidMarginTop
    });

    $fallingStar.css({
        'margin-left': fallingStarMarginLeft,
        'margin-top': fallingStarMarginTop
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

    for (var i in map) {
        for (var j in map[i]) {
            if (map[i][j] === 0.1) {
                map[i][j] = 0;
            }
        }
    }

    for (var i in map) {
        for (var j in map[i]) {
            if (map[i][j] === 0.2) {
                map[i][j] = 0;
            }
        }
    }

    rocketPosition = originalRocketIndex;
    asteroidPosition = originalAsteroidIndex;
    starPosition = originalStarIndex;
}

var moveCounter = -1;

var stopClicked = false;

function stopAnimation() {
    if (stopClicked === false) {
        stopClicked = true;
        $("#play-first").attr({"src": "img/playfield/play.png"});
        $("#play-hover").attr({"src": "img/playfield/play-hover.png"});
        winAndLossCall = function () {
            //empty function, does nothing
        };
        //$rocketAnimate.attr("src", "img/playfield/spaceship_pink.png");
        winAndLossCall = oldFunction;

        //stop all queued animations
        //$rocketAnimate.stop(true);
        $rocket.stop(true);
        $asteroid.stop(true);
        $fallingStar.stop(true);

        originalPos(); //return to original position

        $run.off();
        $run.click(runButton);
        stopClicked = false;
    }
}

function runButton() {
    if (algorithm.length > 0) {
        //the function will only run if the rocket is not currently animating because otherwise if the run button is hit repeatedly
        //the rocket can go off canvas
        if (!$rocketAnimate.is(':animated')) {
            lossAndVictoryArray = [];
            originalPos();

            $("#play-first").attr({"src": "img/playfield/stop.png"});
            $("#play-hover").attr({"src": "img/playfield/stop-hover.png"});

            $run.off();
            $run.click(stopAnimation);

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
            }

        }
        moveCounter = -1;
        asteroidX = originalAsteroidX;
        fallingStarY = originalFallingStarY;
    }

}

$run.click(runButton);

// test for sound
// var rMove = new Audio("pop.wav");// TestSound
// rMove.loop = false;// TestSound

// var rVictory = new Audio("victory.wav");// TestSound
// rVictory.loop = false;// TestSound

// var rLoss = new Audio("loss.wav");// TestSound
// rLoss.loop = false;// TestSound


var lossAndVictoryArray = [];

// A variable to change the animation speed
var animationSpeed = "fast";

function moveRight() {

    if (rocketX >= canvas.width - tileWidth) {
        //$rocketAnimate.animate({'margin-left': "+=0%"}, "fast");
        $rocket.animate({'margin-left': "+=0%"}, animationSpeed);
    } else {
        asteroidAnimate();
        fallingStarAnimate();
        console.log(rocketX, rocketY);
        //$rocketAnimate.animate({'margin-left': "+=9%"}, "fast", winAndLossCall);
        $rocketAnimateRight.animate({'opacity': "1", 'margin-left': "+=9%"}, animationSpeed, winAndLossCall);
        $rocketAnimate.animate({'opacity': "0", 'margin-left': "+=9%"}, animationSpeed);
        $rocketAnimateLeft.animate({'opacity': "0", 'margin-left': "+=9%"}, animationSpeed);
        $rocketAnimateDown.animate({'opacity': "0", 'margin-left': "+=9%"}, animationSpeed);

        //$rocket.animate({'margin-left': "+=9%"}, animationSpeed, winAndLossCall); //calling function 4 times (because there's 4 images in the class?)
        rocketX += 50;
        //$rocketAnimate.attr("src", "img/playfield/spaceship_pink_right.png");
    }

    if (rocketPosition[1] < mapWidth - 1) {
        if ((map[rocketPosition[0]][rocketPosition[1] + 1] == 0.1) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 0.2) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 2) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 2.5) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 7) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 8)) {
            lossAndVictoryArray.push("lose");
        } else if (map[rocketPosition[0]][rocketPosition[1] + 1] == 1) {
            lossAndVictoryArray.push("win");

            // Metal effect - Rocket zooms out of field to nearest 0 index.
        } else if ((map[rocketPosition[0]][rocketPosition[1] + 1] == 3.5) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 3)) {

            var rocketXDistance = 50;
            var animateDistancePercent = 9;
            var nextZeroIndex = 2;
            var nextZeroFound = false;
            while (nextZeroFound != true) {
                if ((map[rocketPosition[0]][rocketPosition[1] + nextZeroIndex] == 3.5) || (map[rocketPosition[0]][rocketPosition[1] + nextZeroIndex] == 3)) {
                    nextZeroIndex++;
                    animateDistancePercent = animateDistancePercent + 9;
                    rocketXDistance = rocketXDistance + 50;
                } else {
                    nextZeroFound = true;
                    console.log(rocketX, rocketY);
                    //$rocketAnimate.animate({'margin-left': "+=" + animateDistancePercent + "%"}, "fast", winAndLossCall);
                    $rocket.animate({'margin-left': "+=" + animateDistancePercent + "%"}, animationSpeed, winAndLossCall);
                    rocketX += rocketXDistance;
                    //$rocketAnimate.attr("src", "img/playfield/spaceship_pink_right.png");
                    map[rocketPosition[0]][rocketPosition[1] + nextZeroIndex] = 4;
                    map[rocketPosition[0]][rocketPosition[1]] = 0;
                    rocketPosition = findRocketPosition();
                    lossAndVictoryArray.push("run");
                }
            }
            // Ice effect - Rocket zooms out of field to nearest 0 index.
        } else if (map[rocketPosition[0]][rocketPosition[1] + 1] == 5) {


            var rocketXDistance = 50;
            var animateDistancePercent = 9;
            var nextZeroIndex = 2;
            var nextZeroFound = false;
            while (nextZeroFound != true) {
                if (map[rocketPosition[0]][rocketPosition[1] + nextZeroIndex] == 5) {
                    nextZeroIndex++;
                    animateDistancePercent = animateDistancePercent + 9;
                    rocketXDistance = rocketXDistance + 50;
                } else {
                    nextZeroFound = true;
                    console.log(rocketX, rocketY);
                    //$rocketAnimate.animate({'margin-left': "+=" + animateDistancePercent + "%"}, "fast", winAndLossCall);
                    $rocket.animate({'margin-left': "+=" + animateDistancePercent + "%"}, animationSpeed, winAndLossCall);
                    rocketX += rocketXDistance;
                    //$rocketAnimate.attr("src", "img/playfield/spaceship_pink_right.png");
                    map[rocketPosition[0]][rocketPosition[1] + nextZeroIndex] = 4;
                    map[rocketPosition[0]][rocketPosition[1]] = 0;
                    rocketPosition = findRocketPosition();
                    lossAndVictoryArray.push("run");
                }
            }

            // $rocketAnimate.animate({'margin-left': "-=9%"}, "fast", winAndLossCall);
            // lossAndVictoryArray.push("run");
        } else {
            var temp = map[rocketPosition[0]][rocketPosition[1] + 1];
            map[rocketPosition[0]][rocketPosition[1] + 1] = 4;
            map[rocketPosition[0]][rocketPosition[1]] = temp;
            rocketPosition = findRocketPosition();
            lossAndVictoryArray.push("run");
        }
    }
}

function moveDown() {

    if (rocketY >= canvas.height) {
        //$rocketAnimate.animate({'margin-top': "+=0%"}, "fast");
        $rocket.animate({'margin-top': "+=0%"}, animationSpeed);
    } else {
        asteroidAnimate();
        fallingStarAnimate();
        //$rocketAnimate.animate({'margin-top': "+=9%"}, "fast", winAndLossCall);
        $rocketAnimateDown.animate({'opacity': "1", 'margin-top': "+=9%"}, animationSpeed, winAndLossCall);
        $rocketAnimate.animate({'opacity': "0", 'margin-top': "+=9%"}, animationSpeed);
        $rocketAnimateLeft.animate({'opacity': "0", 'margin-top': "+=9%"}, animationSpeed);
        $rocketAnimateRight.animate({'opacity': "0", 'margin-top': "+=9%"}, animationSpeed);
        //$rocket.animate({'margin-top': "+=9%"}, animationSpeed, winAndLossCall);
        console.log(rocketX, rocketY);
        rocketY += 50;
        //$rocketAnimate.attr("src", "img/playfield/spaceship_pink_down.png");
    }

    if (rocketPosition[0] < mapHeight - 1) {
        if ((map[rocketPosition[0] + 1][rocketPosition[1]] == 0.1) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 0.2) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 2) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 2.5) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 7) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 8)) {
            lossAndVictoryArray.push("lose");
        } else if (map[rocketPosition[0] + 1][rocketPosition[1]] == 1) {
            lossAndVictoryArray.push("win");

            // Metal effect - Rocket zooms out of field to nearest 0 index.
        } else if ((map[rocketPosition[0] + 1][rocketPosition[1]] == 3) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 3.5)) {

            var rocketYDistance = 50;
            var animateDistancePercent = 9;
            var nextZeroIndex = 2;
            var nextZeroFound = false;
            while (nextZeroFound != true) {
                if ((map[rocketPosition[0] + nextZeroIndex][rocketPosition[1]] == 3) || (map[rocketPosition[0] + nextZeroIndex][rocketPosition[1]] == 3.5)) {
                    nextZeroIndex++;
                    animateDistancePercent = animateDistancePercent + 9;
                    rocketYDistance = rocketYDistance + 50;
                } else {
                    nextZeroFound = true;
                    console.log(rocketX, rocketY);
                    //$rocketAnimate.animate({'margin-top': "+=" + animateDistancePercent + "%"}, "fast", winAndLossCall);
                    $rocket.animate({'margin-top': "+=" + animateDistancePercent + "%"}, animationSpeed, winAndLossCall);
                    rocketY += rocketYDistance;
                    //$rocketAnimate.attr("src", "img/playfield/spaceship_pink_down.png");
                    map[rocketPosition[0] + nextZeroIndex][rocketPosition[1]] = 4;
                    map[rocketPosition[0]][rocketPosition[1]] = 0;
                    rocketPosition = findRocketPosition();
                    lossAndVictoryArray.push("run");
                }
            }
            // Ice effect - Rocket zooms out of field to nearest 0 index.
        } else if (map[rocketPosition[0] + 1][rocketPosition[1]] == 5) {

            var rocketYDistance = 50;
            var animateDistancePercent = 9;
            var nextZeroIndex = 2;
            var nextZeroFound = false;
            while (nextZeroFound != true) {
                if (map[rocketPosition[0] + nextZeroIndex][rocketPosition[1]] == 5) {
                    nextZeroIndex++;
                    animateDistancePercent = animateDistancePercent + 9;
                    rocketYDistance = rocketYDistance + 50;
                } else {
                    nextZeroFound = true;
                    console.log(rocketX, rocketY);
                    //$rocketAnimate.animate({'margin-top': "+=" + animateDistancePercent + "%"}, "fast", winAndLossCall);
                    $rocket.animate({'margin-top': "+=" + animateDistancePercent + "%"}, animationSpeed, winAndLossCall);
                    rocketY += rocketYDistance;
                    //$rocketAnimate.attr("src", "img/playfield/spaceship_pink_down.png");
                    map[rocketPosition[0] + nextZeroIndex][rocketPosition[1]] = 4;
                    map[rocketPosition[0]][rocketPosition[1]] = 0;
                    rocketPosition = findRocketPosition();
                    lossAndVictoryArray.push("run");
                }
            }

        } else {
            var temp = map[rocketPosition[0] + 1][rocketPosition[1]];
            map[rocketPosition[0] + 1][rocketPosition[1]] = 4;
            map[rocketPosition[0]][rocketPosition[1]] = temp;
            rocketPosition = findRocketPosition();
            lossAndVictoryArray.push("run");
        }
    }

}

function moveLeft() {

    if (rocketX <= 0) {
        //edge of canvas - do nothing
        //$rocketAnimate.animate({'margin-left': "-=0%"}, "fast");
        $rocket.animate({'margin-left': "-=0%"}, animationSpeed);
    } else {
        asteroidAnimate();
        fallingStarAnimate();
        console.log(rocketX, rocketY);
        //$rocketAnimate.animate({'margin-left': "-=9%"}, "fast", winAndLossCall);
        $rocketAnimateLeft.animate({'opacity': "1", 'margin-left': "-=9%"}, animationSpeed, winAndLossCall);
        $rocketAnimate.animate({'opacity': "0", 'margin-left': "-=9%"}, animationSpeed);
        $rocketAnimateDown.animate({'opacity': "0", 'margin-left': "-=9%"}, animationSpeed);
        $rocketAnimateRight.animate({'opacity': "0", 'margin-left': "-=9%"}, animationSpeed);
        //$rocket.animate({'margin-left': "-=9%"}, animationSpeed, winAndLossCall);
        rocketX -= 50;
        //$rocketAnimate.attr("src", "img/playfield/spaceship_pink_left.png");

    }


    if (rocketPosition[1] > 0) {
        if ((map[rocketPosition[0]][rocketPosition[1] - 1] == 0.1) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 0.2) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 2) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 2.5) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 7) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 8)) {
            lossAndVictoryArray.push("lose");
        } else if (map[rocketPosition[0]][rocketPosition[1] - 1] == 1) {
            lossAndVictoryArray.push("win");

            // Metal effect - Rocket zooms out of field to nearest 0 index.
        } else if ((map[rocketPosition[0]][rocketPosition[1] - 1] == 3) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 3.5)) {

            var rocketXDistance = 50;
            var animateDistancePercent = 9;
            var nextZeroIndex = 2;
            var nextZeroFound = false;
            while (nextZeroFound != true) {
                if ((map[rocketPosition[0]][rocketPosition[1] - nextZeroIndex] == 3) || (map[rocketPosition[0]][rocketPosition[1] - nextZeroIndex] == 3.5)) {
                    nextZeroIndex++;
                    animateDistancePercent = animateDistancePercent + 9;
                    rocketXDistance = rocketXDistance + 50;
                } else {
                    nextZeroFound = true;
                    console.log(rocketX, rocketY);
                    //$rocketAnimate.animate({'margin-left': "-=" + animateDistancePercent + "%"}, "fast", winAndLossCall);
                    $rocket.animate({'margin-left': "-=" + animateDistancePercent + "%"}, animationSpeed, winAndLossCall);
                    rocketX -= rocketXDistance;
                    //$rocketAnimate.attr("src", "img/playfield/spaceship_pink_left.png");
                    map[rocketPosition[0]][rocketPosition[1] - nextZeroIndex] = 4;
                    map[rocketPosition[0]][rocketPosition[1]] = 0;
                    rocketPosition = findRocketPosition();
                    lossAndVictoryArray.push("run");
                }
            }
            // Ice effect - Rocket zooms out of field to nearest 0 index.
        } else if (map[rocketPosition[0]][rocketPosition[1] - 1] == 5) {

            var rocketXDistance = 50;
            var animateDistancePercent = 9;
            var nextZeroIndex = 2;
            var nextZeroFound = false;
            while (nextZeroFound != true) {
                if (map[rocketPosition[0]][rocketPosition[1] - nextZeroIndex] == 5) {
                    nextZeroIndex++;
                    animateDistancePercent = animateDistancePercent + 9;
                    rocketXDistance = rocketXDistance + 50;
                } else {
                    nextZeroFound = true;
                    console.log(rocketX, rocketY);
                    //$rocketAnimate.animate({'margin-left': "-=" + animateDistancePercent + "%"}, "fast", winAndLossCall);
                    $rocket.animate({'margin-left': "-=" + animateDistancePercent + "%"}, animationSpeed, winAndLossCall);
                    rocketX -= rocketXDistance;
                    //$rocketAnimate.attr("src", "img/playfield/spaceship_pink_left.png");
                    map[rocketPosition[0]][rocketPosition[1] - nextZeroIndex] = 4;
                    map[rocketPosition[0]][rocketPosition[1]] = 0;
                    rocketPosition = findRocketPosition();
                    lossAndVictoryArray.push("run");
                }
            }

        } else {
            var temp = map[rocketPosition[0]][rocketPosition[1] - 1];
            map[rocketPosition[0]][rocketPosition[1] - 1] = 4;
            map[rocketPosition[0]][rocketPosition[1]] = temp;
            rocketPosition = findRocketPosition();
            lossAndVictoryArray.push("run");
        }
    }
}

function moveUp() {
    if (rocketY <= tileHeight) {
        //$rocketAnimate.animate({'margin-top': "-=0%"}, "fast");
        $rocket.animate({'margin-top': "-=0%"}, 10);

    } else {
        asteroidAnimate();
        fallingStarAnimate();
        console.log(rocketX, rocketY);
        //$rocketAnimate.animate({'margin-top': "-=9%"}, "fast", winAndLossCall);
        $rocketAnimate.animate({'opacity': "1", 'margin-top': "-=9%"}, animationSpeed, winAndLossCall);
        $rocketAnimateDown.animate({'opacity': "0", 'margin-top': "-=9%"}, animationSpeed);
        $rocketAnimateLeft.animate({'opacity': "0", 'margin-top': "-=9%"}, animationSpeed);
        $rocketAnimateRight.animate({'opacity': "0", 'margin-top': "-=9%"}, animationSpeed);
        // $rocket.animate({'margin-top': "-=9%"}, animationSpeed, winAndLossCall);
        rocketY -= 50;
        //$rocketAnimate.attr("src", "img/playfield/spaceship_pink.png");
    }


    if (rocketPosition[0] > 0) {
        if ((map[rocketPosition[0] - 1][rocketPosition[1]] == 0.1) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 0.2) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 2) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 2.5) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 7) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 8)) {
            lossAndVictoryArray.push("lose");
        } else if (map[rocketPosition[0] - 1][rocketPosition[1]] == 1) {
            lossAndVictoryArray.push("win");

            // Metal effect - Rocket zooms out of field to nearest 0 index.
        } else if ((map[rocketPosition[0] - 1][rocketPosition[1]] == 3) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 3.5)) {

            var rocketYDistance = 50;
            var animateDistancePercent = 9;
            var nextZeroIndex = 2;
            var nextZeroFound = false;
            while (nextZeroFound != true) {
                if ((map[rocketPosition[0] - nextZeroIndex][rocketPosition[1]] == 3) || (map[rocketPosition[0] - nextZeroIndex][rocketPosition[1]] == 3.5)) {
                    nextZeroIndex++;
                    animateDistancePercent = animateDistancePercent + 9;
                    rocketYDistance = rocketYDistance + 50;
                } else {
                    nextZeroFound = true;
                    console.log(rocketX, rocketY);
                    //$rocketAnimate.animate({'margin-top': "-=" + animateDistancePercent + "%"}, "fast", winAndLossCall);
                    $rocket.animate({'margin-top': "-=" + animateDistancePercent + "%"}, animationSpeed, winAndLossCall);
                    rocketY -= rocketYDistance;
                    //$rocketAnimate.attr("src", "img/playfield/spaceship_pink.png");
                    map[rocketPosition[0] - nextZeroIndex][rocketPosition[1]] = 4;
                    map[rocketPosition[0]][rocketPosition[1]] = 0;
                    rocketPosition = findRocketPosition();
                    lossAndVictoryArray.push("run");
                }
            }
            // Ice effect - Rocket zooms out of field to nearest 0 index.
        } else if (map[rocketPosition[0] - 1][rocketPosition[1]] == 5) {

            var rocketYDistance = 50;
            var animateDistancePercent = 9;
            var nextZeroIndex = 2;
            var nextZeroFound = false;
            while (nextZeroFound != true) {
                if (map[rocketPosition[0] - nextZeroIndex][rocketPosition[1]] == 5) {
                    nextZeroIndex++;
                    animateDistancePercent = animateDistancePercent + 9;
                    rocketYDistance = rocketYDistance + 50;
                } else {
                    nextZeroFound = true;
                    console.log(rocketX, rocketY);
                    //$rocketAnimate.animate({'margin-top': "-=" + animateDistancePercent + "%"}, "fast", winAndLossCall);
                    $rocket.animate({'margin-top': "-=" + animateDistancePercent + "%"}, animationSpeed, winAndLossCall);
                    rocketY -= rocketYDistance;
                    //$rocketAnimate.attr("src", "img/playfield/spaceship_pink.png");
                    map[rocketPosition[0] - nextZeroIndex][rocketPosition[1]] = 4;
                    map[rocketPosition[0]][rocketPosition[1]] = 0;
                    rocketPosition = findRocketPosition();
                    lossAndVictoryArray.push("run");
                }
            }

        } else {
            var temp = map[rocketPosition[0] - 1][rocketPosition[1]];
            map[rocketPosition[0] - 1][rocketPosition[1]] = 4;
            map[rocketPosition[0]][rocketPosition[1]] = temp;
            rocketPosition = findRocketPosition();
            lossAndVictoryArray.push("run");
        }
    }
}

function asteroidAnimate() {
    if (currentLevel > 2) {
        //resetting current index before it moves to the next place in array
        for (var i in map) {
            for (var j in map[i]) {
                if (map[i][j] === 0.1) {
                    map[i][j] = 0;
                }
            }
        }

        if (asteroidX >= 0 <= 500) {
            $asteroid.animate({"margin-left": "+=9%"}, "fast");
            var temp = map[asteroidPosition[0]][asteroidPosition[1] + 1];
            map[asteroidPosition[0]][asteroidPosition[1] + 1] = 0.1;
            map[asteroidPosition[0]][asteroidPosition[1]] = temp;
            asteroidPosition = findAsteroidPosition();
            asteroidX += 50;
        }

        if (asteroidX === 500) {
            $asteroid.animate({"margin-left": asteroidMarginLeft}, 1);
            asteroidX = originalAsteroidX;
            asteroidPosition = originalAsteroidIndex;
        }
    }
}

function fallingStarAnimate() {
    if (currentLevel > 2) {
        //resetting current index before it moves to the next place in array
        for (var i in map) {
            for (var j in map[i]) {
                if (map[i][j] === 0.2) {
                    map[i][j] = 0;
                }
            }
        }

        if (fallingStarY >= 0 <= 450) {
            $fallingStar.animate({'margin-top': '+=9%'}, "fast");
            var temp = map[starPosition[0] + 1][starPosition[1]];
            map[starPosition[0] + 1][starPosition[1]] = 0.2;
            map[starPosition[0]][starPosition[1]] = temp;
            starPosition = findStarPosition();
            fallingStarY += 50;
        }

        if (fallingStarY === 450) {
            $fallingStar.animate({"margin-top": fallingStarMarginTop}, 1);
            fallingStarY = originalFallingStarY;
            starPosition = originalStarIndex;
        }
    }
}

//function for loading the next level and for resetting every variable and index back to their original value
function loadNewLevel() {
    //removing commands you've selected
    $('.canvas > img').remove();
    $('.algo-space > .added').remove();
    $('.func-space > .added').remove();


    //hiding anything that doesn't need to be shown
    $point.hide();
    $commandsOverlay.hide();
    $winModal.hide();
    $("#functiontwoselect").hide();

    //resetting play button to 'play' rather than 'restart'
    $run.off();
    $run.click(runButton);
    $("#play-first").attr({"src": "img/playfield/play.png"});
    $("#play-hover").attr({"src": "img/playfield/play-hover.png"});


    // change from each level
    if (currentLevel === 0) {
        currentLevel = 1;
        console.log("current level" + currentLevel);
    } else if (currentLevel === 1) {
        currentLevel = 2;
        console.log("current level" + currentLevel);
    } else if (currentLevel === 2) {
        currentLevel = 3;
        console.log("current level" + currentLevel);
    } else if (currentLevel === 3) {
        currentLevel = 4;
        console.log("current level" + currentLevel);
    } else if (currentLevel === 4) {
        currentLevel = 5;
        console.log("current level" + currentLevel);
    } else if (currentLevel === 5) {
        currentLevel = 6;
        console.log("current level" + currentLevel);
    } else if (currentLevel === 6) {
        currentLevel = 7;
        console.log("current level" + currentLevel);
    } else if (currentLevel === 7) {
        currentLevel = 0;
        console.log("current level" + currentLevel);
    }

    highestCompletedLevel++;

    /* localStorage Functionality */


    // reassign local storage of current level
    localStorage.setItem("currentLevel", currentLevel);
    currentLevel = parseInt(localStorage.getItem("currentLevel"));

    localStorage.setItem("highestCompletedLevel", highestCompletedLevel);
    highestCompletedLevel = parseInt(localStorage.getItem("highestCompletedLevel"));




    // drawing the new level
    chooseLevel();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    $(document).ready(function () {
        initialise();
    });

    // update rocket position for new map
    rocketPosition = findRocketPosition();

    //storing original rocket index position array in const array
    originalRocketIndex = rocketPosition;

    //same for asteroid
    asteroidPosition = findAsteroidPosition();
    originalAsteroidIndex = asteroidPosition;

    //same for falling star
    starPosition = findStarPosition();
    originalStarIndex = starPosition;

    //resetting the main array/algorithm the user creates
    algorithm = [];

    //resetting the secondary array that the user creates which they can use inside the main one
    functionTwo = [];

    //resetting loss and victory array
    lossAndVictoryArray = [];

    winCondition = false;

    something = -1;

    arraySelect = [];

    moveCounter = -1;

    fireBool = false;
    metalBool = false;

    startState();
    clickElements();
}

var winCondition = false; //boolean used so that the winning pop-up only appears once

var winAndLossCall = function () {
    moveCounter++; //increment value for every move the rocket makes
    console.log(lossAndVictoryArray);
    console.log(moveCounter);

    //checking to see whether the rocket has hit a planet
    for (var i in lossAndVictoryArray) {
        if (lossAndVictoryArray[i] == "run") {
            //do nothing

        }

        if (lossAndVictoryArray[i] == "lose") {
            if (moveCounter == i) {
                // rLoss.play(); //TestSound

                //stop all current animations
                //$rocketAnimate.stop(true);
                $rocket.stop(true);
                $asteroid.stop(true);
                $fallingStar.stop(true);

                //setTimeout function here to explode the ship and move back to original position
                //$rocketAnimate.attr("src", "img/playfield/explosion.gif");
                $rocket.attr("src", "img/playfield/explosion.gif");

                setTimeout(function () {
                    $rocketAnimate.attr("src", "img/playfield/spaceship_pink.png");
                    $rocketAnimateDown.attr("src", "img/playfield/spaceship_pink_down.png");
                    $rocketAnimateRight.attr("src", "img/playfield/spaceship_pink_right.png");
                    $rocketAnimateLeft.attr("src", "img/playfield/spaceship_pink_left.png");
                }, 2000);
                setTimeout(function () {
                    originalPos()
                }, 2000);
                setTimeout(function () {
                    $("#play-first").attr({"src": "img/playfield/play.png"});
                    $run.off();
                    $run.click(runButton);
                }, 4000);
            }
        }

        if (lossAndVictoryArray[i] == "win") {
            // rVictory.play(); // TestSound


            if (moveCounter == i) {

                if (winCondition === false) {
                    winCondition = true; //"you win" alert only to come up once

                    setTimeout(function () {
                        $rocket.stop(true);

                    }, 300);

                    setTimeout(function () {
                        $point.show();
                        $point.attr("src", "img/playfield/astronaut.png").css({
                            "height": "20%",
                            "width": "20%",
                            "margin-left": "60%",
                            "margin-top": "0%",
                            "animation": "bouncearrow 1s infinite",
                            "transform": "scaleX(-1)"
                        });
                        $point.animate({"margin-top": "+=50%"}, "slow");
                        $winModal.show();
                        setTimeout(loadNewLevel, 3000);

                    }, 300)

                }
            }

        }
    }
};

var oldFunction = winAndLossCall; //storing function in a variable (used in stopAnimation() function as was getting a bug)

// a function to save the entered algorithm
var $save = $("#save");
var savedAlgorithmTemp = [];
var savedAlgorithm = [];
var counter = 0;
$save.click(function () {
    savedAlgorithmTemp = savedAlgorithmTemp.concat(algorithm);
    savedAlgorithm[counter] = savedAlgorithmTemp;
    savedAlgorithmTemp = [];
    counter++;
    $("#functiontwoselect").show();
    //console.log(savedAlgorithmTemp, savedAlgorithm, algorithm)
});

startState();
movementFunction();
clickElements();

$("#up").hover(function () {
        $("#up-img").attr("src", "img/playfield/up_hover.png")
    },
    function () {
        $("#up-img").attr("src", "img/playfield/up-first.png")
    });

$("#left").hover(function () {
        $("#left-img").attr("src", "img/playfield/left_hover.png")
    },
    function () {
        $("#left-img").attr("src", "img/playfield/left-first.png")
    });

$("#right").hover(function () {
        $("#right-img").attr("src", "img/playfield/right_hover.png")
    },
    function () {
        $("#right-img").attr("src", "img/playfield/right-first.png")
    });

$("#down").hover(function () {
        $("#down-img").attr("src", "img/playfield/down_hover.png")
    },
    function () {
        $("#down-img").attr("src", "img/playfield/down-first.png")
    });

$("#run").hover(function () {
        $("#play-first").attr("src", "img/playfield/play_hover.png")
    },
    function () {
        $("#play-first").attr("src", "img/playfield/play.png")
    });


/*DEMO MODALS*/

//function so that you can't skip the demo instruction modals at beginning of levels
function cantSkipDemo() {
    /*
    $(".close").hide();

    window.onclick = function (event) {
        if (event.target == modal) {
        }
    };

    span.onclick = function () {
    };*/

    closeModal();
}


//clicking off of modals
function closeModal() {
    $(".close").show();
    span.style.display = "block";

    //when the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            $point.hide();
            $commandsOverlay.hide();

        } else if (event.target == navModal) {
            navModal.style.display = "none";
            $point.hide();
            $commandsOverlay.hide();
        }
    };

    //when the user clicks on x button close the modal
    span.onclick = function () {
        modal.style.display = "none";
        navModal.style.display = "none";
        $point.hide();
        $commandsOverlay.hide();
    };
}

//level 0
function instructions() {
    cantSkipDemo();
    var counter = 1;
    modal.style.display = "block";
    $modalImage.attr("src", "img/playfield/astronaut.png").css("height", "9%", "width", "9%");
    $modalTitle.text("Welcome to Cosmic Computing!").css("font-weight", "bold");
    $modalText.text("Hi there, I'm Hugo!"); //Narrative? - "I need your help - my home planet is dying and I need you to guide me to specific planets to see if they could sustain life."
    $modalNext.attr("src", "next.png");
    $modalNext.show();
    $modalTitle.show();
    $modalNext.click(function () {
        var newcounter = counter + 1;

        if (counter == 1) {
            modal.style.display = "block";
            $modalText.text("Your goal is to get the spaceship to its destination by creating an algorithm. Let me show you how to do it!");
        }

        else if (counter == 2) {
            $modalText.text("");
            $modalImage.attr("src", "");
            $(".gif").css({"width": "122%", "margin-left": "-1%", "margin-top": "-8%"});
            $(".gif").show();
        }

        else if (counter == 3) {
            $(".gif").hide();
            $modalImage.attr("src", "img/playfield/astronaut.png");
            $modalText.text("Now, see if you can make a list of commands that moves the spaceship toward the destination planet!");
        }
        else if (counter == 4) {
            modal.style.display = "none";
            closeModal();

        }
        counter = newcounter;
    });
}


//level 1
function instructionsTwo() {
    cantSkipDemo();
    modal.style.display = "block";
    var counter = 1;
    $modalText.text("Planets may harm your spaceship if you collide with them.");
    $modalImage.attr("src", "img/playfield/astronaut.png").css("height", "9%", "width", "9%");
    $modalImage.show();
    $modalTitle.hide();
    $(".gif").hide();
    $modalNext.show();
    $modalNext.attr("src", "next.png");
    $commandsOverlay.hide();
    $point.hide();
    $modalNext.click(function () {
        var newcounter = counter + 1;

        if (counter == 1) {
            modal.style.display = "block";
            $modalText.text("But don't worry. I'll show you how to deal with them.");
        }

        else if (counter == 2) {
            $modalText.text("");
            $modalImage.attr("src", "");
            $(".gif").css({"width": "110%", "margin-left": "5%", "margin-top": "0%"});
            $(".gif").show();
        }
        else if (counter == 3) {
            $(".gif").hide();
            $modalImage.attr("src", "img/playfield/astronaut.png");
            $modalText.text("So, let's get started!");
        }
        else if (counter == 4) {
            modal.style.display = "none";
            closeModal();
        }
        counter = newcounter;
    })
}

//level 2
function instructionsThree() {
    cantSkipDemo();
    var counter = 1;
    modal.style.display = "block";
    $modalNext.attr("src", "next.png");
    $modalImage.attr("src", "img/playfield/astronaut.png").css("height", "9%", "width", "9%");
    $modalTitle.hide();
    $(".gif").hide();
    $modalNext.show();
    $modalImage.show();
    $modalText.text("At this point, 10 commands may not be enough to move your spaceship to its destination.");
    $commandsOverlay.hide();
    hideElements();

    $modalNext.click(function () {
        var newcounter = counter + 1;

        if (counter == 1) {
            modal.style.display = "block";
            $modalText.text("You have to create algorithms to reach your goal. This is how to do it.");
        }
        else if (counter == 2) {
            $modalText.text("");
            $modalImage.attr("src", "");
            $(".gif").css({"width": "110%", "margin-left": "5%", "margin-top": "0%"});
            $(".gif").show();
        }
        else if (counter == 3) {
            $(".gif").hide();
            $modalImage.attr("src", "img/playfield/astronaut.png");
            $modalText.text("It's your turn now!");
        }
        else if (counter == 4) {
            modal.style.display = "none";
            closeModal();
        }
        counter = newcounter;

    });
}

//level 3
function instructionsFour() {
    cantSkipDemo();
    var counter = 1;
    modal.style.display = "block";
    $(".gif").hide();
    $modalNext.attr("src", "next.png");
    $modalImage.show();
    $modalImage.attr("src", "img/playfield/astronaut.png").css("height", "9%", "width", "9%");
    $modalTitle.hide();
    $modalText.text("In this level you have to cope with asteroids and falling stars.");
    $commandsOverlay.hide();
    $modalNext.show();
    $point.hide();
    hideElements();


    $modalNext.click(function () {
        var newcounter = counter + 1;

        if (counter == 1) {
            $modalText.text("");
            $modalImage.attr("src", "");
            $(".gif").show();
        }

        else if (counter == 2) {
            $(".gif").hide();
            $modalImage.attr("src", "img/playfield/astronaut.png");
            $modalText.text("They will move whenever your spaceship moves, so watch out!");

        }

        else if (counter == 3) {
            modal.style.display = "none";
            $commandsOverlay.hide();
            $point.hide();
            closeModal();

        }
        counter = newcounter;

    });
}

function instructionsFive() {
    cantSkipDemo();
    modal.style.display = "block";
    $modalNext.attr("src", "next.png");
    $modalImage.show();
    $modalImage.attr("src", "img/playfield/astronaut.png").css("height", "9%", "width", "9%");
    $modalTitle.hide();
    $modalText.text("Now that you've learnt how to navigate your way around space, you are left to your own devices! Good luck!");
    $commandsOverlay.hide();
    $point.hide();
    hideElements();
    $modalNext.show();
    $modalNext.click(function () {
        modal.style.display = "none";
        $commandsOverlay.hide();
        $point.hide();
        closeModal();
    })

}

/*END OF DEMO MODALS*/