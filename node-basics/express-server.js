const express = require("express");

const app = express();

// Routes
app.get("/", (req, res) => {
    res.send(
        "<h2>Welcome to the Home page of express server with nodemon</h2>"
    );
});

app.get("/about", (req, res) => {
    res.send(
        "<h2>Welcome to the about page of express server with nodemon</h2>"
    );
});

app.listen("5000", "localhost", () => {
    console.log("Server running 5000 using express");
});
