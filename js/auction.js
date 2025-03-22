const auctionItemsContainer = document.getElementById("auctionItemsContainer");

const auctionItems = [
    {
        image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
        title: "Exclusive Artwork",
        description: "Rare painting with limited edition.",
        price: 1000,
        endDate: "2024-11-20T12:00:00"
    },
    {
        image: "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
        title: "Artwork 1",
        description: "Beautiful painting ready for auction.",
        price: 200
    },
    {
        image: "https://images.unsplash.com/photo-1618208122329-27e7f10d6d6b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
        title: "Artwork 2",
        description: "Unique sculpture piece.",
        price: 500
    },
    {
        image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
        title: "Artwork 3",
        description: "Vintage painting from the 70s.",
        price: 300
    }
];

function renderAuctionItems() {
    auctionItemsContainer.innerHTML = "";

    const featuredItem = auctionItems[0];
    const featuredItemCard = document.createElement("div");
    featuredItemCard.classList.add("auction-card", "featured");

    const endDate = new Date(featuredItem.endDate);
    const formattedDate = `${endDate.toLocaleDateString()} at ${endDate.toLocaleTimeString()}`;

    featuredItemCard.innerHTML = `
        <img src="${featuredItem.image}" alt="${featuredItem.title}">
        <h3>${featuredItem.title}</h3>
        <p>${featuredItem.description}</p>
        <p>Starting Bid: $${featuredItem.price}</p>
        <p><strong>Ends in: ${formattedDate}</strong></p>
        <p><strong>Your Bid: $${getSavedBid(featuredItem.title)}</strong></p>
        <button class="bid-btn" data-item="${featuredItem.title}">Bid Now</button>
    `;

    const featuredSection = document.createElement("section");
    featuredSection.classList.add("featured-product");
    featuredSection.appendChild(featuredItemCard);
    auctionItemsContainer.appendChild(featuredSection);

    auctionItems.slice(1).forEach(item => {
        const card = document.createElement("div");
        card.classList.add("auction-card");
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p>Starting Bid: $${item.price}</p>
            <p><strong>Your Bid: $${getSavedBid(item.title)}</strong></p>
            <button class="bid-btn" data-item="${item.title}">Bid Now</button>
        `;
        auctionItemsContainer.appendChild(card);
    });
}

function getSavedBid(itemTitle) {
    const savedBids = JSON.parse(localStorage.getItem("bids")) || {};
    return savedBids[itemTitle] || 0; 
}

function saveBid(itemTitle, bidAmount) {
    const savedBids = JSON.parse(localStorage.getItem("bids")) || {};
    savedBids[itemTitle] = bidAmount;
    localStorage.setItem("bids", JSON.stringify(savedBids));
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("bid-btn")) {
        const itemTitle = event.target.getAttribute("data-item");
        const bidModal = new bootstrap.Modal(document.getElementById('bidModal'));
        document.getElementById('bidModalLabel').innerText = `Place Bid for ${itemTitle}`;
        bidModal.show();

        document.getElementById("placeBidButton").onclick = function () {
            const bidAmount = document.getElementById("bidAmount").value;
            if (bidAmount && bidAmount > 0) {
                saveBid(itemTitle, bidAmount); 
                alert(`Your bid of $${bidAmount} has been placed for ${itemTitle}.`);
                bidModal.hide();
                renderAuctionItems(); 
            } else {
                alert("Please enter a valid bid amount.");
            }
        };
    }
});

renderAuctionItems();
