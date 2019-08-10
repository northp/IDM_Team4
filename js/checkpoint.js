"use strict";

// A variable to represent the selected map
var currentLevel = 0;

// A variable to represent the highest completed level.
var highestCompletedLevel = 0;


if((!parseInt(localStorage.getItem("currentLevel")) >= 1) || (!parseInt(localStorage.getItem("currentLevel")) > 8)){
    localStorage.setItem("currentLevel", currentLevel);
    localStorage.setItem("highestCompletedLevel", highestCompletedLevel);
}

/* Adding LocalStorage Code */
function loadStorageData(){
    // Local storage: Current Level and Highest Completed level start at 0;
    currentLevel = parseInt(localStorage.getItem("currentLevel"));
    localStorage.setItem("currentLevel", currentLevel);

    highestCompletedLevel = parseInt(localStorage.getItem("highestCompletedLevel"));
    localStorage.setItem("highestCompletedLevel", highestCompletedLevel);
}

loadStorageData();


$(".planet1").click(function(){
  currentLevel = 0;
  localStorage.setItem("currentLevel", currentLevel);
  window.location = "appv2.html";
});
$(".planet2").click(function(){
  currentLevel = 1;
  localStorage.setItem("currentLevel", currentLevel);
  window.location = "appv2.html";
});
$(".planet3").click(function(){
  currentLevel = 2;
  localStorage.setItem("currentLevel", currentLevel);
  window.location = "appv2.html";
});
$(".planet4").click(function(){
  currentLevel = 3;
  localStorage.setItem("currentLevel", currentLevel);
  window.location = "appv2.html";
});
$(".planet5").click(function(){
  currentLevel = 4;
  localStorage.setItem("currentLevel", currentLevel);
  window.location = "appv2.html";
});
$(".planet6").click(function(){
  currentLevel = 5;
  localStorage.setItem("currentLevel", currentLevel);
  window.location = "appv2.html";
});$(".planet7").click(function(){
  currentLevel = 6;
  localStorage.setItem("currentLevel", currentLevel);
  window.location = "appv2.html";
});
$(".planet8").click(function(){
  currentLevel = 7;
  localStorage.setItem("currentLevel", currentLevel);
  window.location = "appv2.html";
});
