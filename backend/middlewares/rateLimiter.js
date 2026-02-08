const rateMap = new Map();

module.exports = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();
  const windowMs = 60000;
  const limit = 1000;

  if (!rateMap.has(ip)) {
    rateMap.set(ip, { count: 1, start: now });
    return next();
  }

  const record = rateMap.get(ip);

  if (now - record.start < windowMs) {
    if (record.count >= limit) {
      return res.status(429).json({ error: "Too many requests" });
    }
    record.count++;
  } else {
    rateMap.set(ip, { count: 1, start: now });
  }

  next();
};
