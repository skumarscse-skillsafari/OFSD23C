import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";
const router = express.Router();

// CRUD
// Create => POST => request url + data
// Read (all documents) => GET => request url
// Read (single document) => GET => request url + id
// Update => PUT/PATCH => request url + id
// Delete => DELETE => request url + id

// GET
// http://localhost:5000/api/v1
router.get("/", getUsers);
// GET => Single User
// http://localhost:5000/api/v1/user/:id
router.get("/user/:id", getUserById);
// POST
// http://localhost:5000/create
router.post("/create", createUser);
// PUT
// http://loclhost:5000/update
router.put("/update/:id", updateUser);
// DELETE
// http://localhost:5000/delete/:id
router.delete("/delete/:id", deleteUser);

export default router;
