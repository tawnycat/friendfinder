var friends = require("../data/friends");

// Gives JSON objects of all the friends
function apiRoutes (app, path) {

app.get("/api/friends", function(req, res) {
  res.json(friends);
});

// receives form submission data, returns the most compatible friend using functions below
app.post("/api/friends", function(req, res) {

var newFriend = req.body;

var compatibleFriend = compatibility(newFriend, friends);

friends.push(newFriend);


res.json(compatibleFriend);

});

};

// determines the most compatible friend with help from the friendshipDifference function
function compatibility (newFriend, friends) {
	var bestMatch = friends[0];
	for (var i = 0; i < friends.length; i++) {
		if (friendshipDifference(newFriend, friends[i]) < friendshipDifference(newFriend, bestMatch)) {
			bestMatch = friends[i];
		}
	}
	return bestMatch;
}

// calculates the difference between two friends' scores
function friendshipDifference(friendA, friendB) {
	var diff = 0;

	for (var i = 0; i < friendA.scores.length; i++) {
		diff += Math.abs(friendA.scores[i] - friendB.scores[i]);
	}

	return diff;
}

module.exports = apiRoutes