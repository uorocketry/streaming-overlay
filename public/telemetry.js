// Initialize connection - no parameters to io() since the default is the origin
const socket = io();

// DOM Elements
const altitude = document.getElementById("altitude");
const velocity = document.getElementById("velocity");
const acceleration = document.getElementById("acceleration");
const state = document.getElementById("state");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");

const previousValidFields = {
  altitude: "",
  velocity: "",
  acceleration: "",
  state: "",
  latitude: "",
  longitude: "",
};

socket.on("data", (res) => {
  const data = res.data;

  if (data.altitude) {
    let parsed = parseFloat(data.altitude).toFixed(0);
    previousValidFields.altitude = parsed < 0 ? "0" : parsed;
    altitude.innerHTML = "Altitude: " + previousValidFields.altitude;
  }

  if (data.velocity) {
    let parsed = parseFloat(data.velocity).toFixed(2);
    previousValidFields.velocity = parsed;
    velocity.innerHTML = "Velocity: " + parsed;
  }

  if (data.acceleration) {
    let parsed = parseFloat(data.acceleration).toFixed(2);
    previousValidFields.acceleration = parsed;
    acceleration.innerHTML = "Acceleration: " + parsed;
  }

  if (data.state) {
    previousValidFields.state = data.state;
    state.innerHTML = "State: " + data.state;
  }

  if (data.latitude) {
    previousValidFields.latitude = data.latitude;
    latitude.innerHTML = "Latitude: " + data.latitude;
  }

  if (data.longitude) {
    previousValidFields.longitude = data.longitude;
    longitude.innerHTML = "Longitude: " + data.longitude;
  }
});
