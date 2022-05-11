import {
	Middleware,
	createStore,
	combineReducers,
	compose,
	applyMiddleware,
	bindActionCreators,
} from "redux";
import produceReducer from "./produce";
//TODO Rootreducer

const Rootreducer = combineReducers({
	produce: produceReducer,
});

let enhancer;
if (process.env.NODE_ENV !== "production") {
	const logger = require("redux-logger").default;
	const composeEnhancer =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnhancer(applyMiddleware(logger));
}
// TODO config store funication
const configStore = (preloadedState) => {
	return createStore(Rootreducer, preloadedState, enhancer);
};

export default configStore;
