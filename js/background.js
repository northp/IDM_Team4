"use strict";

var counter = 1;
var counter2 = 11;
var counter3 = 21;

var text1 = "Computational Thinking";
var text11 ="Computational thinking is a problem solving process that allows us to take a complex problem, understand what the problem is and develop possible solutions. CT is essential to the development of computer applications, but it can also be used to support problem solving across all disciplines, including the humanities, math, and science. There are four cornerstones to Computational Thinking: Decomposition, Pattern recognition, Abstraction and Algorithms.";
var text2 = "Decomposition";
var text22 = "Decomposition is breaking down complex problems into more manageable parts. So for a user to navigate the space playing field, they must first break down each area to the parts of it which they can navigate.";
var text3 = " Abstraction\n";
var text33 = " Abstraction is gathering general characteristics and filtering out of details we do not need in order to solve our problem. In Cosmic Computing this is represented by how the player chooses which planets are releveant to their potential path.";
var text4 = "Pattern Recognition\n";
var text44 = "Pattern recognition involves finding the similarities or patterns among small, decomposed problems that can help us solve more complex problems more efficiently. This is particulary prevalent in our mini-games. \n";
var text5 = "Algorithms\n";
var text55 = "An algorithm is a plan, a set of step-by-step instructions to solve a problem. This aspect of CT is clearly related to the algorithm functionality of moving the spaceship with a set of command that is stored in advance to be used when needed during the game. ";

$("#next2").click(function(){
    var newcounter = counter+1;
    var newcounter2 = counter2+1;
    var newcounter3 = counter3+1;

    $("#" + counter).remove();
    $("#" + counter2).remove();
    $("#" + counter3).remove();
    if (counter == 1){
        $(".main-part").append("<h4 id = " + (newcounter2) + ">" + text2 +  "</h4>");
        $(".main-part").append("<p id=" + (newcounter) + ">" + text22 +  "</p>");
        $(".Brain").append('<img id='+  (newcounter3) + ' src="https://i.ibb.co/wpB4j1Q/Brain1.png" class= "brain_image"/>');
        $("#back").append("<button class='btn'>Back</button>");
    } else if (counter == 2){
        $(".main-part").append("<h4 id = " + (newcounter2) + ">" + text3 +  "</h4>");
        $(".main-part").append("<p id=" + (newcounter) + ">" + text33 +  "</p>");
        $(".Brain").append('<img id='+  (newcounter3) + ' src="https://i.ibb.co/zHqX3cC/Brain2.png" class= "brain_image" />');
    } else if (counter == 3){
        $(".main-part").append("<h4 id= " + (newcounter2) + ">" + text4 +  "</h4>");
        $(".main-part").append("<p id=" + (newcounter) + ">" + text44 +  "</p>");
        $(".Brain").append('<img id='+ (newcounter3) + ' src="https://i.ibb.co/F7tfjdd/Brain3.png" class= "brain_image" />');
    } else if (counter == 4) {
        $(".main-part").append("<h4 id= " + (newcounter2) + ">" + text5 +  "</h4>");
        $(".main-part").append("<p id=" + (newcounter) + ">" + text55 +  "</p>");
        $(".Brain").append('<img id='+ (newcounter3) + ' src="https://i.ibb.co/SvX58gN/Brain4.png" class= "brain_image" />');
        $("#next2 button").remove();
    }
    counter3 = newcounter3;
    counter2 = newcounter2;
    counter = newcounter;
    console.log(counter3);
});

$("#back").click(function(){
    var backcounter = counter-1;
    var backcounter2 = counter2-1;
    var backcounter3 = counter3-1;

    $("#" + counter).remove();
    $("#" + counter2).remove();
    $("#" + counter3).remove();

    if (counter == 5){
        $(".main-part").append("<h4 id= " + (backcounter2) + ">" + text4 +  "</h4>");
        $(".main-part").append("<p id=" + (backcounter) + ">" + text44 +  "</p>");
        $(".Brain").append('<img id='+ (backcounter3) + ' src="https://i.ibb.co/F7tfjdd/Brain3.png" class= "brain_image" />');
        $("#next2").append("<button class='btn pull-right' id='next'>Next</button>");
    } else if (counter == 4){
        $(".main-part").append("<h4 id = " + (backcounter2) + ">" + text3 +  "</h4>");
        $(".main-part").append("<p id=" + (backcounter) + ">" + text33 +  "</p>");
        $(".Brain").append('<img id='+  (backcounter3) + ' src="https://i.ibb.co/zHqX3cC/Brain2.png" class= "brain_image" />');

    } else if (counter == 3){
        $(".main-part").append("<h4 id = " + (backcounter2) + ">" + text2 +  "</h4>");
        $(".main-part").append("<p id=" + (backcounter) + ">" + text22 +  "</p>");
        $(".Brain").append('<img id='+  (backcounter3) + ' src="https://i.ibb.co/wpB4j1Q/Brain1.png" class= "brain_image" />');
    } else if(counter == 2){
        $(".main-part").append("<h4 id= " + (backcounter2) + ">" + text1 +  "</h4>");
        $(".main-part").append("<p id=" + (backcounter) + ">" + text11 +  "</p>");
        $(".Brain").append('<img id='+  (backcounter3) + ' src="https://i.ibb.co/SXrjNBC/brain.png" class= "brain_image"/>');
        $("#back button").remove();
    } else if (counter == 1){
        $("#back").off("click");
    }

    counter3 = backcounter3;
    counter2 = backcounter2;
    counter = backcounter;
    console.log(backcounter);
});
