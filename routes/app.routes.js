import express from "express";

export const appRoutes = express.Router();

appRoutes.get("/hello", (req, res) => {
  console.log("Hello backend");
  res.status(200).send("Hello backend");
});
