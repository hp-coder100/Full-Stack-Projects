require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB_URI = process.env.DATABASE_URL; // Replace with your MongoDB connection string

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err.message));

module.exports = mongoose;
