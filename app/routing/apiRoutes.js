var friends = require("../data/friends");

function apiRoutes (app, path) {

app.get("/api/friends", function(req, res) {
  res.json(friends);
});

app.post("/api/friends", function(req, res) {

var newFriend = req.body;

var compatibleFriend = compatibility(newFriend, friends);

friends.push(newFriend);


res.json(compatibleFriend);

});

};

function compatibility (newFriend, friends) {
	var bestMatch = friends[0];
	for (var i = 0; i < friends.length; i++) {
		if (friendshipDifference(newFriend, friends[i]) < friendshipDifference(newFriend, bestMatch)) {
			bestMatch = friends[i];
		}
	}
	return bestMatch;
}

function friendshipDifference(friendA, friendB) {
	var diff = 0;

	for (var i = 0; i < friendA.scores.length; i++) {
		diff += Math.abs(friendA.scores[i] - friendB.scores[i]);
	}

	return diff;
}

module.exports = apiRoutes