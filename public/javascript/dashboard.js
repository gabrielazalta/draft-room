//new bio
async function newBio(event) {
    event.preventDefault();
    // console.log("click button");
    const bio = document.querySelector('textarea[name="bio-text"]').value.trim();

    if (bio) {
        const response = await fetch('/api/bio', {
            method: 'POST',
            body: JSON.stringify({
                bio
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

document.getElementById('bio').addEventListener('click', newBio);

// //edit bio
async function editBio(event) {
    event.preventDefault();

    const bio = document.querySelector('p[name="user-bio"]');
    console.log("this is the bio variable");
    console.log(bio);

//     const response = await fetch(`/api/users/bio`, {
//         method: 'POST',
//         body: JSON.stringify({
//             bio
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         document.location.replace('/dashboard/');
//     } else {
//         alert(response.statusText);
//     }
}

document.getElementById('editBio').addEventListener('click', editBio);