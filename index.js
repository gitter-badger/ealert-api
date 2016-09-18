// THIS IS THE API FOR EALERT
var express = require('express');
var app = express();
// BODY PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.json({
	limit : '50mb',
	extended : true
}));
app.use(bodyParser.urlencoded({
	limit : '50mb',
	extended : true
}));

app.use(bodyParser.urlencoded({
	extended : true
}));
// END BODY PARSER

app.post('/', function (req, res) {
	//res.send('Hello World!');
	var userName=req.body.user_name;
	var channelName=req.body.channel_name;
	var text=req.body.text;
	var triggeredWord=req.body.trigger_word;
	var domain=req.body.team_domain;
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({ "text": "Hi: "+userName+" you requested from: "+channelName+" of "+domain }));
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
