var express = require('express');
var path = require('path');
var product = require('./api/routes/product');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/api',product);
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));
