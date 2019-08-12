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

function checkLevel(){
if (highestCompletedLevel == 0){
  $("#checkpoints").attr("src","img/other/checkpoint0.png");
}
  if (highestCompletedLevel == 1){
    $("#checkpoints").attr("src","img/other/checkpoint1.png");
  }
  if (highestCompletedLevel == 2){
    $("#checkpoints").attr("src","img/other/checkpoint2.png");
  }
  if (highestCompletedLevel == 3){
    $("#checkpoints").attr("src","img/other/checkpoint3.png");
  }
  if (highestCompletedLevel == 4){
    $("#checkpoints").attr("src","img/other/checkpoint4.png");
  }
  if (highestCompletedLevel == 5){
    $("#checkpoints").attr("src","img/other/checkpoint5.png");
  }
  if (highestCompletedLevel == 6){
    $("#checkpoints").attr("src","img/other/checkpoint6.png");
  }
  if (highestCompletedLevel == 7){
    $("#checkpoints").attr("src","img/other/checkpoint7.png");
  }
}

function showAlert(planetNumber){
  $(".planet" + planetNumber).append("<p class='alert'> Solve the other planets first.</p>")
  setTimeout(function(){$(".alert").hide()}, 1250);
}

loadStorageData();
checkLevel();

$(".play-btn").click(function(){
  console.log(currentLevel);
  currentLevel = highestCompletedLevel+1;
  localStorage.setItem("currentLevel", currentLevel);
  window.location = "appv2.html";
  });


$(".planet1").click(function(){
  currentLevel = 7;
  localStorage.setItem("currentLevel", currentLevel);
  if (highestCompletedLevel == 7){
    window.location = "appv2.html";
  } else {
    showAlert(1);
  }
});
$(".planet2").click(function(){
  currentLevel = 6;
  localStorage.setItem("currentLevel", currentLevel);
  if (highestCompletedLevel == 6){
    window.location = "appv2.html";
  } else {
    showAlert(2);
  }
});
$(".planet3").click(function(){
  currentLevel = 5;
  localStorage.setItem("currentLevel", currentLevel);
  if (highestCompletedLevel == 5){
    window.location = "appv2.html";
  } else {
    showAlert(3);
  }
});
$(".planet4").click(function(){
  currentLevel = 4;
  localStorage.setItem("currentLevel", currentLevel);
  if (highestCompletedLevel == 4){
    window.location = "appv2.html";
  } else {
    showAlert(4);
  }
});
$(".planet5").click(function(){
  currentLevel = 3;
  localStorage.setItem("currentLevel", currentLevel);
  if (highestCompletedLevel == 3){
    window.location = "appv2.html";
  } else {
    showAlert(5);
  }
});
$(".planet6").click(function(){
  currentLevel = 2;
  localStorage.setItem("currentLevel", currentLevel);
  if (highestCompletedLevel == 2){
    window.location = "appv2.html";
  } else {
    showAlert(6);
  }
});
$(".planet7").click(function(){
  currentLevel = 1;
  localStorage.setItem("currentLevel", currentLevel);
  if (highestCompletedLevel == 1){
    window.location = "appv2.html";
    } else {
      showAlert(7);
    }
});
$(".planet8").click(function(){
  currentLevel = 0;
  localStorage.setItem("currentLevel", currentLevel);
  window.location = "appv2.html";
});

$(".play-btn").click(function(){
    console.log(currentLevel);
    currentLevel = highestCompletedLevel;
    localStorage.setItem("currentLevel", currentLevel);
    });