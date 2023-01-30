import express from "express";
import api from "./api";
import auth from "./auth";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;


app.use(express.json());

const { sequelize } = require("../models");

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", api);


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
