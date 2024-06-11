const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ msg: "Movie not found" });
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
