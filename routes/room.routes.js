import express from "express";

export const roomRoutes = express.Router();

roomRoutes.get("", (req, res) => {
  res.status(200).send({ roomId: "1", roomNumber: "109" });
});
