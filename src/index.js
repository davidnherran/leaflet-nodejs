const express = require("express");
const engine = require("ejs-mate");
const path = require("path");

// Initializations
const app = express();

// Settings
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "views"))

// Routes
app.use(require('./routes/'))

// Srarting the server
app.listen(3000, () => {
  console.log("Server on port 3000");
});
