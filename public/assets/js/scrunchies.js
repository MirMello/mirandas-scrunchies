const $scrunchieForm = document.querySelector('#scrunchie-form');
const $displayArea = document.querySelector('#display-area');

const printResults = resultArr => {
  console.log(resultArr);

  const scrunchieHTML = resultArr.map(({ id, name, collection, fabricType, quantity}) => {
    return `
  <div class="col-12 col-md-5 mb-3">
    <div class="card p-3" data-id=${id}>
      <h4 class="text-primary">${name}</h4>
      <p>Collection: ${collection.substring(0, 1).toUpperCase() + collection.substring(1)}<br/>
      fabricType: ${fabricType.substring(0, 1).toUpperCase() + fabricType.substring(1)}<br/>
      quantity: ${quantity
        .map(quantity => `${quantity.substring(0, 1).toUpperCase() + quantity.substring(1)}`)
        .join(', ')}</p>
    </div>
  </div>
    `;
  });

  $displayArea.innerHTML = scrunchieHTML.join('');
};

const getScrunchies = (formData = {}) => {
  let queryUrl = '/api/scrunchies?';

  Object.entries(formData).forEach(([key, value]) => {
    queryUrl += `${key}=${value}&`;
  });

  console.log(queryUrl);

  fetch(queryUrl)
  .then(response => {
    if (!response.ok) {
      return alert('Error: ' + response.statusText);
    }
    return response.json();
  })
  .then(scrunchieData => {
    console.log(scrunchieData);
    printResults(scrunchieData);
  });

};

const handleGetScrunchiesSubmit = event => {
  event.preventDefault();
  const fabricTypeRadioHTML = $scrunchieForm.querySelectorAll('[name="fabric-type"]');
  let fabric;

  for (let i = 0; i < fabricTypeRadioHTML.length; i += 1) {
    if (fabricTypeRadioHTML[i].checked) {
      fabric = fabricTypeRadioHTML[i].value;
    }
  }

  if (fabric === undefined) {
    fabric = '';
  }

  const scrunchieObject = { fabric, personalityTraits };

  getScrunchies(scrunchieObject);
};

$scrunchieForm.addEventListener('submit', handlegetScrunchiesSubmit);

getScrunchies();
