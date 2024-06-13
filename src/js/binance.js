const refs = {
  formElem: document.querySelector(".js-binance-form"),
  divElem: document.querySelector(".js-binance-info"),
};

refs.formElem.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = e.target.elements.query.value;

  if (value === "") {
    alert("Введите название валюты");
    return;
  }
  getPrice(value).then((data) => {
    priceTemplate(data);
  });

  refs.formElem.reset();
});

function getPrice(currencyType) {
  const BASE_URL = "https://binance43.p.rapidapi.com";
  const END_POINT = "/ticker/price";
  const params = new URLSearchParams({
    symbol: currencyType.toUpperCase(),
  });

  const headers = {
    "x-rapidapi-key": "f87a2c4187msh7ebdee87a014a97p104b47jsnad90f2d4d008",
    "x-rapidapi-host": "binance43.p.rapidapi.com",
  };

  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url, { headers }).then((res) => {
    if (!res.ok) {
      alert("Не верное название валюты !!!");
      return;
    }
    return res.json();
  });
}

function priceTemplate({ symbol, price }) {
  const currency = symbol.toLowerCase().replace("btc", "");
  const markup = `<img
          class="coin-logo"
          src="https://assets.coincap.io/assets/icons/${currency}@2x.png"
        />
        <p class="coin-title">${symbol}</p>
        <p class="coin-price">${price}</p>`;

  return (refs.divElem.innerHTML = markup);
}
