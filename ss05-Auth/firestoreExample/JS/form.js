// Create Product
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
});
