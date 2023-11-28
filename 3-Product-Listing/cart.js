document.addEventListener("DOMContentLoaded", () => {
  const displayProducts = () => {
    let cartContainer = document.querySelector("#cart-items");
    let cartProducts = JSON.parse(localStorage.getItem("cart"));
    console.log(cartProducts);
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
