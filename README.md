# Basic redirect for android-rest-client-template

This NodeJS app is meant to be used with the [android-rest-client-template](github.com/codepath/android-rest-client-template) app.

Because Chrome for Android now prevents JavaScript redirects within a browser from launching an app, this workaround functions as a redirect
proxy.

There are scheme= & host= parameters extracted from the GET parameter.  The rest of the query parameters are passed through the 302 redirect.

i.e.:

curl -I "http://localhost:5000/?name=tom&age=55&scheme=bla&host=youtube"

Redirect 302 to: bla://youtube?name=tom&age=55

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
