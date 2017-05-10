const express = require('express');
const url  = require('url');
const querystring = require('querystring');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  var scheme = request.query.scheme || "oauth";
  var host = request.query.host || "cprest";

  delete request.query.scheme;
  delete request.query.host;
  var return_url = scheme + "://" + host;

  if (typeof(request.query) !== undefined) {
     return_url += "?" + querystring.stringify(request.query);
  }
  response.redirect(302, return_url);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
