const mongoose = require("mongoose");

const ExcelSchema2 = new mongoose.Schema({
  nameOfCollege: { type: String, required: true },
  clgLocation: { type: String, required: true },
  clgFees: { type: Number, required: true },
});
const ExcelModel2 = mongoose.model("MBA_trial1", ExcelSchema2);

module.exports = ExcelModel2;
