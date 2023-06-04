const express = require("express");

const route = express.Router();

const { saveDataFromApi } = require("../controllers/reresentationControllers");

route.get("/apiv1/save-data", saveDataFromApi);

module.exports = route;
