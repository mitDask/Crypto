const API_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Cpolcadot%2Cmatic&vs_currencies=eur&include_market_cap=true&include_24hr_change=true";
const container = document.querySelector(".container");

fetch(API_URL)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);

    const coins = Object.getOwnPropertyNames(json);

    coins.forEach((coin) => {
      const coinName = json[`${coin}`];
      const eurMarketCap = json[`${coin}`].eur_market_cap.toFixed(4);
      const eurMarketChange = json[`${coin}`].eur_24h_change.toFixed(3);
      const currency = coinName.eur;

      console.log(coinName);

      container.innerHTML += `
    <div class="name">${coin}
        <img src="images/${coin}.png" alt="coin-logo" class="coin-logo" />
      </div>
      <div class="change">${eurMarketChange}</div>
      <div class="market-cup">${eurMarketCap} M.c.</div>
      <div class="price">
        <span class="currency">${currency} €</span>
      </div>`;
    });
  });
