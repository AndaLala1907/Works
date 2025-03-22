let items = JSON.parse(localStorage.getItem("items")) || [
    {
        image: "https://images.unsplash.com/photo-1602188324312-e1cd6383d2fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8M3x8YXJ0JTIwd2FsbHBhcGVyfHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
        title: "Product 1",
        description: "A masterpiece that speaks through colors and lines, revealing the deepest emotions.",
        type: "Art",
        isPublished: false,
        price: "100"
    },
    {
        image: "https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
        title: "Product 2",
        description: "A visual journey inviting you to see the world from a new, inspiring perspective.",
        type: "Art",
        isPublished: true,
        price: "150"
    }
];

function renderItems() {
    cardContainer.innerHTML = "";

    items.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="card-image">
            <h3 class="card-title">${item.title}</h3>
            <p class="card-description">${item.description}</p>
            <div class="card-price">Price: $${item.price}</div>
            <div class="card-buttons">
                <button class="btn btn-primary buy-now-btn" data-index="${index}">Send to Auction</button>
                <button class="btn ${item.isPublished ? 'btn-secondary' : 'btn-dark'} publish-btn" data-index="${index}">
                    ${item.isPublished ? 'Unpublish' : 'Publish'}
                </button>
                <button class="btn btn-danger remove-btn" data-index="${index}">Remove</button>
                <button class="btn btn-warning edit-btn" data-index="${index}">Edit</button>
            </div>
        `;

        cardContainer.appendChild(card);
    });

    document.querySelectorAll('.buy-now-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            alert(`Product "${items[index].title}" has been sent to auction.`);
        });
    });

    document.querySelectorAll('.publish-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            items[index].isPublished = !items[index].isPublished;
            updateLocalStorage();  
            renderItems();
        });
    });

    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            const confirmation = confirm(`Are you sure you want to remove "${items[index].title}"?`);
            if (confirmation) {
                items.splice(index, 1);
                updateLocalStorage();  
                renderItems();
            }
        });
    });

    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            const item = items[index];
            document.getElementById('itemTitle').value = item.title;
            document.getElementById('itemDescription').value = item.description;
            document.getElementById('itemType').value = item.type;
            document.getElementById('itemPrice').value = item.price;
            document.getElementById('itemImage').value = item.image;
            document.getElementById('itemIsPublished').checked = item.isPublished;

            const saveButton = document.getElementById('saveItemBtn');
            saveButton.onclick = function () {
                item.title = document.getElementById('itemTitle').value;
                item.description = document.getElementById('itemDescription').value;
                item.type = document.getElementById('itemType').value;
                item.price = document.getElementById('itemPrice').value;
                item.image = document.getElementById('itemImage').value;
                item.isPublished = document.getElementById('itemIsPublished').checked;

                updateLocalStorage();  
                const modal = bootstrap.Modal.getInstance(document.getElementById('addItemModal'));
                modal.hide();
                renderItems();
            };

            const modal = new bootstrap.Modal(document.getElementById('addItemModal'));
            modal.show();
        });
    });
}

function updateLocalStorage() {
    localStorage.setItem("items", JSON.stringify(items));
}

renderItems();
