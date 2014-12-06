var express = require('express');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var port = parseInt(process.env.CE_UX_PORT, 10) || 5585;

var app = express();

app.get("/", function (req, res) {
    res.redirect("/index.html");
});

app.use(methodOverride());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/lib'));

app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
}));

app.listen(port);
console.log('ChooseUX is now running on http://localhost:' + port);
