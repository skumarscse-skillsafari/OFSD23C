import Users from "../models/userModel.js";

export const getUsers = async (req, res) => {
  try {
    let users = await Users.find();
    if (!users) {
      res.status(400).json({ success: false, message: "Something went wrong" });
    } else {
      res.status(200).json({ success: true, data: users });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

export const getUserById = async (req, res) => {
  try {
    let { id } = req.params;
    let user = await Users.findById(id);
    if (!user) {
      res
        .status(400)
        .json({ success: false, message: `User with the id: ${id} not found` });
    } else {
      res.status(200).json({ success: true, data: user });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

export const createUser = async (req, res) => {
  // let { name, age, isAdmin } = req.body;
  // let userData = {
  //   id: uuidv4(),
  //   name,
  //   age,
  //   isAdmin,
  // };
  await Users.create(req.body)
    .then((user) =>
      res.status(200).json({
        success: true,
        message: "User created successfully",
        // data: user,
      })
    )
    .catch((error) => res.status(400).json({ success: false, message: error }));
  // console.log(userData);
};

export const updateUser = async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.params);
    // let updatedUsers = users.map((user) => {
    //   if (user.id === +req.params.id) {
    //     return { id: +req.params.id, ...req.body };
    //   } else {
    //     return user;
    //   }
    // });
    // console.log(updatedUsers);
    const { id } = req.params;
    let updatedUser = await Users.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    // let newUsers = users.filter((user) => user.id !== +req.params.id);
    // console.log(newUsers);
    const { id } = req.params;
    await Users.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};
