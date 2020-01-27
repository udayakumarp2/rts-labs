export const search = (terms) => {
	return {
		type: "CREATE_SEARCH",
		terms: terms
	};
};
