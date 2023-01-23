const path = require("path");

module.exports = {
	verbose                 : true,
	testEnvironment         : "jsdom",
	transformIgnorePatterns : [
		//https://jaketrent.com/post/jest-unexpected-token-typescript/
		//https://jestjs.io/docs/configuration#transformignorepatterns-arraystring
		"/node_modules/(?!(@inprodi)/)",
	],
	moduleDirectories : ["node_modules", path.join(__dirname, "src")],
};
