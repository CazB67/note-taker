const notesData = require("../../../db/db.json");
const fs = require('fs')

module.exports = function(app) {
   
    app.get("/api/notes", function(req, res) {
     
      res.json(notesData);
    });
 
    app.post("/api/notes", function(req, res) {

        req.body.id = "1";
        notesData.push(req.body)
        console.log(req.body);
        
          try {
            fs.writeFileSync("db/db.json", JSON.stringify(notesData))
          } catch (err) {
            console.error(err)
          
        }
        
      
    });
  
   /* app.delete("/api/notes/:id", function(req, res) {
      
      }
    });*/
  };
  