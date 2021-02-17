async function editBio(event) {
    event.preventDefault();
  
    const bio = document.querySelector('input[name="bio"]').value.trim();

    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/users/bio/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        post_id: id,
        bio
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
  
  document.querySelector('.edit-bio-form').addEventListener('submit', editBio);
  