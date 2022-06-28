async function editFormHandler(event) {
event.preventDefault();

const title = document.querySelector('input[id="scrunchie-title"]').value;
    const inventory = document.querySelector('input[id="scrunchie-inventory"]').value;
    const price = parseInt(document.querySelector('input[id="scrunchie-price"]').value);
    const cogs = document.querySelector('input[id="scrunchie-cost"]').value;
    const collection_id = document.querySelector('input[id="scrunchie-collection"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
const response = await fetch(`/api/scrunchies/${id}`, {
    method: 'PUT',
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
    document.location.replace(`/scrunchie/${id}`);
} else {
    alert(response.statusText);
}
}

document.querySelector('.edit-scrunchie-form').addEventListener('submit', editFormHandler);
