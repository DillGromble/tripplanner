const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const db = require('./models');
const path = require('path');

app.use(require('volleyball'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

// nunjucks rendering boilerplate
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });




app.use(require('./routes'));

app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log("OH NOOOOOOOOOO", err.message);
  next(err)
});

db.sync()
.then(() => {
  app.listen(3001, () => console.log("Listening on port 3001..."));
})
.catch(err => {
  console.log("Error starting app: ", err);
})
