import produce from "../mockData/produce.json";

//actions types
const POPULATE = "produce/POPULATE";
const Like_PRODUCE = "store/produce/like";
//actions creators
export const populateProduce = () => {
	return {
		type: POPULATE,
		produce,
	};
};
export const likeProduce = (id) => {
	return { type: Like_PRODUCE, id };
};
//reducers
const produceReducer = (state = {}, action) => {
	switch (action.type) {
		case POPULATE:
			let newData = {};
			action.produce.forEach((product) => {
				let key = product.id;
				newData[key] = product;
			});
			return { ...newData };
		case Like_PRODUCE:
			let statelike = { ...state };
			let id = action.id;
			let pre = statelike[id].liked;
			statelike[id].liked = !pre;
			return statelike;
		default:
			return state;
	}
};

export default produceReducer;
