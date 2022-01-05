const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DnaSchema = new Schema({
  sequence: {
    type: String,
  }
});

module.exports = mongoose.model('Dna', DnaSchema)