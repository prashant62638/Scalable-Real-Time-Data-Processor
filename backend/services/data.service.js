const Data = require("../models/data.model");

const processDataAsync = async (value) => {
  setImmediate(async () => {
    await Data.create({ value });
  });
};

module.exports = { processDataAsync };
