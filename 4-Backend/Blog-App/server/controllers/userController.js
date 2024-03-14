import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET = process.env.SECRET;

export const signup = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword)
      return res.status(400).json({
        success: false,
        message: "Password and Confirm password not matched",
      });
    const encryptedPassword = await bcrypt.hash(password, 12);

    let user = await User.create({
      username: username,
      email: email,
      password: encryptedPassword,
      confirmPassword: encryptedPassword,
    });
    if (user) {
      res.status(201).json({
        success: true,
        message: "User created successfully",
        // data: user,
      });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email: email });
    // console.log(findUser);
    if (!findUser)
      return res
        .status(400)
        .json({ success: false, message: "User not exists" });
    const checkPassword = await bcrypt.compare(password, findUser.password);
    if (!checkPassword)
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    const token = jwt.sign(
      { email: findUser.email, id: findUser._id },
      SECRET,
      { expiresIn: "1hr" }
    );
    res
      .status(200)
      .json({
        success: true,
        message: "User Logged in successfully",
        token: token,
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    let users = await User.find();
    if (users) {
      res.status(200).json({ success: true, users: users });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    let user = await User.findById(id);
    if (user) {
      res.status(200).json({ success: true, user: user });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

export const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    let user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (user) {
      res.status(200).json({
        success: true,
        message: "User updated successfully",
        user: user,
      });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    let user = await User.findByIdAndDelete(id);
    if (user) {
      res
        .status(200)
        .json({ success: true, message: "User deleted successfully" });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};
