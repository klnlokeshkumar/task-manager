const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>This is Home Page ...</h1>");
        res.end();
    }
    if (req.url === "/about") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h2>About page</h2>");
        res.end();
    }
});

server.listen("5000", "localhost", () => {
    console.log("Server running on port number 5000");
});

// localhost = 127.0.0.1

// console.log("node server");
// console.log(req.url);
// console.log(req.method);
