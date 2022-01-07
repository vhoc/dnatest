const express = require("express");
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dnatest', { useNewUrlParser: true });

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

const dnaTestRouter = require('./routes/DnaRoutes')
app.use('/', dnaTestRouter)

app.listen(3000, () => console.log("Service started."));
