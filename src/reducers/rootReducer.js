// For the size of this application, only a root reducer is necessary

// Initializing the redux state. We want to track search history and hold search results.
const initState = {
	searches: [],
	results: []
};

const rootReducer = (state = initState, action) => {
	if (action.type === "CREATE_SEARCH") {
		return {
			...state,
			searches: [...state.searches, action.terms]
		};
	} else if (action.type === "FETCH_RESULTS") {
		return {
			...state,
			results: action.results
		};
	} else if (action.type === "FETCH_RESULTS_ERROR") {
		console.log("fetch results error", action.err);
		return state;
	}
	return state;
};

export default rootReducer;
