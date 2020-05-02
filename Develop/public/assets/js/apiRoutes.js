const notesData = require("../../../db/db.json");
const fs = require('fs')

module.exports = function(app) {
   
    app.get("/api/notes", function(req, res) {
      res.json(notesData);
    });
 
    app.post("/api/notes", function(req, res) {
      if(notesData.length === 0) {
        req.body.id = 0;
      }else{
        req.body.id = notesData[notesData.length - 1].id + 1;
      }
        notesData.push(req.body)
        res.json(notesData);
          try {
            fs.writeFileSync("db/db.json", JSON.stringify(notesData))
          } catch (err) {
            console.error(err)
        }  
    });
  
    app.delete("/api/notes/:id", function(req, res) {
      for(var i=0; i<notesData.length; i++){
        if(req.params.id == notesData[i].id) {
          notesData.splice(i, 1);
        }
      }
      res.json(notesData);
      try {
        fs.writeFileSync("db/db.json", JSON.stringify(notesData))
      } catch (err) {
        console.error(err)
      }
    });
};
  