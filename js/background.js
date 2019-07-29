"use strict";

var counter = 1;
var counter2 = 11;
var counter3 = 21;

var text1 = "Cmputational Thinking";
var text11 ="As mentioned in the theoretical background, computational thinking consists of four different areas. Decomposition, abstraction, pattern recognition and algorithm. The following passages describe how the game can be broken down to those four areas.";
var text2 = "Decomposition";
var text22 = "Decomposition is what";
var text3 = " Abstraction\n";
var text33 = " Abstraction is emphasized by thinking of a way to move through the galaxy by looking at the whole playing field and search for a possible pattern that avoids the less important part to get around, such as planets that don’t have an effect on the spaceship or asteroids that can’t reach the spaceship while moving. In higher levels, abstraction will be added with mini games that will challenge the player in that area.";
var text4 = "Pattern Recognition\n";
var text44 = "The player should naturally make use of pattern recognition when going up in the higher levels because the principle of the game is the same and the functionalities of the obstacles as well. There will be planets that have danger levels, and planets that won’t. This can be applied as the player’s knowledge in the higher levels and make the player more efficient by solving the puzzle. Furthermore, mini tasks to find out the planets’ characteristics will also involve pattern recognition as content\n";
var text5 = "Algorithms\n";
var text55 = "This aspect of CT is clearly related to the algorithm functionality of moving the spaceship with a set of command that is stored in advance to be used when needed during the game. ";

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
})