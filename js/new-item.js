const addItemForm = document.getElementById("add-item-form");
const addButton = document.querySelector(".add-button");
const cancelButton = document.querySelector(".cancel-button");

let items = JSON.parse(localStorage.getItem("items")) || [];

function addNewItem(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const type = document.getElementById("type").value;
  const price = parseFloat(document.getElementById("price").value);
  const imageUrl = document.getElementById("image-url").value;
  const isPublished = document.querySelector('.is-published input').checked;

  const newItem = {
    title,
    description,
    type,
    price: price || 0, 
    image: imageUrl || "https://via.placeholder.com/150", 
    isPublished
  };

  items.push(newItem);
  localStorage.setItem("items", JSON.stringify(items));

  addItemForm.reset();

  window.location.href = "items.html";
}

function cancelForm() {
  window.location.href = "items.html";
}

addItemForm.addEventListener("submit", addNewItem);

cancelButton.addEventListener("click", cancelForm);
