"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DnaSchema = new Schema({
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
