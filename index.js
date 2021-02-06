const express = require("express");
const lookupRoutes = require("./routes/lookupRoutes");
const app = express();

app.use((req, res, next) => {
	// To restrict access to a particular origin, replace the '*' with the name of the origin.
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	next();
});

app.use("/search", lookupRoutes);

/* app.use("/search", (req, res, next) => {
	console.log(lookupRoutes);
}); */

app.listen(8080, () => {
	console.log("Server listening on port 8080.");
});
