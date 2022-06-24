async function commentFormHandler(event) {
  event.preventDefault();

  const scrunchie_text = document.querySelector('textarea[name="scrunchie-body"]').value.trim();
  const collection_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (scrunchie_text) {
    const response = await fetch('/api/scrunchies', {
      method: 'POST',
      body: JSON.stringify({
        scrunchie_title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.scrunchie-form').addEventListener('submit', commentFormHandler);
