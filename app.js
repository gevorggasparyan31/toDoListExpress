const express = require('express');
const appRouter = require("./src/router");
require('./src/config/db');

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('public'));
app.use('/',appRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
