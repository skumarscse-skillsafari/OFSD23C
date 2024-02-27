import User from "../models/userModel.js";
export const createUser = async (req, res) => {
  try {
    let user = await User.create(req.body);
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
