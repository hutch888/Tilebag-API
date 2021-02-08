const express = require("express");
const lookUpExpression = require("../controllers/lookupControllers");

const router = express.Router();

router.get("/:expression", lookUpExpression);

module.exports = router;
