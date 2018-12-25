class StoreApi {
	constructor(data) {
		this.state = {
			articles: this.mapToObject(data.articles),
			authors: this.mapToObject(data.authors),
			searchTerm: "",
			timeStamp: new Date()
		};
		this.subscriptionList = {};
		this.lastSubscriptionId = 0;
	}

	mapToObject(arr) {
		return arr.reduce((acc, current) => {
			acc[current.id] = current;
			return acc;
		}, {});
	}

	lookUpAuthor = authorId => this.state.authors[authorId];
	getState = () => {
		return this.state;
	};

	subscribe = cb => {
		this.lastSubscriptionId++;
		this.subscriptionList[this.lastSubscriptionId] = cb;
		return this.lastSubscriptionId;
	};

	unsubscribe = subscriptionId => {
		delete this.subscriptionList[subscriptionId];
	};

	dispatch = stateChange => {
		this.state = { ...this.state, ...stateChange };
		Object.keys(this.subscriptionList).forEach(key => {
			this.subscriptionList[key]();
		});
	};

	setSearchTerm = searchTerm => {
		this.dispatch({ searchTerm });
	};

	startClock = () => {
		setInterval(() => {
			this.dispatch({
				timeStamp: new Date()
			});
		}, 1000);
	};
}

export default StoreApi;
