// Read
function getItems() {
  db.collection("items")
    .get()
    .then((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          make: doc.data().make,
          rating: doc.data().rating,
          price: doc.data().price,
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
    doc.appendChild(addToCartEl);
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
getItems();
