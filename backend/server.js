const express = require("express");
// const connectDB = require("./config/connectDB");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Task = require("./model/taskModel");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// const logger = (req, res, next) => {
//     console.log("Middleware");
//     console.log(req.method);
//     next();
// };

// Routes
app.get("/", (req, res) => {
    console.log("Home page route");
    res.send("Home page route");
});

// Create a task
app.post("/api/tasks", async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
        // console.log(error);
    }

    // console.log(req.body);
    // res.send("Task created");
});

// connectDB();

const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`server running on port ${PORT}`);
// });

const MONGO_URI = process.env.MONGO_URI;

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB connected ");
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        });
    })
    .catch((error) => console.log(error));

// const startServer = async () => {
//     try {
//         await connectDB();
//         app.listen(PORT, () => {
//             console.log(`server running on port ${PORT}`);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };

// startServer();
