require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const moviesRoutes = require("./routes/moviesRoutes");
const populateMovies = require("./scripts/populateMovies");

const app = express();
connectDB().then(async () => {
  await populateMovies();
});

app.use(cors());
app.use(express.json());

app.use("/api/movies", moviesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
