const $scrunchieForm = document.querySelector('#scrunchie-form');
const $saleForm = document.querySelector('#sale-form');

const handleScrunchieFormSubmit = event => {
  event.preventDefault();

  // get animal data and organize it
  const name = $scrunchieForm.querySelector('[name="scrunchie-name"]').value;
  const collection = $scrunchieForm.querySelector('[name="collection"]').value;
  const fabricTypeRadioHTML = $animalForm.querySelectorAll('[name="fabric-type"]');
  let fabricType;

  for (let i = 0; i < fabricTypeRadioHTML.length; i += 1) {
    if (fabricTypeRadioHTML[i].checked) {
      fabricType = fabricTypeRadioHTML[i].value;
    }
  }

  if (fabricType === undefined) {
    fabricType = '';
  }

  const quantity = $scrunchieForm.querySelector('[name="quantity"]').value;

  const scruncheieObject = { name, collection, fabricType, quantity };

  fetch('/api/scrunchies', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(scruncheieObject)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      alert('Error: ' + response.statusText);
    })
    .then(postResponse => {
      console.log(postResponse);
      alert('Thank you for adding an Scrunchie!');
    });

};

const handleSaleFormSubmit = event => {
  event.preventDefault();

  // get zookeeper data and organize it
  const sale = $saleForm.querySelector('[name="scrunchie-sale"]').value;
  const sold = parseInt($saleForm.querySelector('[name="sold"]').value);
  const moneyMade = $saleForm.querySelector('[name="money-made"]').value;
  const dateSold = $saleForm.querySelector('[name="date-sold"]').value;

  const saleObj = { sale, sold, moneyMade, dateSold };
  console.log(saleObj);
  fetch('api/sales', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(saleObj)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      alert('Error: ' + response.statusText);
    })
    .then(postResponse => {
      console.log(postResponse);
      alert('Thank you for adding a Sale!');
    });
};

$scrunchieForm.addEventListener('submit', handleScrunchieFormSubmit);

$saleForm.addEventListener('submit', handleSaleFormSubmit);