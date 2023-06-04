const mongoose = require("mongoose");

require("dotenv").config({
  path: "./secret/.env",
});

const options = {
  dbName: "representationData",
};

const uri = process.env.MONGODBURI;

mongoose
  .connect(uri, options)
  .then((res) => {
    console.log("Database is connected....".bgYellow);
  })
  .catch((err) => {
    console.log("Error is ->", err);
  });
