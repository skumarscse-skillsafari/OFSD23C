import express from "express";
import {
  signup,
  signin,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/userController.js";

const router = express.Router();

// CreateUser
router.post("/create", signup);

// Signin
router.post("/signin", signin);

// GetAllUsers
router.get("/", getAllUsers);

// GetUserById
router.get("/:id", getUserById);

// UpdateUserById
router.put("/:id", updateUserById);

// DeleteUserById
router.delete("/:id", deleteUserById);

export default router;
