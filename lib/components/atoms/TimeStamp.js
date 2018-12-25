import React, { Component } from "react";
import PropTypes from "prop-types";
import storeProvider from "../providers/storeProvider";

class TimeStamp extends Component {
	constructor(props) {
		super(props);
	}
	shouldComponentUpdate(nextProps, nextState) {
		return (
			this.props.timeStamp.toLocaleTimeString() !==
			nextProps.timeStamp.toLocaleTimeString()
		);
	}
	render() {
		return <p>{this.props.timeStamp.toLocaleTimeString()}</p>;
	}
}

const mapStateToProps = store => {
	return {
		timeStamp: store.getState().timeStamp
	};
};
export default storeProvider(mapStateToProps)(TimeStamp);
