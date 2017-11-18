var friends = require("../data/friends");

function apiRoutes (app, path) {

app.get("/api/friends", function(req, res) {
  res.json(friends);
});

};

module.exports = apiRoutes;