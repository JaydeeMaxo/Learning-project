// Example using Express.js
const express = require('express');
const app = express();

// Example defining a route in Express
app.get('/', (req, res) => {
    res.send('<h1>Hello, Segun Joseph Express.js Server!</h1>');
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});