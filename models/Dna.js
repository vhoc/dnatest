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
    type: Date,
    default: Date.now().toLocaleString().slice(0, 20).replace('T', ' '),
  }
});

module.exports = mongoose.model('Dna', DnaSchema)