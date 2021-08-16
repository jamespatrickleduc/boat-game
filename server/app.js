const feathers = require("@feathersjs/feathers");
const socketio = require("@feathersjs/socketio");
const memory = require("feathers-memory");
const rx = require("feathers-reactive");
import GameLogic from "./gameLogic";

const app = feathers()
  .configure(socketio())
  .configure(
    rx({
      idField: "id",
    })
  )
  .use("/games", memory());

GameLogic.initialize(app);

app.on("connection", (connection) => app.channel("everybody").join(connection));
app.publish(() => app.channel("everybody"));

const { networkInterfaces } = require("os");

const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    if (net.family === "IPv4" && !net.internal) {
      if (!results[name]) {
        results[name] = [];
      }
      results[name].push(net.address);
    }
  }
}
console.log(results);

app
  .listen(3030)
  .on("listening", () =>
    console.log("Feathers Socket.io server running on localhost:3030")
  );
