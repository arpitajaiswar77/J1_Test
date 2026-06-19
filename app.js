const express = require('express');
const { connectDB } = require('./db');
const router = require('./routes/empRoutes');

const app = express();

connectDB();

app.use(express.json());
app.use("/", router);

app.listen(4000, () => {
    console.log("running");
});