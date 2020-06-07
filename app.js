const express = require('express');
const axios = require('axios');
const moment = require('moment');

var app = express();

var table = [];

const saveBillChallege = (dollarToDai, daisToArs) => table.push({
  date: moment().format('"dddd, MMMM Do YYYY, h:mm:ss a"'),
  dollarToDai,
  daisToArs,
});

const getData = () => {
  axios.get("https://be.buenbit.com/api/market/tickers/")
    .then(response => {
      const {
        object: {
          daiars:{ purchase_price: purchase_price_daiars },
          daiusd:{ selling_price: selling_price_daiusd }
        }
      } = response.data;
      const dollars = 100;
      const dollarToDai = dollars / selling_price_daiusd;
      const daisToArs = dollarToDai * purchase_price_daiars;
      saveBillChallege(dollarToDai, daisToArs);
    })
    .catch(err => console.log(err));
}


const time = 1000 * 60 * 5;
getData();
setInterval(getData, time);

app.get('/', (req, res) => {
  res.json(table);
});

app.listen(3000, () => console.log('server runnning'));