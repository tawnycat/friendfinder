var friends = require("../data/friends");

function apiRoutes (app, path) {

app.get("/api/friends", function(req, res) {
  res.json(friends);
});

app.post("/api/friends", function(req, res) {

var newFriend = req.body;
friends.push(newFriend);

var compatibleFriend = compatibility(newFriend, friends);

res.json(compatibleFriend);

});

};

function compatibility (newFriend, friends) {
	console.log(friends);

	var newFriendScore = getScoreSum(newFriend);

	var allScoreSums = friends.map(getScoreSum);

	var indexOfSmallestDiff = 0;
	for (var i = 0; i < allScoreSums.length; i++) {
		if (newFriendScore - allScoreSums[i] < newFriendScore - allScoreSums[indexOfSmallestDiff]) {
			indexOfSmallestDiff = i;
		}
	}
	return friends[indexOfSmallestDiff];
}

function getScoreSum (friend) {
	console.log(friend);

	var scoreSum = 0;
	for (var i = 0; i < friend.scores.length; i++) {
		scoreSum + friend.scores[i];
	}

	return scoreSum
}

module.exports = apiRoutes