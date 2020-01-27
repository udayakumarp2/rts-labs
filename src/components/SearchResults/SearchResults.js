import React, { Component } from "react";
import { connect } from "react-redux";

class SearchResults extends Component {
	// Function to handle conditional rendering for this component
	handleSearchResults = () => {
		// When there is no results values being kept in the redux store
		if (this.props.results.length === 0) {
			return (
				// Display message to client
				<p className="text-info p-3 m-2">There are no results to display.</p>
			);
		} else {
			// Otherwise, display results currently being held in the store
			const { results } = this.props;
			return (
				<div className="list-group p-3">
					{results.map((result) => {
						return (
							<a
								href={result.url}
								className="list-group-item list-group-item-action list-group-item-info mt-1 mb-1"
								key={result.objectID}
							>
								<strong className="text-dark">{result.title}</strong>
								<br></br>
								<strong>Author:</strong> {result.author}
							</a>
						);
					})}
				</div>
			);
		}
	};

	render() {
		return (
			<div className="search-results">
				<div className="row">
					<div className="col-12">
						<h1 className="text-light">Search Results</h1>
					</div>
				</div>
				<div className="row m-3">
					<div className="col-12 p-1 bg-dark border border-info">
						{this.handleSearchResults()}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		results: state.results
	};
};

export default connect(mapStateToProps)(SearchResults);
