const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DnaSchema = new Schema({
  sequence: {
    type: String,
  },
  mutation: {
    type: Number,
  }
});

module.exports = mongoose.model('Dna', DnaSchema)