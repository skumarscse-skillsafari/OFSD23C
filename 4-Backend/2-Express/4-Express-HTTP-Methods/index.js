import express from "express";
// import users from "./data.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
// import { v4 as uuidv4 } from "uuid";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.static("./client"));
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", userRoutes);
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
app.use(cors());
app.use(express.json());

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running in: http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
