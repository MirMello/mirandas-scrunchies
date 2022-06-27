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
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-scrunchie-form').addEventListener('submit', addFormHandler);
  