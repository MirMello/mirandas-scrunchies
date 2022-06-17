const $saleForm = document.querySelector('#sale-form');
const $displayArea = document.querySelector('#display-area');

const printResults = resultArr => {
  console.log(resultArr);

  const saleHTML = resultArr.map(({ id, sale, sold, moneyMade, dateSold }) => {
    return `
  <div class="col-12 col-md-5 mb-3">
    <div class="card p-3" data-id=${id}>
      <h4 class="text-primary">${sale}</h4>
      <p>Sold: ${sold}<br/>
      Money Made: ${moneyMade}<br/>
      Date Sold: ${dateSold}<br/>
      </p>
    </div>
  </div>
    `;
  });

  $displayArea.innerHTML = saleHTML.join('');
};

const getsales = (formData = {}) => {
  let queryUrl = '/api/sales?';

  Object.entries(formData).forEach(([key, value]) => {
    queryUrl += `${key}=${value}&`;
  });

  fetch(queryUrl)
    .then(response => {
      if (!response.ok) {
        return alert(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then(saleArr => {
      console.log(saleArr);
      printResults(saleArr);
    });
};

const handleGetsalesSubmit = event => {
  event.preventDefault();
  const saleHTML = $saleForm.querySelector('[name="sale"]');
  const sale = saleHTML.value;

  const soldHTML = $saleForm.querySelector('[name="sold"]');
  const sold = soldHTML.value;

  const moneyMadeHTML = $saleForm.querySelector('[name="money-made"]');
  const moneyMade = moneyMadeHTML.value;

  const dateSoldHTML = $saleForm.querySelector('[name="date-sold"]');
  const dateSold = dateSoldHTML.value;

  const saleObject = { sold, sale, moneyMade, dateSold };

  getsales(saleObject);
};

$saleForm.addEventListener('submit', handleGetsalesSubmit);

getsales();
