module.exports = (req, res, next) => {
  const { value } = req.body;

  if (!value || typeof value !== "string") {
    return res.status(400).json({ error: "Invalid request data" });
  }

  next();
};
