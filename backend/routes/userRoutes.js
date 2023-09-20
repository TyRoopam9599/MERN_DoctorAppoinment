import express from "express";
import {
  loginController,
  registerController,
  authController,
} from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

//router Object
const userRouter = express.Router();

//routes
//LOGIN -> POST
userRouter.post("/login", loginController);

//REGISTER -> POST
userRouter.post("/register", registerController);

//AUTH -> POST
userRouter.post("/getuserdata", authMiddleware, authController);

export default userRouter;
