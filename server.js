const express = require("express");
const app = express();
const hostname = 'dnatest.victorolvera.net';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dnatest', { useNewUrlParser: true });

app.use(express.json());

const dnaTestRouter = require('./routes/DnaRoutes')
app.use('/', dnaTestRouter)

app.listen(80, hostname, () => console.log("Service started."));
