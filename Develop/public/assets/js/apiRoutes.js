const notesData = require("../../../db/db.json");

module.exports = function(app) {
   
    app.get("/api/notes", function(req, res) {
      res.json(notesData);
    });
 
    app.post("/api/notes", function(req, res) {
      if (notesData === "") {
        notesData.push(req.body)
      }
    });
  /*
    app.delete("/api/notes/:id", function(req, res) {
      
    });*/
  };
  