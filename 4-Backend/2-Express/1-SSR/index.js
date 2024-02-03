const express = require("express");
const app = express();

app.use(express.static("./1-Landing-Page"));
// Create routes
// httpMethods => get => Read, post => Create, put => Update, patch => update, delete => Delete
// app.httpMethod("path", (req, res) => {
// logic => request-response
// })

// Request => "/" => http://localhost:5000
// Response => <h1>Welcome to Express.js</h1>
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Express.js</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>This is About page</h1>");
});

app.get("*", (req, res) => {
  res
    .status(404)
    .send(`<h1>Something went wrong</h1><a href="/">Back to home page</a>`);
});

app.listen(5000, () => {
  console.log("Server is running in http://localhost:5000");
});
