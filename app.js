const express = require('express');
const BuenbitService = require('./services');
const { saveBillChallege } = require('./utils/general');

var app = express();

var table = [];

const service = new BuenbitService();
const TIME = 1000 * 60 * 5;
service.getData().then(({ dollarToDai, daisToArs }) => saveBillChallege(table, dollarToDai, daisToArs))
setInterval(
  () =>
    service.getData().then(({ dollarToDai, daisToArs }) => saveBillChallege(table, dollarToDai, daisToArs)),
  TIME);

app.get('/', (req, res) => {
  res.json(table);
});

app.listen(3000, () => console.log('server runnning'));