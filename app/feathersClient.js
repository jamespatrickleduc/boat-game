import feathers from "@feathersjs/client";
import socketio from "@feathersjs/socketio-client";
import io from "socket.io-client";
const rx = require("feathers-reactive");
const socket = io("http://192.168.1.169:3030");
const client = feathers()
  .configure(socketio(socket))
  .configure(
    rx({
      idField: "id",
    })
  );

export default client;
