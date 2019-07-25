"use strict";

var counter = 1;
var text1 = "You're the commander of the spaceship. Your goal is to move the ship around the galaxy to the correct destination. Use the command buttons on the left side of your space controls to move. The commands will be shown in your main panel and can only be excuted at once. ";
var text2 = "Your commands are limited in each level, so think wisely how to move your ship! For this, you can create command queues in the algorithm panel and use them to reduce the amount of commands in your main panel. ";
var text3 = "But be careful of the obstacles on the way to your destination. They might harm your spaceship badly! You can click on them to see what they do.";
var text4 = "Enough said, just try it out!";


$("#next2").click(function(){
    var newcounter = counter+1;
    $("#" + counter).remove();
    if (counter == 1){
        $(".main-part").append("<p id=" + (newcounter) + ">" + text2 +  "</p>");
        $("#back").append("<button class='btn'>Back</button>");
    } else if (counter == 2){
        $(".main-part").append("<p id=" + (newcounter) + ">" + text3 +  "</p>");
    } else if (counter == 3) {
        $(".main-part").append("<p id=" + (newcounter) + ">" + text4 +  "</p>");
        $("#next2 button").remove();
    } 
    counter = newcounter;
    console.log(counter);
});

$("#back").click(function(){
    var backcounter = counter-1;
    $("#" + counter).remove();
    if (counter == 4){
        $(".main-part").append("<p id=" + (backcounter) + ">" + text3 +  "</p>");
        $("#next2").append("<button class='btn pull-right' id='next'>Next</button>");
    } else if (counter == 3){
        $(".main-part").append("<p id=" + (backcounter) + ">" + text2 +  "</p>");
    } else if(counter == 2){
        $(".main-part").append("<p id=" + (backcounter) + ">" + text1 +  "</p>");
        $("#back button").remove();
    } else if (counter == 1){
        $("#back").off("click");
    }
    counter = backcounter;
    console.log(backcounter);
});