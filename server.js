const express = require("express");
const cors = require("cors");

require("colors");
require("dotenv").config({
  path: "./secret/.env",
});

require("./connections/db");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("hello world");
});

app.use("/", require("./routes/representationRoutes"));

const port = process.env.PORT || 6000;

app.listen(port, (err) => {
  if (err) {
    throw new Error("Server is not running...");
  }

  console.log(`Server is running on http://localhost:${port}`.bgBlue);
});
