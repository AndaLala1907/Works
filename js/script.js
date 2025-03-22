fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(artists => {
        const artistDropdown = document.getElementById('artist-dropdown');

        artists.forEach(artist => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.className = 'dropdown-item';
            link.href = `artists.html?artist=${artist.name}`;
            link.textContent = artist.name;

            listItem.appendChild(link);
            artistDropdown.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error:', error));

document.getElementById('showSignUp').addEventListener('click', function () {
    document.getElementById('signUpForm').style.display = 'block';
    document.getElementById('signInForm').style.display = 'none';
});

document.getElementById('showSignIn').addEventListener('click', function () {
    document.getElementById('signInForm').style.display = 'block';
    document.getElementById('signUpForm').style.display = 'none';
});
