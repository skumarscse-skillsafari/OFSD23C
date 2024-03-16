import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
      trim: true,
      minLength: [5, "Title must be atleast 5 characters"],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minLength: [5, "Title must be atleast 5 characters"],
    },
    image: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

export default Post;
