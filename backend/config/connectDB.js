const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(MONGO_URI);
        console.log("MONGODB connected " + connect.connection.host);
    } catch (error) {
        console.log(error);
        process.exit();
    }
};

module.exports = connectDB;
