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
        console.log("Total product: ", items.length);
      });
  }
  getItems();
// Render Items
function generateItem(item) {
  let doc = document.createElement("li");
  doc.classList.add("product");
  doc.setAttribute("data-id", `${item.id}`);
  doc.innerHTML = `
    <div class="product-image"><img src="${item.data().image}" alt=""></div>
    <div class="product-name">${item.data().name}</div>
    <div class="product-brand">${item.data().make}</div>
    <div class="product-rating">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    ${item.data().rating}
    </div>
    <div class="product-price">${numeral(item.data().price).format("$0,0.00")}</div>
    `;

  let addToCartEl = document.createElement("button");
  addToCartEl.classList.add("product-cart");
  addToCartEl.innerHTML = "Add to cart";
  addToCartEl.addEventListener("click", function () {
    addToCart(item);
    console.log("Add to cart: ", item.data());
  });

  let deleteButton = document.createElement("div");
  deleteButton.classList.add("product-delete");
  deleteButton.innerHTML = `<i class="fas fa-times"></i>`;
  deleteButton.addEventListener("click", function () {
    deleteItem(item.id);
  });

  doc.append(addToCartEl, deleteButton);
  document.querySelector(".products").appendChild(doc);
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
        image: item.data().image,
        make: item.data().make,
        name: item.data().name,
        rating: item.data().rating,
        price: item.data().price,
        quantity: 1,
      });
    }
  });
}
// Delete in Firestore
function deleteItem(itemId) {
  db.collection("items").doc(itemId).delete();
  db.collection("cart-items").doc(itemId).delete();
}
