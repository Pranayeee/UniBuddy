const mongoose = require("mongoose");

const newuserSchema = new mongoose.Schema({
    nameOfCollege: { type: String, required: true },
    clgLocation: { type: String, required: true },
    clgFees: { type: Number, required: true }
});

module.exports = mongoose.model("MBA", userSchema);