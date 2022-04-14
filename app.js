// Server Settings
const hostname = "0.0.0.0";
const port = "8282";

// REST API
var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors())
app.use(express.static('public'));

// Functions
const { encodeLink, decodeLink } = require('./utils/functions.js');

// Basic API route
app.route('/')
    .get(function (req, res) {
        res.sendFile('index.html');
    });

app.route('/encode/')
    .get(function (req, res) {
        let url = encodeLink(req.query.url);
        res.redirect("/?urlencode="+url);
    });

app.route('/:url')
    .get(function (req, res) {
        res.redirect(decodeLink(req.params.url));
    });

// Open server
app.listen(port, hostname, function () {
	console.log("\033[0;92m" + "\n => works on port " + port + '\033[0m');
});
