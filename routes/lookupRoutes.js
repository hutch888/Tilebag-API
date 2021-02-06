const express = require("express");
const lookup = require("../models/lookup");

const router = express.Router();

router.get("/:expression", (req, res, next) => {
	const re = req.params.expression;
	lookup(re)
		.then((result) => JSON.stringify(result))
		.then((result) => res.send(result))
		.catch((err) => console.log(err));
});

module.exports = router;
