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
    default: Date.now().toLocaleString().slice(0, 19).replace(/-/g, "/").replace("T", " "),
  }
});

module.exports = mongoose.model('Dna', DnaSchema)