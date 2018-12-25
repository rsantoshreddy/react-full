import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Articles from "../molecules/Articles";
import SearchBar from "../atoms/SearchBar";
import TimeStamp from "../atoms/TimeStamp";
import pickBy from "lodash.pickby";
// import Perf from "react-addons-perf";

// if (typeof window !== undefined) {
// 	window.Perf = Perf;
// }

class App extends React.PureComponent {
	constructor(props) {
		super(props);
		this.onStoreChange = this.onStoreChange.bind(this);
	}
	appState() {
		const { articles, searchTerm } = this.props.store.getState();
		return { articles, searchTerm };
	}
	onStoreChange() {
		this.setState(this.appState);
	}

	componentDidMount() {
		this.subScriptionId = this.props.store.subscribe(this.onStoreChange);
		this.props.store.startClock();

		// setImmediate(() => {
		// 	Perf.start();
		// });

		// setTimeout(() => {
		// 	Perf.stop();
		// 	Perf.printWasted();
		// }, 5000);
	}

	componentWillUnmount() {
		this.props.store.unsubscribe(this.subScriptionId);
	}

	static childContextTypes = {
		store: PropTypes.object
	};

	getChildContext() {
		return {
			store: this.props.store
		};
	}

	state = this.appState();

	render() {
		let { articles, searchTerm } = this.state;
		if (searchTerm) {
			articles = pickBy(articles, value => {
				return (
					value.title.match(searchTerm) ||
					value.body.match(searchTerm)
				);
			});
		}
		return (
			<div>
				<TimeStamp />
				<SearchBar />
				<Articles articles={articles} />
			</div>
		);
	}
}

export default App;
