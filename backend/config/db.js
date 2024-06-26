require("dotenv").config();
const mongoose = require("mongoose");
console.log(process.env.MONGODB_URL);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL + "dImdbDB");
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
