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
  console.log("Connection established with client");
});

server.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
