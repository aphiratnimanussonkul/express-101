import express from "express";
import bodyParser from "body-parser";
import { appRoutes } from "./routes/app.routes";

export const buildExpress = async () => {
  const app = express();
  try {
    app.use(bodyParser.json());
    app.use("/api", appRoutes);
  } catch (error) {
    console.log(error);
  }
  return app;
};
