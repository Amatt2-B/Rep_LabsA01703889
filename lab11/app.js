const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const miRuta = require('./routes/lab11.routes');
app.use('/', miRuta);

const exp = require('./routes/explicacion.routes');
app.use('/expl', exp);


app.listen(3000);