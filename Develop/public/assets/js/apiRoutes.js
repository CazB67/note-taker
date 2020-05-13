const notesData = require("../../../db/db.json");
const fs = require('fs')

module.exports = function(app) {
   
    //Gets data from the server
    app.get("/api/notes", function(req, res) {
      res.json(notesData);
    });
 
    //Writes note to file. Data comes from the browser
    app.post("/api/notes", function(req, res) {
      //If there are no notes, setting note id to 0 so that next note can have an id
      if(notesData.length === 0) {
        req.body.id = 0;
      //Getting the id of the last note in the notesData array and adding 1 to create a unique id
      }else{
        req.body.id = notesData[notesData.length - 1].id + 1;
      }
      //Adding user input into notesData array
      notesData.push(req.body)
      //Send the updated notesData array back to the client 
      res.json(notesData);
      //Writing notes to db.json file
      writingNotes();
    });

    //Deleting note if requested by client
    app.delete("/api/notes/:id", function(req, res) {
      //Iterating through notesData array if the id of the note clicked is the same as the id in the array, it is removed
      for(let i=0; i<notesData.length; i++){
        if(req.params.id == notesData[i].id) {
          notesData.splice(i, 1);
        }
      }
      //Send the updated notesData array back to the client 
      res.json(notesData);
      writingNotes();
    });

    //Writing notes to db.json file
    function writingNotes() {
      try {
        fs.writeFileSync("Develop/db/db.json", JSON.stringify(notesData))
      } catch (err) {
        console.error(err)
      }
    }
};

  