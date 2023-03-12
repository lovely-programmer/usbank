import express from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  getMe,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/allusers", protect, getAllUsers);
userRouter.get("/", protect, getMe);

export default userRouter;
