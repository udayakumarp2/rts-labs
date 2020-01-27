import axios from "axios";

export const fetchResults = (query) => {
	return (dispatch) => {
		//Make async call to Hacker News API
		return axios
			.get("https://hn.algolia.com/api/v1/search?query=" + query)
			.then((response) => {
				console.log(response);
				// Capture the data we need from the response
				const results = response.data.hits;
				dispatch({ type: "FETCH_RESULTS", results });
			})
			.catch((err) => {
				// If the request fails, send error action
				dispatch({ type: "FETCH_RESULTS_ERROR", err });
			});
	};
};
