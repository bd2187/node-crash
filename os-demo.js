const os = require("os");
module.exports = function() {
    // User Platform
    console.log(`User's platform: ${os.platform()}`);

    // CPU Architecture
    console.log(`CPU Architecture: ${os.arch}`);

    // CPU Core Info
    console.log(`CPU core info: ${JSON.stringify(os.cpus())}`);

    // Free Memory
    console.log(`Free memory: ${os.freemem()}`);

    // Total mem
    console.log(`Total mem: ${os.totalmem()}`);

    // Home directory:
    console.log(`Home Directory: ${os.homedir()}`);

    // Uptime
    console.log(`Uptime: ${os.uptime()}`);
};
