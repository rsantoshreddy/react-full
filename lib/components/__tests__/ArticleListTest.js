import React from "react";
import Articles from "../molecules/Articles";
// import ReactTestRenderer from "react-test-renderer";
import { shallow } from "enzyme";
import Article from "../atoms/Article";

describe("Articles", () => {
	const data = {
		articles: {
			a: { id: "a" },
			b: { id: "b" }
		}
		// store: {
		// 	lookUpAuthor: jest.fn(() => ({}))
		// }
	};

	//this is to fix the error when Article component is rendered with Articles component with jest
	//Article.propTypes = {};

	it("renders correctly", () => {
		// const tree = ReactTestRenderer.create(<Articles {...data} />).toJSON();
		// expect(tree.children.length).toEqual(2);
		// expect(tree).toMatchSnapshot();
		const wrapper = shallow(<Articles {...data} />);
		expect(wrapper.find("ArticleContainer").length).toBe(2);
		expect(wrapper).toMatchSnapshot();
	});
});
