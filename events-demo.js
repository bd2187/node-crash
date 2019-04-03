const EventEmitter = require("events");

module.exports = function() {
    // Create Emitter class
    class MyEmitter extends EventEmitter {}

    // Initialize object
    const myEmitter = new MyEmitter();

    // Event Listener
    myEmitter.on("event", () => {
        console.log("event occurred!");
    });

    // Emit event
    myEmitter.emit("event");
};
