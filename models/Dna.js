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
    default: Date.now().toLocaleString('es-MX', { timeZone: 'America/Hermosillo' }),
  }
});

module.exports = mongoose.model('Dna', DnaSchema)