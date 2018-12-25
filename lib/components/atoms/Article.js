import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import storeProvider from "../providers/storeProvider";

const display = date => new Date(date).toDateString();

class Article extends PureComponent {
	render() {
		const { article, author } = this.props;
		const { title, date, body } = article;
		const { website, firstName, lastName } = author;
		return (
			<div>
				<h1>{title}</h1>
				<p>{display(date)}</p>
				<p>
					<a href={website}>
						{firstName} {lastName}
					</a>
				</p>
				<p>{body}</p>
			</div>
		);
	}
}
Article.propTypes = {
	article: PropTypes.shape({
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired
	})
};
const mapStateToProps = (state, props) => {
	return {
		author: state.lookUpAuthor(props.article.authorId)
	};
};
export default storeProvider(mapStateToProps)(Article);
