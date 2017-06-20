### This is My Personal Website.

It is node based.

(Note to self, remember how to create node sites by the following commands)

### Install

* __nodemon__ to automatically restart your server
* __express-generator__ to create a bare-bones application

Install both globally:

* <code>npm install -g nodemon</code>
* <code>npm install -g express-generator</code>

Generate scaffolding. Remember to use the <code>--hbs</code> flag to tell the generator that we'll be using handlebars:

* <code>express --hbs</code>

Install the dependencies that are required by the generated code:

* <code>npm install</code>
If using mongoose:
* <code>npm install --save mongoose</code>
* <code></code>npm install --save mongoose-url-slugs</code>

Lastly, start your server in a different terminal window using __nodemon__ to automatically restart whenever a file changes:

* <code>nodemon bin/www</code>

### Note to self: learn how to do server rendering.
I think that the mongoose library does this but do verify


###Github Commit
git add .
git commit -m "commit message here"
git push origin master

### Heroku Deployment Hints
heroku login
heroku create
git push heroku master
heroku open
