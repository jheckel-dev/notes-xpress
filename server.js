const express = require('express');
const fs = require('fs');

var app = express();
var PORT = process.envPORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/assets', express.static('./assets'));

require('./routing/html-route')(app);
require('./routing/api-route')(app);

app.listen(PORT, function() {
    console.log('App listening on PORT' + PORT);
});