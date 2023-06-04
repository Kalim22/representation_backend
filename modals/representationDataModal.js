const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const representationSchema = new Schema({}, { strict: false });

module.exports = mongoose.model("representations", representationSchema);
