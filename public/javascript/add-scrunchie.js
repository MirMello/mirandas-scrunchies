async function newFormHandler(event) {
    event.preventDefault();
 
    const title = document.querySelector('input[id="scrunchie-title"]').value;
    const inventory = document.querySelector('input[id="scrunchie-inventory"]').value;
    const price = parseInt(document.querySelector('input[id="scrunchie-price"]').value);
    const cogs = document.querySelector('input[id="scrunchie-cost"]').value;
    const collection_id = window.location.href.split("/collection/")[1];
    console.log(price)
    const response = await fetch(`/api/scrunchies`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        inventory,
        price,
        cogs,
        collection_id

      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace(`/collection/${collection_id}`);
    } else {
      alert(response.statusText);
    }
  }
 
  document.querySelector('.scrunchie-form').addEventListener('submit', newFormHandler);
  