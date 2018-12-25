import React, { PureComponent } from "react";
import Article from "../atoms/Article";

class Articles extends PureComponent {
	render() {
		const { articles, store } = this.props;
		const articlesArray = Object.keys(articles).map(key => articles[key]);
		return (
			<div>
				{articlesArray.map((article, key) => (
					<Article article={article} key={key} />
				))}
			</div>
		);
	}
}

export default Articles;
