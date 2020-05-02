// We need to include the path package to get the correct file path for our html
const path = require("path");

module.exports = function(app) {
  
  // Below code handles when users "visit" a page.
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../../notes.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../../index.html"));
  });
};
