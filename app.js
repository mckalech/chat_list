var express = require('express');
var app = express();

app.set('view engine', 'jade')
    .use(express.static('./public'))
    .get('/api/*', function (req, res) {
        res.sendStatus(400);
    })
    .get('*', function (req, res) {
        res.render('index');
    })

app.listen(process.env.PORT || 3000, function(){
	console.log('Express server');
});
	