// Read 
function getCartItems() {
  db.collection("cart-items").onSnapshot((snapshot) => {
    let cartItems = [];
    snapshot.docs.forEach((doc) => {
      cartItems.push({
        id: doc.id,
        ...doc.data(),
      });
      console.log("Added: ", doc.data());
    });
    generateCartItems(cartItems);
    getTotalCost(cartItems);
  });
}
// Render Cart Items 
function generateCartItems(cartItems) {
  let itemsHTML = "";
  cartItems.forEach((item) => {
    itemsHTML += `
    <li class="cart-item">    
    <div class="cart-item-image"><img src="${item.image}" alt=""></div>
    <div class="cart-item-details">
      <div class="cart-item-title">${item.name}</div>
      <div class="cart-item-brand">${item.make}</div>
    </div>
    <div class="cart-item-counter">
      <div data-id="${item.id}" class="cart-item-decrease"><i class="fas fa-chevron-left"></i></div>
      <h4 class="">x${item.quantity}</h4>
      <div data-id="${item.id}" class="cart-item-increase"><i class="fas fa-chevron-right"></i></div>
    </div>
    <div class="cart-item-total-cost">${numeral(item.quantity * item.price).format("$0,0.00")}</div>
    <div data-id="${item.id}" class="cart-item-delete"><i class="fas fa-times"></i></div>
    </li>
    `;
  });
  document.querySelector(".cart-items").innerHTML = itemsHTML;
  createEventListeners();
}

// Update and Delete
// Add EventListener
function createEventListeners() {
  let decreaseButtons = document.querySelectorAll(".cart-item-decrease");
  let increaseButtons = document.querySelectorAll(".cart-item-increase");
  let deleteButtons = document.querySelectorAll(".cart-item-delete");

  decreaseButtons.forEach((button) => {
    button.addEventListener("click", function () {
      decreaseCount(button.dataset.id);
    });
  });

  increaseButtons.forEach((button) => {
    button.addEventListener("click", function () {
      increaseCount(button.dataset.id);
    });
  });

  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      deleteItem(button.dataset.id);
    });
  });
}

function decreaseCount(itemId) {
  let cartItem = db.collection("cart-items").doc(itemId);
  cartItem.get().then(function (doc) {
    if (doc.exists) {
      if (doc.data().quantity > 1) {
        cartItem.update({
          quantity: doc.data().quantity - 1,
        });
      }
    }
  });
}

function increaseCount(itemId) {
  let cartItem = db.collection("cart-items").doc(itemId);
  cartItem.get().then(function (doc) {
    if (doc.exists) {
      if (doc.data().quantity > 0) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      }
    }
  });
}
function deleteItem(itemId) {
  db.collection("cart-items").doc(itemId).delete();
}
function getTotalCost(items) {
  let totalCost = 0;
  items.forEach((item) => {
    totalCost += item.price * item.quantity;
  });
  document.querySelector(".total-cost-number").innerHTML = numeral(totalCost).format("$0,0.00");
}

getCartItems();
