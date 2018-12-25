import React from "react";
import ReactDOM from "react-dom";
import App from "../components/organisms/App";
import StoreApi from "../store/StoreApi";
const store = new StoreApi(window.initialState);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
