import React from "react";
import axios from "axios";
import { config } from "../config";
import App from "../components/organisms/App";
import ReactDOMServer from "react-dom/server";
import StoreApi from "../store/StoreApi";

const serveContent = async () => {
	const { host, port } = config || {};
	const res = await axios.get(`http://${host}:${port}/data`);
	const store = new StoreApi(res.data);

	return {
		initialMarkUp: ReactDOMServer.renderToString(<App store={store} />),
		initialState: res.data
	};
};
export default serveContent;
