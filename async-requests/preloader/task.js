const itemsContainer = document.getElementById('items');
const loader = document.getElementById('loader');


function loadCurrencyRates() {

  const cachedData = localStorage.getItem('currencyRates');
  if (cachedData) {
    const parsedData = JSON.parse(cachedData);
    displayCurrencyRates(parsedData);
  }
  loader.classList.add('loader_active');

  fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then(response => response.json())
    .then(data => {

      localStorage.setItem('currencyRates', JSON.stringify(data));


      displayCurrencyRates(data);
    })
    .catch(error => {
      console.error('Error:', error);
    })
    .finally(() => {
      loader.classList.remove('loader_active');
    });
}
function displayCurrencyRates(data) {
  const valute = data.response.Valute;

  itemsContainer.innerHTML = '';

  for (const currency in valute) {
    const item = document.createElement('div');
    item.classList.add('item');

    const code = document.createElement('div');
    code.classList.add('item__code');
    code.textContent = valute[currency].CharCode;

    const value = document.createElement('div');
    value.classList.add('item__value');
    value.textContent = valute[currency].Value;

    const currencyName = document.createElement('div');
    currencyName.classList.add('item__currency');
    currencyName.textContent = 'руб.';

    item.appendChild(code);
    item.appendChild(value);
    item.appendChild(currencyName);

    itemsContainer.appendChild(item);
  }
}

window.addEventListener('load', loadCurrencyRates);