const express = require('express');
const moment = require('moment');
const BuenbitService = require('./services');

var app = express();

var table = [];

const saveBillChallege = (dollarToDai, daisToArs) => table.push({
  date: moment().format('"dddd, MMMM Do YYYY, h:mm:ss a"'),
  dollarToDai,
  daisToArs,
});

const service = new BuenbitService();
const TIME = 1000 * 60 * 5;
service.getData().then(({ dollarToDai, daisToArs }) => saveBillChallege(dollarToDai, daisToArs))
setInterval(
  () => service.getData().then(({ dollarToDai, daisToArs }) => saveBillChallege(dollarToDai, daisToArs)), TIME);

app.get('/', (req, res) => {
  res.json(table);
});

app.listen(3000, () => console.log('server runnning'));