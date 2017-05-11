const express = require('express');
const url  = require('url');
const querystring = require('querystring');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send("Isn't this homework assignment enlightening?\n");
});

app.get('/bounce', function(request, response) {
  var scheme = request.query.scheme || "oauth";
  var host = request.query.host || "cprest";
  var pkg = request.query.pkg || "com.codepath.apps.restclienttemplate";

  delete request.query.scheme;
  delete request.query.host;
  delete request.query.pkg;
  var return_url = "intent://" + host + "#Intent;scheme=" + scheme + ";package=" + pkg + ";end";

  if (typeof(request.query) !== undefined) {
     return_url += "?" + querystring.stringify(request.query);
  }
  response.redirect(302, return_url);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
