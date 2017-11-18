function htmlRoutes (app, path) {

// Serves homepage
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// Serves survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

}

module.exports = htmlRoutes;