var express = require('express');
var bodyParser = require('body-parser');

var app = express();


// Force https in production
  if (process.env.NODE_ENV === 'production') {
    app.use(function(req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(['https://', req.get('Host'), req.url].join(''));
        }
        return next();
    });
  }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/static/css",express.static(__dirname + "/static/css"));
app.use("/static/scss",express.static(__dirname + "/static/scss"));
app.use("/static/js",express.static(__dirname + "/static/js"));
app.use("/static/img",express.static(__dirname + "/static/img"));
app.use("/static/img/hotels",express.static(__dirname + "/static/img/hotels"));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/about.html');
})

app.get('/products', function (req, res) {
  res.sendFile(__dirname + '/products.html');
})

app.get('/product-detail', function (req, res) {
  res.sendFile(__dirname + '/product-detail.html');
})

app.get('/contact', function (req, res) {
  res.sendFile(__dirname + '/contact.html');
})

app.listen(process.env.PORT || 8083, function () {
  console.log('Listening on port 8083!')
})
