const path = require("path");
module.exports = function() {
    // Base file name
    console.log(path.basename(__filename));

    // Directory name
    console.log(path.dirname(__filename));

    // File extension
    console.log(path.extname(__filename));

    // Path Object
    console.log(path.parse(__filename));

    // Concatenate paths
    console.log(path.join(__dirname, "test", "file.html"));
};
