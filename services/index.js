const axios = require('axios');

class BuenbitService {
  async getData() {
    return await axios.get("https://be.buenbit.com/api/market/tickers/")
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

        return {
          dollarToDai,
          daisToArs
        };
      })
      .catch(err => err);
  }
}

module.exports = BuenbitService;
