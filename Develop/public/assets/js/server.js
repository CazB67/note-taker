
// Series of npm packages that we will use to give our server useful functionality
const express = require("express");

// Tells node that we are creating an "express" server
const app = express();


// Use This to enable Static Stuff --> ie javascript and css. 
app.use(express.static('public'))

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// The routes below point our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs

require("./apiRoutes")(app);
require("./htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
