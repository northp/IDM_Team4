'use strict';

var fs = require('fs');

// Step 1: Player chooses level they want to play. Change this value for tests. Value represents current level.
var level = 4;

// Step 2: check if current level has already been completed. If yes, no need to modify JSON entry. If not, then need to modify JSON.

// fs.readFile("index.json", function(err, results)  {
fs.readFile("index.json", (err, results) => { // ES6
    if(err){
        return console.error(err);
    };

    var results = JSON.parse(results.toString());
    
    
    
    // This can be modified, use variables
    if(results.level > level){
        
        results.level = results.level;
        
    } else if (results.level <= level){
        
        results.level = level;
        level++;
    }
    
    // var writeData = fs.writeFile("index.json", JSON.stringify(results), function(err) {
    var writeData = fs.writeFile("index.json", JSON.stringify(results), (err) => { // Es6
        if(err){
            return console.error(err);
        }else{
            console.log(results);
        }
    });
});




  





