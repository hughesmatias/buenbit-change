const express = require('express');
const BuenbitService = require('./services');
const { saveBillChallege } = require('./utils/general');
const reactTemplate = require('express-react-views');
const routes = require('./routes');

var app = express();

// set template engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactTemplate.createEngine());

var table = [];

const service = new BuenbitService();
const TIME = 1000 * 60 * 5;
service.getData().then(({ dollarToDai, daisToArs }) => saveBillChallege(table, dollarToDai, daisToArs))
setInterval(
  () =>
    service.getData().then(({ dollarToDai, daisToArs }) => saveBillChallege(table, dollarToDai, daisToArs)),
  TIME);

app.get('/', routes.index(table));

app.listen(3000, () => console.log('server runnning'));