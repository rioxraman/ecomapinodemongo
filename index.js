
const express = require('express');

const app = express(); //server


require('./startup/routes')(app);    // routes
require('./startup/db')();   //mongo db

const port = process.env.PORT || 3000;
app.listen(port, () => console.log (`Listening on port ${port}...`));