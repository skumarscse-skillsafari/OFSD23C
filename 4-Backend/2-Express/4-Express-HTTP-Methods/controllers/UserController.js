export const getUsers = async (req, res) => {
  try {
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

// const getUserById =

export const createUser = async (req, res) => {
  try {
    let { name, age, isAdmin } = req.body;
    let userData = {
      id: uuidv4(),
      name,
      age,
      isAdmin,
    };
    // console.log(userData);
    res
      .status(200)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

export const updateUser = (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params);
    let updatedUsers = users.map((user) => {
      if (user.id === +req.params.id) {
        return { id: +req.params.id, ...req.body };
      } else {
        return user;
      }
    });
    // console.log(updatedUsers);
    res
      .status(200)
      .json({ success: true, message: "User updated successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

export const deleteUser = (req, res) => {
  try {
    let newUsers = users.filter((user) => user.id !== +req.params.id);
    // console.log(newUsers);
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};
