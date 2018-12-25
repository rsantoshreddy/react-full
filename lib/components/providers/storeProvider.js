import React from "react";
import PropTypes from "prop-types";

/*This how a class component is used as Higher order component with context pass */
const storeProvider = (mapStateToProps = () => ({})) => Component => {
	return class withStore extends React.PureComponent {
		static displayName = `${Component.name}Container`;
		static contextTypes = {
			store: PropTypes.object
		};
		constructor(props) {
			super(props);
			this.onStoreChange = this.onStoreChange.bind(this);
			this.usedStates = this.usedStates.bind(this);
			// this.state = mapStateToProps(this.context.store, props);
		}

		onStoreChange() {
			// this.forceUpdate();
			this.setState(this.usedStates);
		}

		componentDidMount() {
			this.subScriptionId = this.context.store.subscribe(
				this.onStoreChange
			);
		}

		componentWillUnmount() {
			this.context.store.unsubscribe(this.subScriptionId);
		}
		componentWillUpdate(nextProps, nextState) {
			// console.log(Component.name);
			// console.log(nextProps, nextState);
		}

		usedStates() {
			return mapStateToProps(this.context.store, this.props);
		}

		render() {
			return (
				<Component
					{...this.props}
					{...this.usedStates()}
					store={this.context.store}
				/>
			);
		}
	};
};

/*This how a functional component is used as Higher order component with context pass */
// const storeProvider = Component => {
// 	const withStore = (props, { store }) => {
// 		return <Component {...props} store={store} />;
// 	};
// 	withStore.contextTypes = {
// 		store: PropTypes.object
// 	};
// 	withStore.displayName = `${Component.name}Container`;
// 	return withStore;
// };

export default storeProvider;
