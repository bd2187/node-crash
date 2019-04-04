const http = require("http");
const fs = require("fs");
const path = require("path");

module.exports = function() {
    const PORT = process.env.PORT || 5000;
    http.createServer((req, res) => {
        if (req.url === "/") {
            fs.readFile(
                path.join(__dirname, "public", "index.html"),
                (err, content) => {
                    if (err) throw err;
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.end(content);
                }
            );
        }

        if (req.url === "/about") {
            fs.readFile(
                path.join(__dirname, "public", "about.html"),
                (err, content) => {
                    if (err) throw err;
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.end(content);
                }
            );
        }

        if (req.url === "/api/users") {
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify({ user: "brandon", age: 10 }));
        }
    }).listen(PORT, () => console.log(`Now listening to port ${PORT}`));
};
