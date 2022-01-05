const express = require("express");
const app = express();

app.use(express.json());

const dnaTestRouter = require('./routes/DnaRoutes')
app.use('/dnatest', dnaTestRouter)

app.listen(3001, () => console.log("Service started."));
