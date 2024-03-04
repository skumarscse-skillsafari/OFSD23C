import express from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
} from "../controllers/postController.js";
const router = express.Router();

router.post("/", createPost);

router.get("/", getAllPosts);

router.get("/:id", getPostById);

router.put("/:id", updatePostById);

router.delete("/:id", deletePostById);

export default router;
