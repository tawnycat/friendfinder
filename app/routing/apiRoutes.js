var friends = require("../data/friends");

function apiRoutes (app, path) {

app.get("/api/friends", function(req, res) {
  res.json(friends);
});

app.post("/api/friends", function(req, res) {

var newFriend = req.body;
friends.push(newFriend);

var newScore = newFriend.scores;
compatibility(newScore, friends);

});

};

function compatibility (newScore, friends) {
	var scoreSum = 0;
	for (var i = 0; i < newScore.length; i++) {
		scoreSum + newScore[i];
	}
	var 
}

module.exports = apiRoutes