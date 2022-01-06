const express = require("express");
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dnatest', { useNewUrlParser: true });

app.use(express.json());

const dnaTestRouter = require('./routes/DnaRoutes')
app.use('/', dnaTestRouter)

app.listen(3001, () => console.log("Service started."));