// Initialize connection - no parameters to io() since the default is the origin
const socket = io();

socket.on("data", (data) => {
  console.log(data);
});
