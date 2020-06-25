module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("New user online");

    socket.on("userCoordinates", (coords) => {
      spcket.broadcast.emit("NewUserCoordinates", coords);
    });
  });
};
