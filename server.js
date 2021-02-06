// TEST WEBSOCKET SERVER FOR STREAMING OVERLAY
const PORT = 8080;
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: `http://localhost:${PORT}`,
    methods: ["GET", "POST"],
  },
});

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("Socket connection established", socket.id);

  setInterval(() => {
    socket.emit("data", {
      data: {
        altitude: 10.45,
      },
    });
  }, 500);
});

server.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
