const request = require('request');

const url = 'https://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=AK-47%20%7C%20Neon%20Revolution%20%28Factory%20New%29';

function checkPrice() {
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      const price = parseFloat(data.median_price.substring(1));
      if (price <= 79) {
        console.log("Le prix est maintenant inférieur ou égal à 79€.");
        variable = true; // votre variable
      } else {
        console.log("Le prix est actuellement supérieur à 79€.");
      }
    } else {
      console.log("Erreur lors de la récupération du prix.");
    }
  });
}

setInterval(checkPrice, 30000); // Vérifiez le prix toutes les 30 secondes