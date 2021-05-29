import express from "express";

export const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  res.status(200).send({ firstName: "Aphirat", lastName: "Nimanussonkul" });
});
