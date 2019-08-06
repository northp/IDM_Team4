'use strict';


var fs = require('fs');
var express = require("express");
var app = express();
var port = 8082;
app.listen(port);
console.log("Server running on http://localhost:" + port);

app.get("/reset", function(request, response){
    // response.send("Reset current Level to 1");
    
    fs.readFile("index.json", (err, results) => {
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
                console.log("current Level: " + results.current_level);
                console.log("Highest Level Completed: " + results.highest_level_completed);
            }
        });
        response.send("Reset current Level to 1; current Level: " + results.current_level + "; Highest Level Completed: " + results.highest_level_completed);
    });
});

app.get("/", function(request, response) {

    //response.send("Compare current level to highest completed level.\n Increase highest completed level if current level > highest completed level.");
    
    fs.readFile("index.json", (err, results) => {
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
                console.log("current Level: " + results.current_level);
                console.log("Highest Level Completed: " + results.highest_level_completed);
            }
        });
        response.send("current Level: " + results.current_level + "; Highest Level Completed: " + results.highest_level_completed);
    });

});