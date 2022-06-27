async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[id="scrunchie-title"]').value;
  
    const response = await fetch(`/api/scrunchies`, {
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
  
  document.querySelector('.new-scrunchie-form').addEventListener('submit', newFormHandler);
  