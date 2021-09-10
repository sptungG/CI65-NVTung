function getCartItems() {
  db.collection("cart-items").onSnapshot((snapshot) => {
    let totalCount = 0;
    snapshot.forEach((doc) => {
      totalCount += doc.data().quantity;
    });
    console.log(totalCount);
    setCartCounter(totalCount);
  });
}
function setCartCounter(totalCount) {
  document.querySelector(".cart-number").innerHTML = totalCount;
}
getCartItems();
