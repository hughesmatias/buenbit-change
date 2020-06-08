const moment = require('moment');
const FORMAT = 'dddd, MMMM Do YYYY, h:mm:ss a';

const saveBillChallege = (table, dollarToDai, daisToArs) => table.push({
  date: moment().format(FORMAT),
  dollarToDai,
  daisToArs,
});

module.exports = {
  saveBillChallege,
};
