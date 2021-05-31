import express from "express";
import userController from "../controllers/user.controller";

export const userRoutes = express.Router();

userRoutes.get("", userController.getUser);
