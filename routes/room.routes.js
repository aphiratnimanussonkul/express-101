import express from "express";
import roomController from "../controllers/room.controller";

export const roomRoutes = express.Router();

roomRoutes.get("", roomController.getRoom);
