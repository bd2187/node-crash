const http = require("http");
module.exports = function() {
    const PORT = process.env.PORT || 5000;

    http.createServer((req, res) => {
        if (req.url === "/") {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>homepage</h1>");
        }
        res.end();
    }).listen(PORT, () => {
        console.log(`Now listening to port ${PORT}`);
    });
};
