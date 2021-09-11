function getCartItems() {
  db.collection("cart-items").onSnapshot((snapshot) => {
    let totalCount = 0;
    snapshot.forEach((doc) => {
      totalCount += doc.data().quantity;
    });
    console.log("Current cart items: ",totalCount);
    setCartCounter(totalCount);
  });
}
function setCartCounter(totalCount) {
  document.querySelector(".cart-number").innerHTML = totalCount;
}
getCartItems();
