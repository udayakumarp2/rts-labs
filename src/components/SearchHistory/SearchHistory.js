import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchResults } from "../../actions/resultsActions";

class SearchHistory extends Component {
	// This function handles retroactive searches when a search history button is clicked
	retroSearch = (event) => {
		// Here we grab the id of the button that is clicked and pass it to our AJAX call
		this.props.fetchResults(event.target.id);
	};

	render() {
		const { searches } = this.props;
		return (
			<div className="search-results">
				<div className="row">
					<div className="col-12">
						<h1 className="text-light">Search History</h1>
					</div>
				</div>
				<div className="row m-3 p-2 bg-dark text-light border border-info">
					<div className="col-12">
						<p>
							Click on any of your previous search terms to conduct a
							retroactive search.
						</p>
						{searches.map((search) => {
							return (
								<button
									className="btn btn-info m-2"
									id={search}
									key={search}
									onClick={this.retroSearch}
								>
									{search}
								</button>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		searches: state.searches
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchResults: (query) => dispatch(fetchResults(query))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHistory);
