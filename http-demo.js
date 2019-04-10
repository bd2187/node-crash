const http = require("http");
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

module.exports = function() {
    const PORT = process.env.PORT || 5000;
    http.createServer((req, res) => {
        // if (req.url === "/") {
        //     fs.readFile(
        //         path.join(__dirname, "public", "index.html"),
        //         (err, content) => {
        //             if (err) throw err;
        //             res.writeHead(200, { "Content-Type": "text/html" });
        //             res.end(content);
        //         }
        //     );
        // }

        // if (req.url === "/about") {
        //     fs.readFile(
        //         path.join(__dirname, "public", "about.html"),
        //         (err, content) => {
        //             if (err) throw err;
        //             res.writeHead(200, { "Content-Type": "text/html" });
        //             res.end(content);
        //         }
        //     );
        // }

        // if (req.url === "/api/users") {
        //     fetch("https://jsonplaceholder.typicode.com/todos/1")
        //         .then(response => {
        //             return response.json();
        //         })
        //         .then(parsedRes => {
        //             res.writeHead(200, { "Content-type": "application/json" });
        //             res.end(JSON.stringify(parsedRes));
        //         });
        // }

        // Build file path
        let filePath = path.join(
            __dirname,
            "public",
            req.url === "/" ? "index.html" : req.url
        );

        // Extension of file
        let extname = path.extname(filePath);

        // Initial content type
        let contentType = "text/html";
        // Check ext and et content type
        switch (extname) {
            case ".js":
                contentType = "text/javascript";
                break;
            case ".css":
                contentType = "text/css";
                break;

            case ".json":
                contentType = "application/json";
                break;

            case ".png":
                contentType = "image/png";
                break;

            case ".jpg":
                contentType = "image/jpg";
                break;

            default:
                break;
        }

        // Readfile
        fs.readFile(filePath, function(err, content) {
            if (err) {
                if (err.code === "ENOENT") {
                    fs.readFile(
                        path.join(__dirname, "public", "notFound.html"),
                        function(err, content) {
                            if (err) throw err;

                            res.writeHead(200, { "Content-Type": contentType });
                            res.end(content, "utf8");
                        }
                    );
                } else {
                    res.writeHead(500);
                    res.end(`Server error: ${err.code}`);
                }
            } else {
                // Success
                res.writeHead(200, { "Content-Type": contentType });
                res.end(content);
            }
        });
    }).listen(PORT, () => console.log(`Now listening to port ${PORT}`));
};
