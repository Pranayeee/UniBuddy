
const mongoose = require("mongoose");

const ExcelSchema = new mongoose.Schema({
  nameOfCollege: { type: String, required: true },
  clgLocation: { type: String, required: true },
  clgFees: { type: Number, required: true },
});
const ExcelModel = mongoose.model("IT", ExcelSchema);

module.exports = ExcelModel;
