module.exports = {
	verbose                 : true,
	testEnvironment         : "jsdom",
	//https://jaketrent.com/post/jest-unexpected-token-typescript/
	transformIgnorePatterns : [
		"/node_modules/(?!(@inprodi/icons)/)",
	],
};
