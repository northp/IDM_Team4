'use strict';


var fs = require('fs');
// var express = require('express');
// var app = express();
// app.use(express.static("../js"));
var filePath = "JSON/data.json";


// A function to find the current Level (tracked in JSON file)
function findCurrentLevel(){
    fs.readFile(filePath, (err, results) => {
        if (err) {
            return console.error(err);
        };
        var results = JSON.parse(results.toString());
        console.log("Current Level: " + results.current_level);
    });
}

// A function to find the highest completed Level (tracked in JSON file)
function findHighestCompletedLevel(){
    fs.readFile(filePath, (err, results) => {
        if (err) {
            return console.error(err);
        };
        var results = JSON.parse(results.toString());
        console.log("Highest Completed Level: " + results.highest_level_completed);
    });
}


// a function to reset the current level to 0 (can be modified, in theory, to choose any previously completed level)
function resetProgress(){
    fs.readFile(filePath, (err, results) => {
        if(err){
            return console.log(err);
        }
        var results = JSON.parse(results.toString());
        results.current_level = 1;
        var currentLevel = results.current_level;
        var writeData = fs.writeFile("index.json", JSON.stringify(results), (err) => {
            if (err) {
                return console.error(err);
            } else {
                console.log("Current Level: " + results.current_level);
                console.log("Highest Level Completed: " + results.highest_level_completed);
            }
        });
        response.send("Reset current Level to 1; current Level: " + results.current_level + "; Highest Level Completed: " + results.highest_level_completed);
        
    });
}

// a function to "complete" a level. Should increment current level. Should only increment highest level completed if current level completed is higher than highest level completed in the JSON file.
function completeLevel(){
    fs.readFile(filePath, (err, results) => {
        if (err) {
            return console.error(err);
        };
        var results = JSON.parse(results.toString());
        var currentLevel = results.current_level;
        if (results.highest_level_completed > currentLevel) {
            results.highest_level_completed = results.highest_level_completed;
            results.current_level = currentLevel + 1;
        } else if (results.highest_level_completed <= currentLevel) {
            results.highest_level_completed = currentLevel;
            results.current_level = currentLevel + 1;
        }
        var writeData = fs.writeFile("index.json", JSON.stringify(results), (err) => {
            if (err) {
                return console.error(err);
            } else {
                console.log("Current Level: " + results.current_level);
                console.log("Highest Level Completed: " + results.highest_level_completed);
            }
        });
    });
}