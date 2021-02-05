const express = require("express");
const lookup = require("./models/lookup");

const app = express();

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	next();
});

app.get("/search/:expression", (req, res, next) => {
	const re = req.params.expression;
	lookup(re)
		.then((result) => JSON.stringify(result))
		.then((result) => res.send(result))
		.catch((err) => console.log(err));
});

app.listen(8080, () => {
	console.log("Server listening on port 8080.");
});
