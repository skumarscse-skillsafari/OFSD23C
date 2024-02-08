import express from "express";
import cors from "cors";
const app = express();
const PORT = 5000;
app.use(cors());
// http://localhost:5000
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Express HTTP methods" });
});
// http://localhost:5000/create
app.post("/create", (req, res) => {
  res.status(200).json({ success: true, message: "User created successfully" });
});
// CRUD
// Create => POST => request url + data
// Read (all documents) => GET => request url
// Read (single document) => GET => request url + id
// Update => PUT/PATCH => request url + id
// Delete => DELETE => request url + id

app.listen(PORT, () => {
  console.log(`Server is running in: http://localhost:${PORT}`);
});
