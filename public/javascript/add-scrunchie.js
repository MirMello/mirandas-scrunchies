<<<<<<< HEAD
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

=======
async function addFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="scrunchie-title"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/scrunchies/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title
>>>>>>> efdf790d2effa9be3aee16fdb0ff2ce27ef720d3
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
<<<<<<< HEAD
      document.location.replace(`/collection/${collection_id}`);
=======
      document.location.replace('/dashboard/');
>>>>>>> efdf790d2effa9be3aee16fdb0ff2ce27ef720d3
    } else {
      alert(response.statusText);
    }
  }
<<<<<<< HEAD
 
  document.querySelector('.scrunchie-form').addEventListener('submit', newFormHandler);
=======
  
  document.querySelector('.new-scrunchie-form').addEventListener('submit', addFormHandler);
>>>>>>> efdf790d2effa9be3aee16fdb0ff2ce27ef720d3
  