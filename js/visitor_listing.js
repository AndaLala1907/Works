const cardContainer = document.getElementById('cardContainer');

function renderCards(items) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const card = document.createElement('div');
        card.classList.add('card');

        const cardImage = document.createElement('img');
        cardImage.classList.add('card-image');
        cardImage.src = item.image;
        cardImage.alt = item.title;
        card.appendChild(cardImage);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const artistTitle = document.createElement('h1');
        artistTitle.classList.add('card-title');
        artistTitle.style.fontFamily = 'Reenie Beanie';
        artistTitle.textContent = item.artist;
        cardBody.appendChild(artistTitle);

        const price = document.createElement('button');
        price.classList.add('btn', 'card-price');
        price.textContent = `$${item.price}`;
        cardBody.appendChild(price);

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = item.title;
        cardBody.appendChild(title);

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = item.description;
        cardBody.appendChild(description);

        card.appendChild(cardBody);
        cardContainer.appendChild(card);

        if (i % 2 === 0) {
            card.classList.add('even');
        } else {
            card.classList.add('odd');
        }
    }
}
const publishedItems = items.filter(item => item.isPublished);
renderCards(publishedItems);

function fetchArtists() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(artists => {
            const artistFilter = document.getElementById('artistFilter');
            artists.forEach(artist => {
                const option = document.createElement('option');
                option.value = artist.name;
                option.textContent = artist.name;
                artistFilter.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching artists:', error.message));
}

function populateTypeFilter() {
    const typeFilter = document.getElementById('typeFilter');
    for (let i = 0; i < itemTypes.length; i++) {
        const type = itemTypes[i];
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type.charAt(0).toUpperCase() + type.slice(1); 
        typeFilter.appendChild(option);
    }
}

function applyFilters() {
    const filteredItems = items.filter(item => {
        const itemName = document.getElementById('itemNameFilter').value.trim().toLowerCase();
        if (itemName !== '' && !item.title.toLowerCase().includes(itemName)) {
            return false;
        }

        const artistName = document.getElementById('artistFilter').value.trim();
        if (artistName !== '' && item.artist !== artistName) {
            return false;
        }

        const minPrice = parseFloat(document.getElementById('minPriceFilter').value);
        const maxPrice = parseFloat(document.getElementById('maxPriceFilter').value);
        if (!isNaN(minPrice) && item.price < minPrice) {
            return false;
        }
        if (!isNaN(maxPrice) && item.price > maxPrice) {
            return false;
        }

        const itemType = document.getElementById('typeFilter').value.trim();
        if (itemType !== '' && item.type !== itemType) {
            return false;
        }

        return true;
    });

    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    renderCards(filteredItems);
}

document.getElementById('applyFilters').addEventListener('click', applyFilters);

fetchArtists();
populateTypeFilter();
