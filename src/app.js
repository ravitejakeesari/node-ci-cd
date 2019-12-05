var express = require('express');
var app = express();

app.listen(9000, () => {
    console.log('Server listening on port 9000');
})

app.get('/', (req, res) => {
    console.log('get api');
    res.status(200).send('Test Api')
})