// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold information on other users

const friendData = require("../data/friends");

// ROUTING

module.exports = function(app) {

    app.get("/api/friends", function(req,res){
        res.json(friendData);
    });


// API POST REQUESTS

app.post("/api/friends", function(req, res){
   


    friendData.push(req.body);

});

};