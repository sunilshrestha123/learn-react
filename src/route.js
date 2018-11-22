require("knex");
import departmentController from './controller/departmentController';
// const express = require('express')\
import router from "./route";
import express from "express";
const morgan = require("morgan");
const app = express();

app.get("/", (req, res) =>res.send(200,'api is running'));
app.use("/department",departmentController);
  // res.send({
  //   user: {
  //     firstname: "sunil",
  //     password: "sunil123",
  //     name: "sss",
  //     nameuser: "hello "
  //   }
  // })
// );
export default app;
