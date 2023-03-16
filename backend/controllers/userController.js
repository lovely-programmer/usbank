import User from "../models/userModels.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    address,
    phoneNumber,
    account_type,
    balance,
    profilePicture,
  } = req.body;

  // Check If user Exist
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exist");
  }

  // @Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    address,
    phoneNumber,
    profilePicture,
    account_type,
    balance,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check For Email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
      phoneNumber: user.phoneNumber,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

const getAllUsers = asyncHandler(async (req, res) => {
  const isAdmin = req.user.isAdmin;
  const allUser = await User.find();
  if (isAdmin) {
    res.status(200).json(allUser);
  }
});

const updateProfilePicture = asyncHandler(async (req, res) => {
  const profilePicture = req.body.profilePicture;

  const id = req.user.id;

  await User.findByIdAndUpdate({ _id: id }, { $set: { profilePicture } });

  res.status(200).json("Updated Profile Picture Successfully");
});

const editUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const isAdmin = req.user.isAdmin;

  if (isAdmin) {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedUser);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const isAdmin = req.user.isAdmin;

  if (isAdmin) {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ id: req.params.id });
  }
});

// @Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export {
  registerUser,
  loginUser,
  getAllUsers,
  getMe,
  editUser,
  deleteUser,
  updateProfilePicture,
};
