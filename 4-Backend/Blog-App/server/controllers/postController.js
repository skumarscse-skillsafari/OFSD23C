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

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const findPost = await Post.findById(id);
    if (!findPost)
      return res
        .status(400)
        .json({ success: false, message: `No post with the id: ${id}` });
    res.status(200).json({ success: true, data: findPost });
  } catch (error) {
    res.status(404).json({ success: false, message: error });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    let allPosts = await Post.find().populate("author");
    res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      data: allPosts,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: error });
  }
};

export const updatePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          image: req.body.image,
          tags: req.body.tags.split(","),
        },
      },
      { new: true }
    );
    res.status(200).json({ success: true, data: updatedPost });
  } catch (error) {
    res.status(404).json({ success: false, message: error });
  }
};

export const deletePostById = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Post deleted successfully" });
  } catch (error) {
    res.status(404).json({ success: false, message: error });
  }
};
