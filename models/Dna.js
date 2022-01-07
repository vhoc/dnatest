const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DnaSchema = new Schema({
  sequence: {
    type: String,
  },
  mutation: {
    type: Number,
  },
  createdAt: {
    type: String,
    default: Date.now().toLocaleString().slice(0, 24),
  }
});

module.exports = mongoose.model('Dna', DnaSchema)