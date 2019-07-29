"use strict";

var counter = 1;
var text1 = "Your the commander of the spaceship. Your goal is to move the ship around the galaxy to the correct destination.The aim of the game is to get to your destination in one piece, avoiding the obstacles that are scattered across the playing field";

var text2 = "Movement: In order to move you must create a series of movements using directional arrows and click the play button to carry them out. ";
var text222 =   "By clicking on the direction button you add it to the series. You can use up to 10 buttons";
var text224=    "An algorithm is a series of up to 5 movements that can be used as one button. You can create 3 algorithms. ";

var text3 = " Planets: Each planet has a different zone around it which will affect your ship differently.";
var text331="To see the zone you must click on the planet and complete the task. ";
var text332="Negative zones cannot be entered by your ship or will you will have to start again.";
var text333="Positive zones will move your ship in a particular direction. ";

var text4 = "Asteroids and falling stars:Asteroids and falling stars are to be avoided at all costs. Watch them closely to see how they move as they respond to your movements.";

var text5="Checkpoints:Your progress will be saved after you complete each stage. To go back at any time, just click on the home button and choose which checkpoint you would like to go to.";


$("#next2").click(function(){
    var newcounter = counter+1;
    $("#" + counter).remove();
    $("#" + counter).remove();
    $("#" + counter).remove();
    $("#" + counter).remove();
    if (counter == 1){
        $(".main-part").append("<p id=" + (newcounter) + ">" + text2 +  "</p> " + "<p id=" + (newcounter) + ">" + text222 +  "</p>" + "<p id=" + (newcounter) + ">" + text224 +  "</p>");
        $("#back").append("<button class='btn'>Back</button>");
    } else if (counter == 2){
        $(".main-part").append("<p id=" + (newcounter) + ">" + text3 +  "</p>" + "<p id=" + (newcounter) + ">" + text331 +  "</p>"+ "<p id=" + (newcounter) + ">" + text332 +  "</p>" + "<p id=" + (newcounter) + ">" + text333 +  "</p>");
    } else if (counter == 3) {
        $(".main-part").append("<p id=" + (newcounter) + ">" + text4 +  "</p>" );
    } else if (counter == 4) {
        $(".main-part").append("<p id=" + (newcounter) + ">" + text5 +  "</p>" );
        $("#next2 button").remove();
    } 
    counter = newcounter;
    console.log(counter);
});

$("#back").click(function(){
    var backcounter = counter-1;
    $("#" + counter).remove();
    $("#" + counter).remove();
    $("#" + counter).remove();
    $("#" + counter).remove();
    $("#" + counter).remove();
    if (counter == 5){
        $(".main-part").append("<p id=" + (backcounter) + ">" + text4 +  "</p>");
        $("#next2").append("<button class='btn pull-right' id='next'>Next</button>");
    } else if (counter == 4){
        $(".main-part").append("<p id=" + (backcounter) + ">" + text3 +  "</p>" +  "</p>" + "<p id=" + (backcounter) + ">" + text331 +  "</p>"+ "<p id=" + (backcounter) + ">" + text332 +  "</p>" +  "</p>" + "<p id=" + (backcounter) + ">" + text333 +  "</p>");
    } else if (counter == 3){
        $(".main-part").append("<p id=" + (backcounter) + ">" + text2 +  "</p>" + "<p id=" + (backcounter) + ">" + text222 +  "</p>"  + "<p id=" + (backcounter) + ">" + "<p id=" + (backcounter) + ">" + text224 +  "</p>");
    } else if(counter == 2){
        $(".main-part").append("<p id=" + (backcounter) + ">" + text1 +  "</p>");
        $("#back button").remove();
    } else if (counter == 1){
        $("#back").off("click");
    }
    counter = backcounter;
    console.log(backcounter);
});