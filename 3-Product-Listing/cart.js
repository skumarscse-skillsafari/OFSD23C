document.addEventListener("DOMContentLoaded", () => {
  const displayProducts = () => {
    let cartContainer = document.querySelector("#cart-items");
    let cartProducts = JSON.parse(localStorage.getItem("cart"));
    console.log(cartProducts.length);
    cartProducts.forEach((product, index) => {
      const divEle = document.createElement("div");
      divEle.innerHTML = `<h2>${product.title}</h2>
              <p><img src=${product.image} alt=product-${
        index + 1
      } height="100px" width="100px"/></p>
              <h3>Rs.${product.price}</h3>
              <h3>Qty: ${product.quantity}</h3>
              <button onclick='updateCart(${product.id}, 1)'>+</button>
              <button onclick='updateCart(${product.id}, -1)'>-</button>
              <button onclick='removeCart(${product.id})'>Remove</button>
              <hr />`;
      cartContainer.appendChild(divEle);
    });
  };

  window.onload = displayProducts;
});

function updateCart(id, qty) {
  // console.log(id, qty);
  let cartStorage = JSON.parse(localStorage.getItem("cart"));
  let findIndex = cartStorage.findIndex((p) => p.id === id);
  console.log(cartStorage[findIndex]);
  if (findIndex !== -1) {
    cartStorage[findIndex].quantity += qty;
    if (cartStorage[findIndex].quantity <= 0) {
      cartStorage.splice(findIndex, 1);
    }
  }
  // console.log(cartStorage);
  localStorage.setItem("cart", JSON.stringify(cartStorage));
  location.reload();
}

function removeCart(id) {
  if (confirm("Are you sure to remove the product?")) {
    let cartStorage = JSON.parse(localStorage.getItem("cart"));
    let filteredProducts = cartStorage.filter((p) => p.id !== id);
    localStorage.setItem("cart", JSON.stringify(filteredProducts));
    location.reload();
  }
}
