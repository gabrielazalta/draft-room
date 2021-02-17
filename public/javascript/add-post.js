const createPostBtn = document.querySelector('#create-post');

function toggleHide(event) {
    createPostBtn.classList.add('hide');
};

async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('textarea[name="post-title"]').value;
    const content = document.querySelector('textarea[name="content"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
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

document.getElementById('new-post-form').addEventListener('submit', newFormHandler);
createPostBtn.addEventListener('click', toggleHide);