import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import storeProvider from "../providers/storeProvider";

class SearchBar extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ""
		};
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	doSearch = debounce(() => {
		this.props.store.setSearchTerm(this.state.searchTerm);
	}, 300);

	handleOnChange(event) {
		event.persist();
		this.setState(
			(prevState, props) => ({
				searchTerm: event.target.value
			}),
			() => {
				this.doSearch();
			}
		);
	}
	render() {
		return <input type="text" onChange={this.handleOnChange} />;
	}
}

export default storeProvider()(SearchBar);
