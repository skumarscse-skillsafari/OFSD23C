import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// http://localhost:5000/api/v1/users
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.get("/", (req, res) => {
  res.send("<h1>Blog Backend</h1>");
});

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running in: http://localhost:${PORT}`);
    })
  )
  .catch((error) => console.log(error));
