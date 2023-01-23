
const {
	MODE : ENVIRONMENT,
	VITE_API,
	VITE_API_LOCAL,
} = import.meta.env;

const API_URL = ENVIRONMENT
	? VITE_API
	: VITE_API_LOCAL;

export {
	ENVIRONMENT,
	API_URL,
};
