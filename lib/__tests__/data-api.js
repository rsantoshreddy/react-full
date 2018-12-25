import StoreApi from "../store/StoreApi";
import data from "../store/testData";

const store = new StoreApi(data);

describe("Data API", () => {
	it("Exposes articles as object", () => {
		const { articles } = store.getState();
		const { id, title } = data.articles[0];
		expect(articles).toHaveProperty(id);
		expect(articles[id].title).toBe(title);
	});
	it("Exposes authors as object", () => {
		const { authors } = store.getState();
		const { id, title } = data.authors[0];
		expect(authors).toHaveProperty(id);
		expect(authors[id].title).toBe(title);
	});
});
