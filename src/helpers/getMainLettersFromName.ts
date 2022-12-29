const getMainLettersFromName = (name = "") => {
	const mainLetters = name
		?.split(" ")
		?.reduce((acc, val) => acc + (val[0] ?? ""), "")
		?.toUpperCase();

	return (mainLetters ?? "")?.substring(0, 2);
};

export default getMainLettersFromName;
