const { processDataAsync } = require("../services/data.service");

exports.receiveData = async (req, res) => {
  await processDataAsync(req.body.value);
  res.json({ status: "Accepted" });
};
