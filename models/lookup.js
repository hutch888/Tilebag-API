const importedObject = require("./sortedWords");
const listOfLists = importedObject.listOfLists;

async function lookup(searchSequence) {
	const re = new RegExp(searchSequence);
	const result = await listOfLists[searchSequence.length].filter((word) =>
		re.test(word)
	);
	return result;
}

module.exports = lookup;
