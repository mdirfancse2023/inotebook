const connectToMongo = require("./db");
const express = require('express');
connectToMongo();
const app = express();
const port = 3000;

app.use('/auth',require('./routes/auth'));
app.use('/note',require('./routes/note'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})