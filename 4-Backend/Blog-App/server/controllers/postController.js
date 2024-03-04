import Post from "../models/postModel.js";
export const createPost = async (req, res) => {
  try {
    const { id } = req.query;
    await Post.create({
      ...req.body,
      author: id,
      tags: req.body.tags.split(","),
    });
    res
      .status(201)
      .json({ success: true, message: "Post created successfully" });
  } catch (error) {
    res.status(404).json({ success: false, message: error });
  }
};

export const getPostById = async (req, res) => {};

export const getAllPosts = async (req, res) => {
  try {
    let allPosts = await Post.find().populate("author");
    res
      .status(200)
      .json({
        success: true,
        message: "Posts fetched successfully",
        data: allPosts,
      });
  } catch (error) {
    res.status(404).json({ success: false, message: error });
  }
};

export const updatePostById = async (req, res) => {};

export const deletePostById = async (req, res) => {};
