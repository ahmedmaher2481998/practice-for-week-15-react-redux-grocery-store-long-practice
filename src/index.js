import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import configStore from "./store";
import { populateProduce } from "./store/produce";
import { Provider } from "react-redux";
const store = configStore();
console.log("App Start");
if (process.env.NODE_ENV !== "production") {
	window.store = store;
	window.populateProduce = populateProduce;
}
function Root() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>,
	document.getElementById("root")
);
