var express = require('express');
var app = express();

var handlebars = require('express3-handlebars') .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.set(express.static(__dirname+'/public'));
app.get('/', function(req, res){
    res.render('layouts/home')
});

app.get('/about', function(req, res){
    res.render('layouts/about')
});


// custom 404 page
app.use(function(req, res){ res.type('text/plain');
    res.status(404);
    res.render('layouts/404');
});
// custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.render('layouts/500')
});
app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.\n' +
        __dirname );
});