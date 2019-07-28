"use strict";

// A variable to represent the selected map
var currentLevel = 0;

//for resetting position of rocket - value will change depending on level
var rocketMarginLeft;
var rocketMarginTop;

//for resetting asteroid position
var asteroidMarginLeft;
var asteroidMarginTop;

//for resetting destination position
var destinationMarginLeft;
var destinationMarginTop;


//defining the rocket coordinates
var rocketX = 250;
var rocketY = 350;

//storing original coordinates in constant variable
var rocketX1 = rocketX;
var rocketY1 = rocketY;

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


function loadVersions() {
// Arrays to hold Level 0 versions 1, 2, 3 and 4:
    versionListLevel0 =
        [
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
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
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
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
                [0, 0, 0, 2.5, 2.5, 2.5, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 2.5, 2, 2.5, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 2.5, 0, 0, 0, 0, 0],
                [0, 0, 0, 3.5, 3.5, 0, 0, 0, 0, 0, 0],
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
                [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2.5, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 2.5, 2, 2.5, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2.5, 2.5, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 2.5, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 3.5, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 3.5, 3, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 2.5, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 2.5, 2, 2.5, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 2.5, 2.5, 2.5, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 2.5, 2.5, 3.5, 0],
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
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 0, 0, 0, 6, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 0, 0, 0, 6, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 0, 0, 0, 6, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 0, 0, 0, 6, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0],
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
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]

        ]
}

chooseLevel();

function chooseLevel() {
    
    
    // FOR TESTING - DELETE LATER
    //currentLevel = 2;
    
    
    
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
        insertDOMandCSS0();
        setTimeout(instructions, 750); //instructions
    }

    //currently planets level (planet with index 2 has danger zone)
    if (currentLevel === 1) {

        // Randomise number between 1 and 4 to represent Level 1 version
        version = Math.floor((Math.random() * 4));
        console.log("Level " + currentLevel + " , version " + version);


        // Assign randomised version number to map for level 1
        map = versionListLevel1[version];

        insertDOMandCSS1();
        setTimeout(instructionsTwo, 750); //instructions
    }

    // if level 2:
    if (currentLevel === 2) {


        // Randomise number between 1 and 4 to represent Level 2 version
        version = Math.floor((Math.random() * 4));
        
        
        
        //FOR TESTING - DELETE LATER
        //version = 3;
        
        
        console.log("Level " + currentLevel + " , version " + version);

        // Assign randomised version number to map for level 2
        map = versionListLevel2[version];

        insertDOMandCSS2();
        setTimeout(instructionsThree, 750); //instructions
    }

    if (currentLevel === 3) {
        // Randomise number between 1 and 4 to represent Level 2 version
        version = Math.floor((Math.random() * 4));
        console.log("Level " + currentLevel + " , version " + version);

        // Assign randomised version number to map for level 3
        map = versionListLevel3[version];

        insertDOMandCSS3();
        setTimeout(instructionsFour, 750); //instructions

    }
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
var $rocketAnimate;
var $hint;
var $helpDot;
var $helpButton;
var $home;
var $homeDot;
var $asteroid;
var $originalRocketSpace;

//putting it in a function because variables can only be assigned after the images have been created in the chooseLevel() function
function jQueryVariables() {
    $hint = $("#hintSimple");
    $helpDot = $(".dot-help");
    $helpButton = $(".help-button")
    $planetEarth = $("#planetEarth");
    $planetDestination = $("#planetDestination");
    $planetMetal = $(".planetMetal");
    $planetIce = $(".planetIce");
    $planetFire = $("#planetFire");
    $rocketAnimate = $("#rocketman");
    $home = $("#home");
    $homeDot = $(".dot-home");
    $asteroid = $("#asteroid");
    $originalRocketSpace = $("#originalrocketspace");
}

//jQuery accessing arrows
var $right = $("#right");
var $left = $("#left");
var $up = $("#up");
var $down = $("#down");
var $functTwoSelect = $("#functiontwoselect");
var $run = $("#run");
var $stop = $("#stop");


//jQuery icons
var $mainFunctionIcon = $("#mainfunction");
var $functionTwoIcon = $("#functiontwo");

//jQuery command display field
var $algoSpace = $(".algo-space");
var $funcSpace = $(".func-space");

/*END OF JQUERY VARIABLES*/

//DOM accessing modal
var modal = document.getElementById("myModal");
var navModal = document.getElementById("navModal");
var span = document.getElementsByClassName("close")[0];
var stay = document.getElementsByClassName("btn-stay")[0];


function insertDOMandCSS0() {
    // map 0 selected
    // next step: insert img tags

    $('.canvas')
        .prepend('<img id="rocketman"/>')
        .prepend('<img id="planetDestination"/>')
        .prepend('<img id ="originalrocketspace"/>');

    jQueryVariables(); //calling function that puts above img elements into variables

    //number of moves you can make
    algorithmLevelMoves = 10;
    functionTwoLevelMoves = 4;

    switch (version) {
        case 0:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '18.2%';
            rocketMarginTop = '45.5%';

            //defining the rocket coordinates
            rocketX = 100;
            rocketY = 300;
            
            //defining the destination coordinates
            destinationMarginLeft = '60.5%';
            destinationMarginTop = '33%';
            
            break;
        case 1:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '45.5%';
            rocketMarginTop = '18.2%';

            //defining the rocket coordinates
            rocketX = 250;
            rocketY = 150;
            
            //defining the destination coordinates
            destinationMarginLeft = '6%';
            destinationMarginTop = '51%';
            
            break;
        case 2:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '45.5%';
            rocketMarginTop = '55%';

            //defining the rocket coordinates
            rocketX = 250;
            rocketY = 350;
            
            //defining the destination coordinates
            destinationMarginLeft = '42%';
            destinationMarginTop = '0%';
            
            break;
        case 3:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '45.5%';
            rocketMarginTop = '9%';

            //defining the rocket coordinates
            rocketX = 250;
            rocketY = 100;
            
            //defining the destination coordinates
            destinationMarginLeft = '42%';
            destinationMarginTop = '70%';
            
            break;
    }
    rocketX1 = rocketX;
    rocketY1 = rocketY;

    $rocketAnimate.attr('src', 'img/playfield/spaceship_pink.png').css({
        'position': 'absolute',
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop,
        'max-height': 'auto',
        'max-width': '9%',
        'z-index': '1'
    });

    $planetDestination.attr('src', 'img/playfield/planets/planet_destination.png').css({
        'position': 'absolute',
        'margin-left': destinationMarginLeft,
        'margin-top': destinationMarginTop,
        'max-height': 'auto',
        'max-width': '15%',
        'transform': 'rotate(30deg)'
    });

    $originalRocketSpace.attr('src', 'img/playfield/start.png').css({
        'position': 'absolute',
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop,
        'max-height': 'auto',
        'max-width': '9%'
    })

}


// below function loads DOM and CSS for map 1 only
function insertDOMandCSS1() {
    // a function to load DOM and CSS elements based on map.

    // map 1 selected
    // next step: insert img tags

    $('.canvas')
        .prepend('<img id="rocketman"/>')
        .prepend('<img class="planetMetal"/>')
        .prepend('<img id="planetFire"/>')
        .prepend('<img id="planetDestination"/>')
        .prepend('<img id ="originalrocketspace"/>')
    /*  .prepend('<img id="hint"/>') */;

    jQueryVariables(); //calling function that puts above img elements into variables

    //number of moves you can make
    algorithmLevelMoves = 10;
    functionTwoLevelMoves = 4;
    
    // Metal and fire planet coordinates
    var metalMarginLeft;
    var metalMarginTop;
    var fireMarginLeft;
    var fireMarginTop;
    
    switch (version) {
        case 0:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '27.4%';
            rocketMarginTop = '72.75%';

            //defining the rocket coordinates
            rocketX = 150;
            rocketY = 450;
            
            //defining the destination coordinates
            destinationMarginLeft = '42%';
            destinationMarginTop = '0%';
            
            // defining the planet coordinates
            metalMarginLeft = '27.6%';
            metalMarginTop = '63.75%';
            
            fireMarginLeft = '45.4%';
            fireMarginTop = '36.5%';
            
            break;
        case 1:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '27.4%';
            rocketMarginTop = '72.75%';

            //defining the rocket coordinates
            rocketX = 150;
            rocketY = 450;
            
            //defining the destination coordinates
            destinationMarginLeft = '42%';
            destinationMarginTop = '0%';
            
            // defining the planet coordinates
            metalMarginLeft = '54.6%';
            metalMarginTop = '72.75%';
            
            fireMarginLeft = '27.4%';
            fireMarginTop = '36.5%';
            
            break;
        case 2:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '63.75%';
            rocketMarginTop = '9.25%';

            //defining the rocket coordinates
            rocketX = 300;
            rocketY = 150;
            
            //defining the destination coordinates
            destinationMarginLeft = '6%';
            destinationMarginTop = '69.5%';
            
            // defining the planet coordinates
            metalMarginLeft = '54.6%';
            metalMarginTop = '72.75%';
            
            fireMarginLeft = '27.4%';
            fireMarginTop = '36.5%';
            
            break;
        case 3:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '27.4%';
            rocketMarginTop = '36.4%';

            //defining the rocket coordinates
            rocketX = 150;
            rocketY = 250;
            
            //defining the destination coordinates
            destinationMarginLeft = '70%';
            destinationMarginTop = '0%';
            
            // defining the planet coordinates
            metalMarginLeft = '82.3%';
            metalMarginTop = '36.4%';
            
            fireMarginLeft = '45.4%';
            fireMarginTop = '9.5%';
            
            break;
    }
    rocketX1 = rocketX;
    rocketY1 = rocketY;

    $planetFire.attr('src', 'img/playfield/planets/planet_fire.png').css({
        'position': 'absolute',
        'margin-left': fireMarginLeft,
        'margin-top': fireMarginTop,
        'max-height': 'auto',
        'max-width': '9%'
    });

    $planetMetal.attr('src', 'img/playfield/planets/planet_metal.png').css({
        'position': 'absolute',
        'margin-left': metalMarginLeft,
        'margin-top': metalMarginTop,
        'max-height': 'auto',
        'max-width': '9%'
    });

    $planetDestination.attr('src', 'img/playfield/planets/planet_destination.png').css({
        'position': 'absolute',
        'margin-left': destinationMarginLeft,
        'margin-top': destinationMarginTop,
        'max-height': 'auto',
        'max-width': '15%',
        'transform': 'rotate(30deg)'
    });

    $rocketAnimate.attr('src', 'img/playfield/spaceship_pink.png').css({
        'position': 'absolute',
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop,
        'max-height': 'auto',
        'max-width': '9%',
        'z-index': '1'
    });

    $originalRocketSpace.attr('src', 'img/playfield/start.png').css({
        'position': 'absolute',
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop,
        'max-height': 'auto',
        'max-width': '9%'
    })
}

// Insert DOM and CSS for map 2
function insertDOMandCSS2() {
    // map 2 selected
    // next step: insert img tags for lvl 2
    $('.canvas')/* .prepend('<img id="hint"/>') */
        .prepend('<img id="planetIce_3" class="planetIce"/>')
        .prepend('<img id="planetIce_2" class="planetIce"/>')
        .prepend('<img id="planetIce_1" class="planetIce"/>')
        .prepend('<img id="planetEarth"/>')
        .prepend('<img id="planetDestination"/>')
        .prepend('<img id="planetFire"/>')
        .prepend('<img id="planetMetal_3" class="planetMetal"/>')
        .prepend('<img id="planetMetal_2" class="planetMetal"/>')
        .prepend('<img id="planetMetal_1" class="planetMetal"/>')
        .prepend('<img id="rocketman"/>')
        .prepend('<img id ="originalrocketspace"/>');

    jQueryVariables(); //calling function that puts above img elements into variables

    //number of moves you can make
    algorithmLevelMoves = 10;
    functionTwoLevelMoves = 4;

    // Metal planet coordinates
    var metalMarginLeft1;
    var metalMarginTop1;
    var metalMarginLeft2;
    var metalMarginTop2;
    var metalMarginLeft3;
    var metalMarginTop3;
    
    // Fire planet coordinates
    var fireMarginLeft;
    var fireMarginTop;
    
    // Ice planet coordinates
    var iceMarginLeft1;
    var iceMarginTop1;
    var iceMarginLeft2;
    var iceMarginTop2;
    var iceMarginLeft3;
    var iceMarginTop3;
    
    // Earth planet coordinates
    var earthMarginLeft;
    var earthMarginTop;

    switch (version) {
        case 0:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '36.4%';
            rocketMarginTop = '81.75%';

            //defining the rocket coordinates
            rocketX = 200;
            rocketY = 500;
            break;
        case 1:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '36.4%';
            rocketMarginTop = '81.75%';

            //defining the rocket coordinates
            rocketX = 200;
            rocketY = 500;
            break;
        case 2:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '36.4%';
            rocketMarginTop = '81.75%';

            //defining the rocket coordinates
            rocketX = 200;
            rocketY = 500;
            break;
        case 3:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '36.4%';
            rocketMarginTop = '81.75%';

            //defining the rocket coordinates
            rocketX = 200;
            rocketY = 500;
            break;
    }
    rocketX1 = rocketX;
    rocketY1 = rocketY;

    $rocketAnimate.attr('src', 'img/playfield/spaceship_pink.png').css({
        'position': 'absolute',
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop,
        'max-height': 'auto',
        'max-width': '9%',
        'z-index': '1'
    });

    $('#planetMetal_1').attr('src', 'img/playfield/planets/planet_metal.png').css({
        'position': 'absolute',
        'margin-left': '18.2%',
        'margin-top': '63.7%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $('#planetMetal_2').attr('src', 'img/playfield/planets/planet_metal.png').css({
        'position': 'absolute',
        'margin-left': '27.3%',
        'margin-top': '63.7%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $('#planetMetal_3').attr('src', 'img/playfield/planets/planet_metal.png').css({
        'position': 'absolute',
        'margin-left': '36.4%',
        'margin-top': '63.7%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $planetFire.attr('src', 'img/playfield/planets/planet_fire.png').css({
        'position': 'absolute',
        'margin-left': '27.4%',
        'margin-top': '45.55%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $planetDestination.attr('src', 'img/playfield/planets/planet_destination.png').css({
        'position': 'absolute',
        'margin-left': '60.5%',
        'margin-top': '0%',
        'max-height': 'auto',
        'max-width': '15%',
        'transform': 'rotate(30deg)'
    });

    $planetEarth.attr('src', 'img/playfield/planets/planet_earth.png').css({
        'position': 'absolute',
        'margin-left': '63.75%',
        'margin-top': '45.55%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $('#planetIce_1').attr('src', 'img/playfield/planets/planet_ice.png').css({
        'position': 'absolute',
        'margin-left': '45.6%',
        'margin-top': '27.4%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $('#planetIce_2').attr('src', 'img/playfield/planets/planet_ice.png').css({
        'position': 'absolute',
        'margin-left': '54.6%',
        'margin-top': '27.4%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $('#planetIce_3').attr('src', 'img/playfield/planets/planet_ice.png').css({
        'position': 'absolute',
        'margin-left': '63.7%',
        'margin-top': '27.4%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $originalRocketSpace.attr('src', 'img/playfield/start.png').css({
        'position': 'absolute',
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop,
        'max-height': 'auto',
        'max-width': '9%'
    })
}

function insertDOMandCSS3() {

    $('.canvas')
        .prepend('<img id="planetDestination"/>')
        .prepend('<img id="planetFire"/>')
        .prepend('<img id="rocketman"/>')
        .prepend('<img id="asteroid"/>')
        .prepend('<img id ="originalrocketspace"/>');

    jQueryVariables(); //calling function that puts above img elements into variables

    //number of moves you can make
    algorithmLevelMoves = 10;
    functionTwoLevelMoves = 4;

    switch (version) {
        case 0:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '36.4%';
            rocketMarginTop = '63.5%';

            asteroidMarginLeft = '0%';
            asteroidMarginTop = '27.5%';

            //defining the rocket coordinates
            rocketX = 200;
            rocketY = 400;
            break;
        case 1:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '36.4%';
            rocketMarginTop = '63.5%';

            asteroidMarginLeft = '0%';
            asteroidMarginTop = '27.5%';

            //defining the rocket coordinates
            rocketX = 200;
            rocketY = 400;
            break;
        case 2:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '36.4%';
            rocketMarginTop = '63.5%';

            asteroidMarginLeft = '0%';
            asteroidMarginTop = '27.5%';

            //defining the rocket coordinates
            rocketX = 200;
            rocketY = 400;
            break;
        case 3:
            //for resetting position of rocket - value will change depending on level
            rocketMarginLeft = '36.4%';
            rocketMarginTop = '63.5%';

            asteroidMarginLeft = '0%';
            asteroidMarginTop = '27.5%';

            //defining the rocket coordinates
            rocketX = 200;
            rocketY = 400;
            break;
    }
    rocketX1 = rocketX;
    rocketY1 = rocketY;

    $rocketAnimate.attr('src', 'img/playfield/spaceship_pink.png').css({
        'position': 'absolute',
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop,
        'max-height': 'auto',
        'max-width': '9%',
        'z-index': '1'
    });

    $planetDestination.attr('src', 'img/playfield/planets/planet_destination.png').css({
        'position': 'absolute',
        'margin-left': '60.5%',
        'margin-top': '0%',
        'max-height': 'auto',
        'max-width': '15%',
        'transform': 'rotate(30deg)'
    });

    $planetFire.attr('src', 'img/playfield/planets/planet_fire.png').css({
        'position': 'absolute',
        'margin-left': '27.4%',
        'margin-top': '45.55%',
        'max-height': 'auto',
        'max-width': '9%'
    });

    $asteroid.attr('src', 'img/playfield/asteroid.png').css({
        'position': 'absolute',
        'margin-left': asteroidMarginLeft,
        'margin-top': asteroidMarginTop,
        'max-height': 'auto',
        'max-width': '9%',

    });

    $originalRocketSpace.attr('src', 'img/playfield/start_pos.png').css({
        'position': 'absolute',
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop,
        'max-height': 'auto',
        'max-width': '9%',
    })

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


//storing original index position array in const array
var originalRocketIndex = rocketPosition;

var originalAsteroidIndex = asteroidPosition;

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
                ctx.globalAlpha = 0.1;
                ctx.clearRect(xPosition, yPosition, 50, 50);
                ctx.drawImage(black, xPosition, yPosition, 50, 50);
            } else if (map[i][j] === 0.1) {
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
    //$functionTwoIcon.css("color", "#F5BC6C"); //highlight
    //$functionTwoIcon.css("font-weight", "bold");
    $mainFunctionIcon.css("color", "white"); //reset
    //$mainFunctionIcon.css("font-weight", "") //reset

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
    //$mainFunctionIcon.css("color", "#F5BC6C"); //highlight
    //$mainFunctionIcon.css("font-weight", "bold"); //highlight
    $functionTwoIcon.css("color", "white");
    //$functionTwoIcon.css("font-weight", "");//reset */
    if (currentLevel === 0 || 1 ){
        $("#bg").css("background", "url(img/playfield/playfield_simple_final_highlight_main.jpg)");
        $("#bg").css("background-size", "contain");
        console.log("Highlight in simple view works");
    };
    
    if (currentLevel >= 2) {
        $("#bg").css("background", "url(img/playfield/playfield_advance_final_highlight_main.png)");
        $("#bg").css("background-size", "contain");
    };
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

    console.log("The current coordinates are: " + movementObject.x, movementObject.y);
    //runButton();
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

//function will be updated to only come up once a mini-game has been solved
function dangerArea(planet) {
    function drawZone() {
        modal.style.display = "none";
        for (var i in map) {
            for (var j in map[i]) {
                if (planet == "fire") {
                    if ((map[i][j] === 2.5) || (map[i][j] === 2)) {
                        ctx.globalAlpha = 0.4;
                        ctx.fillStyle = "#FF0000"; //low contrast
                        //ctx.fillStyle = "#90e7fd"; //better for accessibility / colourblindness / low vision
                        ctx.fillRect(xPosition, yPosition, 50, 50);
                    }
                }

                if (planet == "metal") {
                    if ((map[i][j] === 3.5) || (map[i][j] === 3)) {
                        ctx.globalAlpha = 0.4;
                        ctx.fillStyle = "#FF0000"; //low contrast
                        //ctx.fillStyle = "#90e7fd"; //better for accessibility / colourblindness / low vision
                        ctx.fillRect(xPosition, yPosition, 50, 50);
                    }
                }
                xPosition = xPosition + 50;

            }
            yPosition = yPosition + 50;
            xPosition = 0;
        }
        yPosition = 0;

    }

    //when the user clicks on <span> (x)
    span.onclick = function () {
        drawZone();
    };


    //when the user clicks anywhere outside of the modal
    window.onclick = function (event) {
        if (event.target == modal) {
            drawZone();
        }

    };
}


function clickElements() {
    $home.click(function () {
        navModal.style.display = "block";
    });

    $homeDot.click(function () {
        navModal.style.display = "block";
    });

    $hint.click(function () {
        $modalText.text("Instructions...");
        $modalTitle.text("Hint").css("font-weight", "bold");
        $modalImage.attr("src", "");
        $modalNext.attr("src", "");
        $point.hide();
    });


    $helpDot.click(function () {
        modal.style.display = "block";
        $modalText.text("Instructions...");
        $modalTitle.text("Hint").css("font-weight", "bold");
        $modalImage.attr("src", "");
        $modalNext.attr("src", "");
        $point.hide();
    });

    $helpButton.click(function () {
        modal.style.display = "block";
        $modalText.text("Instructions...");
        $modalTitle.text("Hint").css("font-weight", "bold");
        $modalImage.attr("src", "");
        $modalNext.attr("src", "");
        $point.hide();
    });

    $planetFire.click(function () {
        modal.style.display = "block";
        $modalImage.attr("src", "img/playfield/planets/planet_fire.png").css("height", "5%", "width", "5%");
        $modalText.text("Fire");
        $modalTitle.text("Planet").css("font-weight", "bold");
        $modalNext.attr("src", "");
        $point.hide();
        dangerArea("fire");
    });

    $planetMetal.click(function () {
        modal.style.display = "block";
        $modalImage.attr("src", "img/playfield/planets/planet_metal.png").css("height", "5%", "width", "5%");
        $modalText.text("Metal");
        $modalTitle.text("Planet").css("font-weight", "bold");
        $modalNext.attr("src", "");
        $point.hide();
        dangerArea("metal");
    });

    $planetDestination.click(function () {
        modal.style.display = "block";
        $modalImage.attr("src", "img/playfield/planets/planet_destination.png").css("height", "5%", "width", "5%");
        $modalText.text("This is your destination!");
        $modalTitle.text("Planet").css("font-weight", "bold");
        $modalNext.attr("src", "");
        $point.hide();
    });

    $planetIce.click(function () {
        modal.style.display = "block";
        $modalImage.attr("src", "img/playfield/planets/planet_ice.png").css("height", "5%", "width", "5%");
        $modalText.text("Ice");
        $modalTitle.text("Planet").css("font-weight", "bold");
        $modalNext.attr("src", "");
        $point.hide();
    });

    $planetEarth.click(function () {
        modal.style.display = "block";
        $modalImage.attr("src", "img/playfield/planets/planet_earth.png").css("height", "5%", "width", "5%");
        $modalText.text("Earth");
        $modalTitle.text("Planet").css("font-weight", "bold");
        $modalNext.attr("src", "");
        $point.hide();
    });

    $rocketAnimate.click(function () {
        modal.style.display = "block";
        $modalImage.attr("src", "img/playfield/spaceship_pink.png").css("height", "10%", "width", "10%");
        $modalText.text("Move the rocket to its destination by using the arrow keys below.");
        $modalTitle.text("Rocket").css("font-weight", "bold");
        $modalNext.attr("src", "");
        $point.hide();
    });

    stay.onclick = function () {
        modal.style.display = "none";
        navModal.style.display = "none";
    };


    //clicking off of modals

    // When the user clicks anywhere outside of the modal, close it
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

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        navModal.style.display = "none";
        $point.hide();
        $commandsOverlay.hide();
    };
}

//every time you hit run, the rocket will return back to its original position
function originalPos() {

    $rocketAnimate.attr("src", "img/playfield/spaceship_pink.png");

    //reset animation
    //resetting the rocket to its default position
    $rocketAnimate.css({
        'margin-left': rocketMarginLeft,
        'margin-top': rocketMarginTop
    });

    $asteroid.css({
        'margin-left': asteroidMarginLeft,
        'margin-top': asteroidMarginTop
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

    rocketPosition = originalRocketIndex;
    asteroidPosition = originalAsteroidIndex;

}

var moveCounter = -1;

var stopClicked = false;

function stopAnimation() {
    if (stopClicked === false) {
        stopClicked = true;
        $("#play-first").attr({"src": "img/playfield/play.png"});
        $("#play-hover").attr({"src": "img/playfield/play-hover.png"});
        originalPos(); //return to original position
        winAndLossCall = function () {
            //empty function, does nothing
        };
        $rocketAnimate.attr("src", "img/playfield/spaceship_pink.png");
        winAndLossCall = oldFunction;
        for (var i = 0; i <= levelMoves; i++) {
            $rocketAnimate.stop(); //stop animating
            $asteroid.stop();
        }
        $run.off();
        $run.click(runButton);
        stopClicked = false;
    }
}

function runButton() {
    //the function will only run if the rocket is not currently animating because otherwise if the run button is hit repeatedly
    //the rocket can go off canvas
    if (!$rocketAnimate.is(':animated')) {
        lossAndVictoryArray = [];
        originalPos();

        $("#play-first").attr({"src": "img/playfield/stop.png"});
        $("#play-hover").attr({"src": "img/playfield/stop-hover.png"});


        /*
        //rocket goes back in original position
        if (algorithm.length > 0) {
            originalPos();
        }*/
        $run.off();
        $run.click(stopAnimation);


        for (var x in algorithm) {

            asteroidAnimate();

            //animating the function 2 values when called in the main algorithm, tracking loss and victory, updating rocket index
            if (typeof algorithm[x] === "object") {
                for (var i in algorithm[x]) {

                    asteroidAnimate();

                    //right
                    if (algorithm[x][i].charAt(0) === "r") {
                        moveRight();
                    }

                    //left
                    if (algorithm[x][i].charAt(0) === "l") {
                        moveLeft();
                    }

                    //animating main algorithm, tracking loss and victory, updating rocket index

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
                //console.log("hello " + algorithm.slice(-1)[0]);
                moveUp();
            }

            /*
            //stop button goes back to play button when the algorithm stops
            if (algorithm[x] == algorithm.slice(-1)[0]) {

            }*/

        }
        //stopClicked = false;
        moveCounter = -1;
        //$run.click(runButton);

    }


}

var firstRun = false;
if (firstRun === false) {
    firstRun = true;
    $run.off();
    $run.click(runButton);
    console.log("first run");
}

// test for sound
// var rMove = new Audio("pop.wav");// TestSound
// rMove.loop = false;// TestSound

// var rVictory = new Audio("victory.wav");// TestSound
// rVictory.loop = false;// TestSound

// var rLoss = new Audio("loss.wav");// TestSound
// rLoss.loop = false;// TestSound


var lossAndVictoryArray = [];

function moveRight() {
    if (rocketX >= canvas.width - tileWidth) {
        $rocketAnimate.animate({'margin-left': "+=0%"}, "fast");
    } else {
        console.log(rocketX, rocketY);
        $rocketAnimate.animate({'margin-left': "+=9%"}, "fast", winAndLossCall);
        rocketX += 50;
        $rocketAnimate.attr("src", "img/playfield/spaceship_pink_right.png");
    }

    if (rocketPosition[1] < mapWidth - 1) {
        if ((map[rocketPosition[0]][rocketPosition[1] + 1] == 0.1) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 2) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 2.5) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 5) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 6) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 7) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 8)) {
            lossAndVictoryArray.push("lose");
        } else if (map[rocketPosition[0]][rocketPosition[1] + 1] == 1) {
            lossAndVictoryArray.push("win");
            
        // testing condition - Outer Metal Planet 3.5 or Metal Planet 3 - Rocket zooms out of field to nearest 0 index.
        } else if ((map[rocketPosition[0]][rocketPosition[1] + 1] == 3.5) || (map[rocketPosition[0]][rocketPosition[1] + 1] == 3)) {
            
            var rocketXDistance = 100;
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
                    $rocketAnimate.animate({'margin-left': "+=" + animateDistancePercent + "%"}, "fast", winAndLossCall);
                    rocketX += rocketXDistance;
                    $rocketAnimate.attr("src", "img/playfield/spaceship_pink_right.png");
                    map[rocketPosition[0]][rocketPosition[1] + nextZeroIndex] = 4;
                    map[rocketPosition[0]][rocketPosition[1]] = 0;
                    rocketPosition = findRocketPosition();
                    lossAndVictoryArray.push("run");
                }
            }
            
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
        $rocketAnimate.animate({'margin-top': "+=0%"}, "fast");
    } else {
        $rocketAnimate.animate({'margin-top': "+=9%"}, "fast", winAndLossCall);
        console.log(rocketX, rocketY);
        rocketY += 50;
        $rocketAnimate.attr("src", "img/playfield/spaceship_pink_down.png");
    }

    if (rocketPosition[0] < mapHeight - 1) {
        if ((map[rocketPosition[0] + 1][rocketPosition[1]] == 0.1) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 2) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 2.5) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 5) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 6) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 7) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 8)) {
            lossAndVictoryArray.push("lose");
        } else if (map[rocketPosition[0] + 1][rocketPosition[1]] == 1) {
            lossAndVictoryArray.push("win");
            
        // testing condition - Outer Metal Planet 3.5 or Metal Planet 3 - Rocket zooms out of field to nearest 0 index.
        } else if ((map[rocketPosition[0] + 1][rocketPosition[1]] == 3) || (map[rocketPosition[0] + 1][rocketPosition[1]] == 3.5)) {
            
            var rocketYDistance = 100;
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
                    $rocketAnimate.animate({'margin-top': "+=" + animateDistancePercent + "%"}, "fast", winAndLossCall);
                    rocketY += rocketYDistance;
                    $rocketAnimate.attr("src", "img/playfield/spaceship_pink_down.png");
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
        $rocketAnimate.animate({'margin-left': "-=0%"}, "fast");
    } else {
        console.log(rocketX, rocketY);
        $rocketAnimate.animate({'margin-left': "-=9%"}, "fast", winAndLossCall);
        rocketX -= 50;
        $rocketAnimate.attr("src", "img/playfield/spaceship_pink_left.png");
    }


    if (rocketPosition[1] > 0) {
        if ((map[rocketPosition[0]][rocketPosition[1] - 1] == 0.1) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 2) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 2.5) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 5) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 6) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 7) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 8)) {
            lossAndVictoryArray.push("lose");
        } else if (map[rocketPosition[0]][rocketPosition[1] - 1] == 1) {
            lossAndVictoryArray.push("win");
            
        // testing condition - Outer Metal Planet 3.5 or Metal Planet 3 - Rocket zooms out of field to nearest 0 index.
        } else if ((map[rocketPosition[0]][rocketPosition[1] - 1] == 3) || (map[rocketPosition[0]][rocketPosition[1] - 1] == 3.5)) {
            
            var rocketXDistance = 100;
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
                    $rocketAnimate.animate({'margin-left': "-=" + animateDistancePercent + "%"}, "fast", winAndLossCall);
                    rocketX -= rocketXDistance;
                    $rocketAnimate.attr("src", "img/playfield/spaceship_pink_left.png");
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
        $rocketAnimate.animate({'margin-top': "-=0%"}, "fast");

    } else {
        console.log(rocketX, rocketY);
        $rocketAnimate.animate({'margin-top': "-=9%"}, "fast", winAndLossCall);
        rocketY -= 50;
        $rocketAnimate.attr("src", "img/playfield/spaceship_pink.png");
    }


    if (rocketPosition[0] > 0) {
        if ((map[rocketPosition[0] - 1][rocketPosition[1]] == 0.1) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 2) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 2.5) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 5) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 6) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 7) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 8)) {
            lossAndVictoryArray.push("lose");
        } else if (map[rocketPosition[0] - 1][rocketPosition[1]] == 1) {
            lossAndVictoryArray.push("win");
            
        // testing condition - Outer Metal Planet 3.5 or Metal Planet 3 - Rocket zooms out of field to nearest 0 index.
        } else if ((map[rocketPosition[0] - 1][rocketPosition[1]] == 3) || (map[rocketPosition[0] - 1][rocketPosition[1]] == 3.5)) {
            
            var rocketYDistance = 100;
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
                    $rocketAnimate.animate({'margin-top': "-=" + animateDistancePercent + "%"}, "fast", winAndLossCall);
                    rocketY -= rocketYDistance;
                    $rocketAnimate.attr("src", "img/playfield/spaceship_pink.png");
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

//animating the asteroid and updating its index
function asteroidAnimate() {
    if (currentLevel > 2) {
        console.log($asteroid);
        console.log("amy " + asteroidPosition);

        if (asteroidPosition[1] < mapWidth - 1) {
            $asteroid.animate({'margin-left': '+=9%'}, "fast");
            var temp = map[asteroidPosition[0]][asteroidPosition[1] + 1];
            map[asteroidPosition[0]][asteroidPosition[1] + 1] = 0.1;
            map[asteroidPosition[0]][asteroidPosition[1]] = temp;
            asteroidPosition = findAsteroidPosition();

        }
    }
}


function loadNewLevel() {
    // temporary test to change level
    $('.canvas > img').remove();
    $('.algo-space > .added').remove();
    $('.func-space > .added').remove();

    $point.hide();
    $winModal.hide();

    $run.off();
    $run.click(runButton);
    $("#play-first").attr({"src": "img/playfield/play.png"});
    $("#play-hover").attr({"src": "img/playfield/play-hover.png"});


    // change from level one to level two:
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
        currentLevel = 2;
    }

    // make new level
    chooseLevel();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    makeGame();

    // update rocket position for new map
    rocketPosition = findRocketPosition();

    //storing original rocket index position array in const array
    originalRocketIndex = rocketPosition;

    //same for asteroid
    asteroidPosition = findAsteroidPosition();
    originalAsteroidIndex = asteroidPosition;

    //the main array/algorithm the user creates
    algorithm = [];

    //the secondary array that the user creates which they can use inside the main one
    functionTwo = [];

    lossAndVictoryArray = [];

    winCondition = false;

    $rocketAnimate = $("#rocketman");

    something = -1;

    movementObject = {
        x: rocketX,
        y: rocketY
    };
    console.log("The current coordinates are: " + movementObject.x, movementObject.y);

    arraySelect = [];
    moveCounter = -1;

    startState();
    clickElements();
}


var winCondition = false;

var winAndLossCall = function () {

    moveCounter++;
    console.log("array: " + lossAndVictoryArray);
    console.log("move: " + moveCounter);

    //checking to see whether the rocket has hit a planet
    for (var i in lossAndVictoryArray) {

        if (lossAndVictoryArray[i] == "run") {

            //do nothing

        }

        if (lossAndVictoryArray[i] == "lose") {
            if (moveCounter == i) {
                // rLoss.play(); //TestSound

                //stops the current animation and any animation that tries to takes place after (loops for the number of moves in the level)
                for (var j = 0; j <= algorithmLevelMoves + functionTwoLevelMoves; j++) {
                    $rocketAnimate.stop();
                }

                //setTimeout function here to explode the ship and move back to original position
                
                $rocketAnimate.attr("src", "img/playfield/explosion.gif");
                setTimeout(function(){ 
                    $rocketAnimate.attr("src", "img/playfield/spaceship_pink.png")}, 4000);
                setTimeout(function(){ originalPos() },4000);
                setTimeout(function(){ 
                    $("#play-first").attr({"src": "img/playfield/play.png"})
                }, 4000);

                
            }
        }

        if (lossAndVictoryArray[i] == "win") {
            // rVictory.play(); // TestSound

            if (moveCounter == i) {

                if (winCondition === false) {
                    winCondition = true; //"you win" alert only to come up once

                    setTimeout(function () {

                        $point.show();
                        $point.attr("src", "img/playfield/astronaut.png").css({
                            "height": "20%", "width": "20%", "margin-left": "60%", "margin-top": "0%",
                            "animation": "bouncearrow 1s infinite", "transform": "scaleX(-1)"
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

var oldFunction = winAndLossCall;

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
    console.log(savedAlgorithmTemp, savedAlgorithm, algorithm)
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

//level 0
function instructions() {
    var counter = 1;
    modal.style.display = "block";
    $modalImage.attr("src", "img/playfield/astronaut.png").css("height", "9%", "width", "9%");
    $modalTitle.text("Welcome to Space Navigation!").css("font-weight", "bold");
    $modalText.text("Hi there, I'm Hugo! I'm here to show you how to use this spaceship properly.");
    $modalNext.attr("src", "next.png").css("height", "25%", "width", "25%");

    $modalNext.click(function () {
        var newcounter = counter + 1;

        if (counter == 1) {
            $modalText.text("Your goal is to get the spaceship to its destination by creating an algorithm.");
        }

        else if (counter == 2) {
            $modalImage.hide();
            $modalTitle.hide();
            $modalText.text("These buttons are for moving up, down, left and right.");
            $commandsOverlay.attr("src", "img/playfield/commands.png").css({
                "width": "50%",
                "margin-left": "-38%", "margin-top": "116%",
            });

            $point.attr("src", "img/playfield/astronaut.png").css({
                "height": "20%", "width": "20%", "margin-left": "20%", "margin-top": "95%",
                "animation": "bouncearrow 1s infinite", "transform": "scaleX(-1)"
            });
        }

        else if (counter == 3) {
            $modalText.text("The Main View will list all commands that you enter in a queue. You can also remove any commands by clicking on them here.");
            $point.css({"transform": "scaleX(-1)", "margin-left": "60%"});
            $commandsOverlay.attr("src", "img/playfield/mainpanel.png").css({
                "width": "77%",
                "margin-left": "12%", "margin-top": "66%",
            });
        }

        else if (counter == 4) {
            $point.css({"margin-left": "65%", "margin-top": "85%"});
            $modalText.text("Your listed commands will be executed when you hit the play button.");
            $commandsOverlay.attr("src", "play.png").css({
                "width": "50%",
                "margin-left": "25%", "margin-top": "98%",
            });
        }

        else if (counter == 5) {
            modal.style.display = "block";
            $point.hide();
            $modalText.text("Now, see if you can make a list of commands that moves the spaceship toward the destination planet!");
            $commandsOverlay.hide();
            $modalImage.show();

        }

        else if (counter == 6) {
            modal.style.display = "none";

        }
        counter = newcounter;
    });
}


//level 1
function instructionsTwo() {
    modal.style.display = "block";
    var counter = 1;
    $modalText.text("Planets may harm your spaceship if you collide with them.");
    $modalImage.attr("src", "img/playfield/astronaut.png").css("height", "9%", "width", "9%");
    $modalImage.show();
    $modalTitle.hide();
    $modalNext.attr("src", "next.png").css("height", "25%", "width", "25%");
    $commandsOverlay.hide();
    $point.hide();

    $modalNext.click(function () {
        var newcounter = counter + 1;

        if (counter == 1) {
            $modalText.text("You must click each planet to find out its level of danger.");
        }

        else if (counter == 2) {
            $modalText.text("However, you may be prompted to solve a puzzle first!");
            $modalImage.show();
        }

        else if (counter == 3) {
            modal.style.display = "none";
            $commandsOverlay.hide();
        }
        counter = newcounter;
    })
}

//level 2
function instructionsThree() {
    var counter = 1;
    modal.style.display = "block";
    $modalNext.attr("src", "next.png").css("height", "25%", "width", "25%");
    $modalImage.attr("src", "img/playfield/astronaut.png").css("height", "9%", "width", "9%");
    $modalTitle.hide();
    $modalText.text("Hi, it's me again! You may have noticed that the levels become more challenging with more obstacles. 10 commands may not be enough to move your spaceship to its destination.");
    $commandsOverlay.hide();

    $modalNext.click(function () {
        var newcounter = counter + 1;

        if (counter == 1) {
            $modalText.text("You can use the algorithm panel for this problem, by clicking on the panel and adding commands to it, the same way you have learnt with the Main View.");
            $modalImage.hide();
            $point.attr("src", "img/playfield/astronaut.png").css({
                "height": "20%", "width": "20%", "margin-left": "60%", "margin-top": "100%",
                "animation": "bouncearrow 1s infinite", "transform": ""
            });
            $commandsOverlay.attr("src", "img/playfield/func2.png").css({
                "width": "43%", "margin-left": "90.25%", "margin-top": "71.5%"
            });
            $point.show();
            $commandsOverlay.show();
        }

        else if (counter == 2) {
            $modalImage.hide();
            $point.attr("src", "img/playfield/astronaut.png").css({
                "height": "20%", "width": "20%", "margin-left": "24%", "margin-top": "103%",
                "animation": "bouncearrow 1s infinite", "transform": "rotate(85deg)"
            });
            $modalText.text("Your algorithm will be stored in a button that you can insert into the Main View as many times as you'd like!");
            $commandsOverlay.attr("src", "img/playfield/algo-button.png").css({
                "width": "8%", "margin-left": "28%", "margin-top": "158%"
            });
            $commandsOverlay.show();
            $point.show();
        }

        else if (counter == 3) {
            modal.style.display = "none";
            $point.hide();
        }
        counter = newcounter;
    })
}

//level 3
function instructionsFour() {
    var counter = 1;
    modal.style.display = "block";
    $modalNext.attr("src", "next.png").css("height", "25%", "width", "25%");
    $modalImage.show();
    $modalImage.attr("src", "img/playfield/astronaut.png").css("height", "9%", "width", "9%");
    $modalTitle.hide();
    $modalText.text("This is an asteroid. It can damage your spaceship.");
    $commandsOverlay.attr("src", "img/playfield/asteroid.png").css({
        'position': 'absolute',
        'margin-left': '-23%',
        'margin-top': '-22%',
        'max-height': 'auto',
        'width': '9%'
    });
    $commandsOverlay.show();

    $modalNext.click(function () {
        var newcounter = counter + 1;

        if (counter == 1) {
            $modalText.text("It will move whenever your spaceship moves, so be careful!");
            $modalImage.attr("src", "img/playfield/astronaut.png").css("height", "9%", "width", "9%");
            $point.hide();
        }

        else if (counter == 2) {
            modal.style.display = "none";
            $commandsOverlay.hide();
        }
        counter = newcounter;

    });
}
