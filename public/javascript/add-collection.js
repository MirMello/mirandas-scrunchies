async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[id="collection-title"]').value;

  const response = await fetch(`/api/collections`, {
    method: 'POST',
    body: JSON.stringify({
      title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-collection-form').addEventListener('submit', newFormHandler);
