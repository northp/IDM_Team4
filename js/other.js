"use strict";

var counter = 1;
var text1 = "You're the commander of the spaceship. Your goal is to guide the ship around space to the correct destination. You must avoid any dangerous obstacles that are scattered across the playing field.";
//var text1 = "Your home planet is dying so you must travel to different planets to see if they can sustain life. Your goal is to move your spaceship to the correct " +
// "destination in each level while avoiding any dangerous obstacles that are scattered across the playing field.";

var text2 = "You must create a series of movements by tapping the arrow commands. This is your algorithm. You can then click the run button to carry it out.";
var text222 = "Once you tap an arrow button it will be added to your list of commands. You can use up to 10 moves. You can remove any commands by tapping on them.";
var text224 = "From level 3, you can make a second algorithm and use it as a single command. Once you create this algorithm, you can save it and then call it in the main view.";

var text3 = "Some planets are safe to fly through, while some are dangerous. You need to consider each planet individually.";
var text331 = "Some planets have hidden zones around them which will affect your ship differently. To unlock the zone you must click on the planet and complete the task.";
var text332 = "Red zones are dangerous.";
var text333 = "Green zones will push your ship to the end of the zone immediately, giving you an extra move. ";

var text4 = "Asteroids and falling stars are to be avoided at all costs. Watch them closely to see how they move as they respond to your movements.";

var text5 = "Your progress will be saved after you complete each level. To go back at any time, just click on the home button and choose which checkpoint you would like to go to.";


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

$("#next2").click(function () {
    var newcounter = counter + 1;
    $("#" + counter).remove();
    $("#" + counter).remove();
    $("#" + counter).remove();
    $("#" + counter).remove();
    if (counter == 1) {
        $(".main-part").append("<p id=" + (newcounter) + ">" + text2 + "</p> " + "<p id=" + (newcounter) + ">" + text222 + "</p>" + "<p id=" + (newcounter) + ">" + text224 + "</p>");
        $("#back").append("<button class='btn'>Back</button>");
    } else if (counter == 2) {
        $(".main-part").append("<p id=" + (newcounter) + ">" + text3 + "</p>" + "<p id=" + (newcounter) + ">" + text331 + "</p>" + "<p id=" + (newcounter) + ">" + text332 + "</p>" + "<p id=" + (newcounter) + ">" + text333 + "</p>");
    } else if (counter == 3) {
        $(".main-part").append("<p id=" + (newcounter) + ">" + text4 + "</p>");
    } else if (counter == 4) {
        $(".main-part").append("<p id=" + (newcounter) + ">" + text5 + "</p>");
        $("#next2 button").remove();
    }
    counter = newcounter;
    console.log(counter);
});

$("#back").click(function () {
    var backcounter = counter - 1;
    $("#" + counter).remove();
    $("#" + counter).remove();
    $("#" + counter).remove();
    $("#" + counter).remove();
    $("#" + counter).remove();
    if (counter == 5) {
        $(".main-part").append("<p id=" + (backcounter) + ">" + text4 + "</p>");
        $("#next2").append("<button class='btn pull-right' id='next'>Next</button>");
    } else if (counter == 4) {
        $(".main-part").append("<p id=" + (backcounter) + ">" + text3 + "</p>" + "</p>" + "<p id=" + (backcounter) + ">" + text331 + "</p>" + "<p id=" + (backcounter) + ">" + text332 + "</p>" + "</p>" + "<p id=" + (backcounter) + ">" + text333 + "</p>");
    } else if (counter == 3) {
        $(".main-part").append("<p id=" + (backcounter) + ">" + text2 + "</p>" + "<p id=" + (backcounter) + ">" + text222 + "</p>" + "<p id=" + (backcounter) + ">" + "<p id=" + (backcounter) + ">" + text224 + "</p>");
    } else if (counter == 2) {
        $(".main-part").append("<p id=" + (backcounter) + ">" + text1 + "</p>");
        $("#back button").remove();
    } else if (counter == 1) {
        $("#back").off("click");
    }
    counter = backcounter;
    console.log(backcounter);
});


var createdDiv = false;

brain1.click(function () {
    hideImgs();
    if (createdDiv === false) {
        addTextDivs();
        $("#description").hide();
        createdDiv = true;
    }
    $(".brain1_colour").attr("src", "img/other/brain_decomposition_colour.png");
    $(".brain2_colour").attr("src", "img/other/brain_abstraction_grey.png");
    $(".brain3_colour").attr("src", "img/other/brain_pattern_grey.png");
    $(".brain4_colour").attr("src", "img/other/brain_algorithm_grey.png");
    $(".brain_image").attr("src", "img/other/Brain1.png");
    $("h2").text("Decomposition");
    // $("p").text("Decomposition involves the breaking down of a problem into smaller manageable components, each of which could be worked upon individually, one at a time. This makes complex problems easier to solve.");
    //$("p").text("Decomposition involves breaking down a complex problem into more manageable parts. In Cosmic Computing, for a user to navigate the space playing field, they must look at the smaller first break down each area to the parts of it which they can navigate.");
    $("p").text("Decomposition involves breaking down a complex problem into more manageable parts. In Cosmic Computing, the main problem is getting your spaceship to the destination planet. The obstacles in your way are the smaller, more manageable problems that must be looked at individually. Focusing on them helps you solve the bigger problem.");
});

brain2.click(function () {
    hideImgs();
    if (createdDiv === false) {
        addTextDivs();
        $("#description").hide();
        createdDiv = true;
    }
    $(".brain1_colour").attr("src", "img/other/brain_decomposition_grey.png");
    $(".brain2_colour").attr("src", "img/other/brain_abstraction_colour.png");
    $(".brain3_colour").attr("src", "img/other/brain_pattern_grey.png");
    $(".brain4_colour").attr("src", "img/other/brain_algorithm_grey.png");
    $(".brain_image").attr("src", "img/other/Brain2.png");
    $("h2").text("Abstraction");
    //$("p").text("Abstraction involves identification of general principles or rules that produce a set of patterns. It is the process of filtering out – ignoring - the characteristics of patterns that is not needed in order to concentrate on those that are needed. It is also the filtering out of specific details. From this we create a representation (idea) of what we are trying to solve.");
    $("p").text("Abstraction involves gathering general characteristics and filtering out details we do not need in order to solve a problem. In Cosmic Computing this is represented by how the player chooses which planets are relevant to their potential path, and which ones they can ignore.");
});

brain3.click(function () {
    hideImgs();
    if (createdDiv === false) {
        addTextDivs();
        $("#description").hide();
        createdDiv = true;
    }
    $(".brain1_colour").attr("src", "img/other/brain_decomposition_grey.png");
    $(".brain2_colour").attr("src", "img/other/brain_abstraction_grey.png");
    $(".brain3_colour").attr("src", "img/other/brain_pattern_colour.png");
    $(".brain4_colour").attr("src", "img/other/brain_algorithm_grey.png");
    $(".brain_image").attr("src", "img/other/Brain3.png");
    $("h2").text("Pattern Recognition");
    //$("p").text("Pattern recognition involves identifying patterns and trends in a set of data. This enables to find a solution in a more efficient and effective way.");
    $("p").text("Pattern recognition involves finding the similarities or patterns among small, decomposed problems that can help us solve more complex problems more efficiently. This is particularly prevalent in our mini-games, and can also be seen in how certain planet types can be recognised as either dangerous or safe.");
});

brain4.click(function () {
    hideImgs();
    if (createdDiv === false) {
        addTextDivs();
        $("#description").hide();
        createdDiv = true;
    }
    $(".brain1_colour").attr("src", "img/other/brain_decomposition_grey.png");
    $(".brain2_colour").attr("src", "img/other/brain_abstraction_grey.png");
    $(".brain3_colour").attr("src", "img/other/brain_pattern_grey.png");
    $(".brain4_colour").attr("src", "img/other/brain_algorithm_colour.png");
    $(".brain_image").attr("src", "img/other/Brain4.png");
    $("h2").text("Algorithm");
    //$("p").text("Algorithmic design implies formulating a set of instructions for step-by-step solution of the present problem as well as other problems of a similar kind. ");
    $("p").text("An algorithm is a plan, a set of step-by-step instructions to solve a problem. This aspect of CT is related to the algorithm functionality of moving the spaceship with a set of commands that are stored in advance to be used when needed during the game.");
});

function hideImgs() {
    overviewImg.hide();
    brain1.hide();
    brain2.hide();
    brain3.hide();
    brain4.hide();
}

function addTextDivs() {
    $(".title").append("<div class='text'><div class='main-part'><h2></h2><p></p></div></div>");
    brain.show();
}

braincolour1.click(function () {
    $(".brain1_colour").attr("src", "img/other/brain_decomposition_colour.png");
    $(".brain2_colour").attr("src", "img/other/brain_abstraction_grey.png");
    $(".brain3_colour").attr("src", "img/other/brain_pattern_grey.png");
    $(".brain4_colour").attr("src", "img/other/brain_algorithm_grey.png");
    $(".brain_image").attr("src", "img/other/Brain1.png");
    $("h2").text("Decomposition");
    //$("p").text("Decomposition involves the breaking down of a problem into smaller manageable components, each of which could be worked upon individually, one at a time. This makes complex problems easier to solve.");
    //$("p").text("Decomposition involves breaking down a complex problem into more manageable parts. In Cosmic Computing, for a user to navigate the space playing field, they must look at the smaller first break down each area to the parts of it which they can navigate.");
    $("p").text("Decomposition involves breaking down a complex problem into more manageable parts. In Cosmic Computing, the main problem is getting your spaceship to the destination planet. The obstacles in your way are the smaller, more manageable problems that must be looked at individually. Focusing on them helps you solve the bigger problem.");

});

braincolour2.click(function () {
    $(".brain1_colour").attr("src", "img/other/brain_decomposition_grey.png");
    $(".brain2_colour").attr("src", "img/other/brain_abstraction_colour.png");
    $(".brain3_colour").attr("src", "img/other/brain_pattern_grey.png");
    $(".brain4_colour").attr("src", "img/other/brain_algorithm_grey.png");
    $(".brain_image").attr("src", "img/other/Brain2.png");
    $("h2").text("Abstraction");
    //$("p").text("Abstraction involves identification of general principles or rules that produce a set of patterns. It is the process of filtering out – ignoring - the characteristics of patterns that is not needed in order to concentrate on those that are needed. It is also the filtering out of specific details. From this we create a representation (idea) of what we are trying to solve.");
    $("p").text("Abstraction involves gathering general characteristics and filtering out details we do not need in order to solve a problem. In Cosmic Computing this is represented by how the player chooses which planets are relevant to their potential path, and which ones they can ignore.");


});

braincolour3.click(function () {
    $(".brain1_colour").attr("src", "img/other/brain_decomposition_grey.png");
    $(".brain2_colour").attr("src", "img/other/brain_abstraction_grey.png");
    $(".brain3_colour").attr("src", "img/other/brain_pattern_colour.png");
    $(".brain4_colour").attr("src", "img/other/brain_algorithm_grey.png");
    $(".brain_image").attr("src", "img/other/Brain3.png");
    $("h2").text("Pattern Recognition");
    //$("p").text("Pattern recognition involves identifying patterns and trends in a set of data. This enables to find a solution in a more efficient and effective way.");
    $("p").text("Pattern recognition involves finding the similarities or patterns among small, decomposed problems that can help us solve more complex problems more efficiently. This is particularly prevalent in our mini-games, and can also be seen in how certain planet types can be recognised as either dangerous or safe.");

});

braincolour4.click(function () {
    $(".brain1_colour").attr("src", "img/other/brain_decomposition_grey.png");
    $(".brain2_colour").attr("src", "img/other/brain_abstraction_grey.png");
    $(".brain3_colour").attr("src", "img/other/brain_pattern_grey.png");
    $(".brain4_colour").attr("src", "img/other/brain_algorithm_colour.png");
    $(".brain_image").attr("src", "img/other/Brain4.png");
    $("h2").text("Algorithm");
    //$("p").text("Algorithmic design implies formulating a set of instructions for step-by-step solution of the present problem as well as other problems of a similar kind. ");
    $("p").text("An algorithm is a plan, a set of step-by-step instructions to solve a problem. This aspect of CT is related to the algorithm functionality of moving the spaceship with a set of commands that are stored in advance to be used when needed during the game.");

});
