const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Statistics = new Schema({
  count_mutations: {
    type: Number,
  },
  count_no_mutation: {
    type: Number,
  },
  ratio: {
    type: Number,
  },
});
