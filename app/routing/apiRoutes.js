// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold information on other users

const friendData = require("../data/friends");

// ROUTING

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST REQUESTS

  app.post("/api/friends", function(req, res) {
    friendData.push(req.body);

    //logic for the matchmaking

    let matchResults = [];

    for (let i = 0; i < tableData.length - 1; i++) {
        let difference = 0;
        let friendScores = tableData[i].scores;
        console.log("friendscors is " + friendScores);
        for (let j = 0; j < friendScores.length; j++) {
        let matchEquation = userData.scores[i] - friendScores[j];
        if (userData.scores[i] >= friendScores[j] || userData.scores[i] <= friendScores[j]) {
            difference += Math.abs(matchEquation);
        }
        }
        matchResults.push(difference);
    }
    Array.min = function(matchResults) {
        return Math.min.apply(Math, matchResults);
    };

    var minimum = Array.min(matchResults);

    let matchNUmber = matchResults.indexOf(minimum);

    console.log(matchNUmber);
    console.log(tableData[matchNUmber].name);
    res.json(tableData[matchNUmber]);
    });

 
};