import express from "express";
import sequelize from "./db";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    sequelize.authenticate();
    sequelize.sync();
    app.listen(port, () => console.log(`Server listening on ${port}`));
  } catch (e) {
    console.log("Error", e);
  }
};

start();
