// Initialize connection - no parameters to io() since the default is the origin
const socket = io();

socket.on("data", (data) => {
  console.log(data);
});

async function run() {
  // ping server to get data
  setInterval(() => {
    socket.emit("get-data");
  }, 500);
}

run();
