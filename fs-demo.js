const fs = require("fs");
const path = require("path");

module.exports = function() {
    // Create folder
    // fs.mkdir(path.join(__dirname, "/test"), err => {
    //     if (err) throw err;
    // });

    // Write to file
    var messageTxtFile = path.join(__dirname, "/test", "message.txt");
    // fs.writeFile(messageTxtFile, "hello world", err => {
    //     if (err) throw err;

    //     // Append to file
    //     fs.appendFile(messageTxtFile, " hello again", err => {
    //         if (err) throw err;
    //     });
    // });

    // Read file
    fs.readFile(messageTxtFile, "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
    });
};
