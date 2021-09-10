const form = document.querySelector("#add-product-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("items")
    .add({
      image: form.image.value,
      name: form.name.value,
      make: form.make.value,
      rating: form.rating.value,
      price: form.price.value,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  form.image.value = "";
  form.name.value = "";
  form.make.value = "";
  form.rating.value = "";
  form.price.value = "";
});
// Read
function getItems() {
  db.collection("items")
    .get()
    .then((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(items);
      generateItems(items);
    });
}
// Render Items
function generateItems(items) {
  items.forEach((item) => {
    let doc = document.createElement("div");
    doc.classList.add("product");
    doc.innerHTML = `
    <div class="product-image"><img src="${item.image}" alt=""></div>
    <div class="product-name">${item.name}</div>
    <div class="product-brand">${item.make}</div>
    <div class="product-rating">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    ${item.rating}
    </div>
    <div class="product-price">${numeral(item.price).format("$0,0.00")}</div>
    `;

    let addToCartEl = document.createElement("button");
    addToCartEl.classList.add("product-cart");
    addToCartEl.innerHTML = "Add to cart";
    addToCartEl.addEventListener("click", function () {
      addToCart(item);
    });

    let deleteButton = document.createElement("div");
    deleteButton.classList.add("product-delete");
    deleteButton.innerHTML = `<i class="fas fa-times"></i>`;
    deleteButton.setAttribute("data-id", `${item.id}`);
    deleteButton.addEventListener("click", function () {
      // deleteItem(deleteButton.dataset.id);
      console.log("Delete Nothing");
    });

    doc.appendChild(addToCartEl);
    doc.appendChild(deleteButton);
    document.querySelector(".products").appendChild(doc);
  });
}
// Create and Save to Cart-Items
function addToCart(item) {
  let cartItem = db.collection("cart-items").doc(item.id);
  cartItem.get().then(function (doc) {
    if (doc.exists) {
      cartItem.update({
        quantity: doc.data().quantity + 1,
      });
    } else {
      cartItem.set({
        image: item.image,
        make: item.make,
        name: item.name,
        rating: item.rating,
        price: item.price,
        quantity: 1,
      });
    }
  });
}
function deleteItem(itemId) {
  db.collection("items").doc(itemId).delete();
  console.log(db.collection("items").doc(itemId));
}
getItems();
