const { model } = require("mongoose");
const {HoldingsSchema} = require("../schemas/HoldingsSchema");

const Holding =  new model("Holding", HoldingsSchema);

module.exports = {Holding};