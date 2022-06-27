async function addFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="scrunchie-title"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const inventory = document.querySelector('input [name="scrunchie-inventory"]').value.trim();
    const price = document.querySelector('input [name="scrunchie-price"]').value.trim();
    const cost = document.querySelector('input [name="scrunchie-cost"]').value.trim();

    const response = await fetch(`/api/scrunchies`, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        title,
        inventory,
        price,
        cost

      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/collection/:id');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-scrunchie-form').addEventListener('submit', addFormHandler);
  