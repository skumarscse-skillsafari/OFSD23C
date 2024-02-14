import express from "express";
import users from "./data.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "./controllers/UserController.js";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
app.use(cors());
app.use(express.json());

// CRUD
// Create => POST => request url + data
// Read (all documents) => GET => request url
// Read (single document) => GET => request url + id
// Update => PUT/PATCH => request url + id
// Delete => DELETE => request url + id

// GET
// http://localhost:5000
app.get("/", getUsers);
// POST
// http://localhost:5000/create
app.post("/create", createUser);
// PUT
// http://loclhost:5000/update
app.put("/update/:id", updateUser);
// DELETE
// http://localhost:5000/delete/:id
app.delete("/delete/:id", deleteUser);

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running in: http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
