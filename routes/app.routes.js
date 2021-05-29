import express from "express";
import { userRoutes } from "./user.routes";
import { roomRoutes } from "./room.routes";

export const appRoutes = express.Router();

appRoutes.use("/user", userRoutes);
appRoutes.use("/room", roomRoutes);
