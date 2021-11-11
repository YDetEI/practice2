var express = require('express'),
    app = express(),
    post = require('./routes/post');

var logger = require('morgan');

var bodyParser = require('body-parser');
var connect = require('connect')
var methodOverride = require('method-override')


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(function(req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

app.use(logger('dev'));


// routing

app.get('/', post.index);
app.get('/posts/:id', post.show);
// app.get('/posts/new', post.new);
// app.post('/posts/create', post.create);
// app.get('/posts/:id/edit', post.edit);
// app.put('/posts/:id', post.update);
// app.delete('/posts/:id', post.destroy);