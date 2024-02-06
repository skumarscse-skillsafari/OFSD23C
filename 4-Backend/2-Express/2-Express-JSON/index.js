const express = require("express");
const { products } = require("./data.js");
// console.log(products);
const app = express();
const PORT = 5000;
// Routes
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Express JSON Page</h1>");
});

// Getting all the products
app.get("/products-details", async (req, res) => {
  try {
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({ success: false, message: `${error}` });
  }
});

app.get("/products", async (req, res) => {
  try {
    let newProducts = [...products];
    let limitedPropProducts = newProducts.map(
      ({ id, title, price, description }) => {
        return {
          id,
          title,
          price,
          description,
        };
      }
    );
    res.status(200).json({ success: true, data: limitedPropProducts });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
});

// Getting single product
// params => http://localhost:5000/products/1
app.get("/products/:id", async (req, res) => {
  try {
    // console.log(req);
    const { id } = req.params; // {id: "1"}
    const findProduct = products.find((product) => product.id === Number(id));
    if (!findProduct) {
      res
        .status(404)
        .json({ success: false, message: `No product with the id: ${id}` });
    } else {
      res.status(200).json({ success: true, data: findProduct });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
});

// query
// http://localhost:5000/products?search=value&limit=5
app.get("/products-query", async (req, res) => {
  // console.log(req.query); // {search: "mens", limit: "3"}
  let { search, limit } = req.query;
  try {
    let newProducts = [...products];
    let filteredProducts = newProducts.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredProducts.length <= 0) {
      res.status(400).json({ success: false, message: "No products found" });
    } else {
      let response = filteredProducts.splice(0, +limit);
      // console.log(response);
      res.status(200).json({ success: true, data: response });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
