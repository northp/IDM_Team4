"use strict";

var counter = 1;
var text1 = "You're the commander of the spaceship. Your goal is to move the ship around the galaxy to the correct destination.The aim of the game is to get to your destination in one piece, avoiding the obstacles that are scattered across the playing field";

var text2 = "Movement: In order to move you must create a series of movements using directional arrows and click the play button to carry them out. ";
var text222 =   "By clicking on the direction button you add it to the series. You can use up to 10 buttons";
var text224=    "An algorithm is a series of up to 5 movements that can be used as one button. You can create 3 algorithms. ";

var text3 = " Planets: Each planet has a different zone around it which will affect your ship differently.";
var text331="To see the zone you must click on the planet and complete the task. ";
var text332="Negative zones cannot be entered by your ship or will you will have to start again.";
var text333="Positive zones will move your ship in a particular direction. ";

var text4 = "Asteroids and falling stars:Asteroids and falling stars are to be avoided at all costs. Watch them closely to see how they move as they respond to your movements.";

var text5="Checkpoints:Your progress will be saved after you complete each stage. To go back at any time, just click on the home button and choose which checkpoint you would like to go to.";


var overviewImg = $("#computational");
var brain = $(".Brain");
var brain1 = $("#brain1");
var brain2 = $("#brain2");
var brain3 = $("#brain3");
var brain4 = $("#brain4");

var braincolour1 = $(".brain1_colour");
var braincolour2 = $(".brain2_colour");
var braincolour3 = $(".brain3_colour");
var braincolour4 = $(".brain4_colour");

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


var createdDiv = false;

brain1.click(function(){
    hideImgs(); 
    if (createdDiv === false){
        addTextDivs();
        createdDiv = true;
    }
    $(".brain1_colour").attr("src","img/other/brain_decomposition_colour.png")
    $(".brain2_colour").attr("src", "img/other/brain_abstraction_grey.png");
    $(".brain3_colour").attr("src", "img/other/brain_pattern_grey.png");
    $(".brain4_colour").attr("src", "img/other/brain_algorithm_grey.png");
    $(".brain_image").attr("src","img/other/Brain1.png");
    $("h2").text("Decomposition");
    $("p").text("Decomposition involves the breaking down of a problem into smaller manageable components, each of which could be worked upon individually, one at a time. This makes complex problems easier to solve.");
})

brain2.click(function(){
    hideImgs();
    if (createdDiv === false){
        addTextDivs();
        createdDiv = true;
    }
    $(".brain1_colour").attr("src","img/other/brain_decomposition_grey.png")
    $(".brain2_colour").attr("src", "img/other/brain_abstraction_colour.png");
    $(".brain3_colour").attr("src", "img/other/brain_pattern_grey.png");
    $(".brain4_colour").attr("src", "img/other/brain_algorithm_grey.png");
    $(".brain_image").attr("src","img/other/Brain2.png");
    $("h2").text("Abstraction");
    $("p").text("Abstraction involves identification of general principles or rules that produce a set of patterns. It is the process of filtering out – ignoring - the characteristics of patterns that is not needed in order to concentrate on those that are needed. It is also the filtering out of specific details. From this we create a representation (idea) of what we are trying to solve.");
})

brain3.click(function(){
    hideImgs();
    if (createdDiv === false){
        addTextDivs();
        createdDiv = true;
    }
    $(".brain1_colour").attr("src","img/other/brain_decomposition_grey.png")
    $(".brain2_colour").attr("src", "img/other/brain_abstraction_grey.png");
    $(".brain3_colour").attr("src", "img/other/brain_pattern_colour.png");
    $(".brain4_colour").attr("src", "img/other/brain_algorithm_grey.png");
    $(".brain_image").attr("src","img/other/Brain3.png");
    $("h2").text("Pattern Recongition");
    $("p").text("Pattern recognition involves identifying patterns and trends in a set of data. This enables to find a solution in a more efficient and effective way.");
})

brain4.click(function(){
    hideImgs();
    if (createdDiv === false){
        addTextDivs();
        createdDiv = true;
    }
    $(".brain1_colour").attr("src","img/other/brain_decomposition_grey.png")
    $(".brain2_colour").attr("src", "img/other/brain_abstraction_grey.png");
    $(".brain3_colour").attr("src", "img/other/brain_pattern_grey.png");
    $(".brain4_colour").attr("src", "img/other/brain_algorithm_colour.png");
    $(".brain_image").attr("src","img/other/Brain4.png");
    $("h2").text("Algorithm");
    $("p").text("Algorithmic design implies formulating a set of instructions for step-by-step solution of the present problem as well as other problems of a similar kind. ");
})

function hideImgs(){
    overviewImg.hide();
    brain1.hide();
    brain2.hide();
    brain3.hide();
    brain4.hide();
}

function addTextDivs(){
    $(".title").append("<div class='text'><div class='main-part'><h2></h2><p></p></div></div>");
    brain.show();
}

braincolour1.click(function(){
    $(".brain1_colour").attr("src","img/other/brain_decomposition_colour.png")
    $(".brain2_colour").attr("src", "img/other/brain_abstraction_grey.png");
    $(".brain3_colour").attr("src", "img/other/brain_pattern_grey.png");
    $(".brain4_colour").attr("src", "img/other/brain_algorithm_grey.png");
    $(".brain_image").attr("src","img/other/Brain1.png");
    $("h2").text("Decomposition");
    $("p").text("Decomposition involves the breaking down of a problem into smaller manageable components, each of which could be worked upon individually, one at a time. This makes complex problems easier to solve.");
})

braincolour2.click(function(){
    $(".brain1_colour").attr("src","img/other/brain_decomposition_grey.png")
    $(".brain2_colour").attr("src", "img/other/brain_abstraction_colour.png");
    $(".brain3_colour").attr("src", "img/other/brain_pattern_grey.png");
    $(".brain4_colour").attr("src", "img/other/brain_algorithm_grey.png");
    $(".brain_image").attr("src","img/other/Brain2.png");
    $("h2").text("Abstraction");
    $("p").text("Abstraction involves identification of general principles or rules that produce a set of patterns. It is the process of filtering out – ignoring - the characteristics of patterns that is not needed in order to concentrate on those that are needed. It is also the filtering out of specific details. From this we create a representation (idea) of what we are trying to solve.");
})

braincolour3.click(function(){
    $(".brain1_colour").attr("src","img/other/brain_decomposition_grey.png")
    $(".brain2_colour").attr("src", "img/other/brain_abstraction_grey.png");
    $(".brain3_colour").attr("src", "img/other/brain_pattern_colour.png");
    $(".brain4_colour").attr("src", "img/other/brain_algorithm_grey.png");
    $(".brain_image").attr("src","img/other/Brain3.png");
    $("h2").text("Pattern Recongition");
    $("p").text("Pattern recognition involves identifying patterns and trends in a set of data. This enables to find a solution in a more efficient and effective way.");
})

braincolour4.click(function(){
    $(".brain1_colour").attr("src","img/other/brain_decomposition_grey.png")
    $(".brain2_colour").attr("src", "img/other/brain_abstraction_grey.png");
    $(".brain3_colour").attr("src", "img/other/brain_pattern_grey.png");
    $(".brain4_colour").attr("src", "img/other/brain_algorithm_colour.png");
    $(".brain_image").attr("src","img/other/Brain4.png");
    $("h2").text("Algorithm");
    $("p").text("Algorithmic design implies formulating a set of instructions for step-by-step solution of the present problem as well as other problems of a similar kind. ");
})
