// Create Product
const form = document.querySelector("#add-product-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = {
    image: form.image.value,
    name: form.name.value,
    make: form.make.value,
    rating: form.rating.value,
    price: form.price.value,
  };
  db.collection("items").add(product);
});

// Realtime Listener
db.collection("items")
  .orderBy("name")
  .onSnapshot((snapshot) => {
    let changes = snapshot.docChanges();
    changes.forEach((change) => {
      if (change.type == "added") {
        generateItem(change.doc);
        console.log("Added: ", change.doc.data());
      } else if (change.type == "removed") {
        let productsList = document.querySelector(".products");
        let li = productsList.querySelector(`[data-id="${change.doc.id}"]`);
        productsList.removeChild(li);
        console.log("Removed: ", change.doc.data());
      }
    });
  });
