const express = require("express");
const router = express.Router();

const rateLimiter = require("../middlewares/rateLimiter");
const validator = require("../middlewares/requestValidator");
const { receiveData } = require("../controllers/data.controller");

router.post("/", rateLimiter, validator, receiveData);

module.exports = router;
