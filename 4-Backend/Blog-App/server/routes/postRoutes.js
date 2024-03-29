import express from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
} from "../controllers/postController.js";
import auth from "./auth.js";

const router = express.Router();

router.post("/", auth, createPost);

router.get("/", getAllPosts);

router.get("/:id", getPostById);

router.put("/:id", auth, updatePostById);

router.delete("/:id", auth, deletePostById);

export default router;
