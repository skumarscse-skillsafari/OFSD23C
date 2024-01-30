const EventEmitter = require("events");

const customEvent = new EventEmitter();

// eventObj.on("eventType", listenerFun) => Creating Events
// eventObj.emit("eventType") => Emitting events

customEvent.on("demo", ({ name }) => {
  console.log("Demo " + name);
});

customEvent.emit("demo", { name: "John" });
