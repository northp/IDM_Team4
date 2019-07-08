"use strict";

var counter = 1;
var text2 = "Text 2";
var text3 = "Text 3";
var text1 = "Text 1";
var text4 = "Text 4";


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
})