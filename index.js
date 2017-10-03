var express = require('express');
var path = require('path');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));
