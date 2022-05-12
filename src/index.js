import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import configStore from "./store";
import { Provider } from "react-redux";
//store imports
import { populateProduce } from "./store/produce";
import { addTocart } from "./store/cart";
const store = configStore();
console.log("App Start");
if (process.env.NODE_ENV !== "production") {
	window.store = store;
	window.populateProduce = populateProduce;
	window.addTocart = addTocart;
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
