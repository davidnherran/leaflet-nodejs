const express = require("express");
const engine = require("ejs-mate");
const path = require("path");
const socketIO = require("socket.io");
const http = require("http");

// Initializations
const app = express();
const server = http.createServer(app)
const io = socketIO(server);

// Settings
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use(require("./routes/"));

// Sockets
require('./sockets')(io);

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Srarting the server
server.listen(3000, () => {
  console.log("Server on port 3000");
});
