import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRouter from "./apps/auth.js";
import serviceRouter from "./apps/services.js";
import categoryRouter from "./apps/category.js";
import checkoutRouter from "./apps/checkout.js";
import orderHistoryRouter from "./apps/orderHistory.js";
import dotenv from "dotenv";
import cloudinary from "cloudinary";

async function init() {
  dotenv.config();

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true,
  });

  const app = express();
  const port = 4000;

  app.use(cors());
  app.use(bodyParser.json());
  app.use("/auth", authRouter);
  app.use("/service", serviceRouter);
  app.use("/category", categoryRouter);
  app.use("/checkout", checkoutRouter);
  app.use("/orderHistory", orderHistoryRouter);

  app.get("/", (req, res) => {
    res.send("Welcome to Home Service!");
  });

  app.get("*", (req, res) => {
    res.status(404).send("Not Found");
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

init();
