var express = require('express');
var app = express();

app.listen(9000, () => {
    console.log('Server listening on port 9000');
})

app.get('/getMessage', (req, res) => {
    console.log('get api');
    res.status(200).send('Test Api')
})

module.exports = app;