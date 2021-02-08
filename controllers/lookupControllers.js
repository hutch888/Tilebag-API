const lookup = require("../models/lookup");

lookUpExpression = (req, res, next) => {
	const re = req.params.expression;
	lookup(re)
		.then((result) => JSON.stringify(result))
		.then((result) => res.send(result))
		.catch((err) => console.log(err));
};

module.exports = lookUpExpression;
