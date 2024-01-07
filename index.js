const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./route/UserRoute");
const cloudConnection = require("./db-connection/connection");
const app = express();

app.use(cors());
app.use(express.json());


  cloudConnection()

app.use("/api/user", userRoute);

app.listen(5000, () => {
  console.log("server started on port 5000");
});