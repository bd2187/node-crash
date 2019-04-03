const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
    log(msg) {
        this.emit("message", { uuid: uuid.v4(), msg });
    }
}

module.exports = Logger;
