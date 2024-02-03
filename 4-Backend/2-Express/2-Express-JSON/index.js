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
app.get("/products", async (req, res) => {
  try {
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({ success: false, message: `${error}` });
  }
});

// Getting single product
app.get("/products/:id", async (req, res) => {
  try {
    // console.log(req);
    const { id } = req.params;
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

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
