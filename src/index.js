//requirements
const express = require('express');
require('dotenv').config();

//app initialization
const app = express();

app.get('/', (req, res) => {

    res.send('<h1>Hello!!</h1>');

});

app.listen(process.env.PORT || 5000, () => {

    console.log(`App running on http://localhost:${process.env.PORT}`);

});