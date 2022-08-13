const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/cube')

const cubeSchema = new mongoose.Schema({
  name: String,
  time: String
});

const Cube = mongoose.model('cube', cubeSchema);

module.exports = Cube;