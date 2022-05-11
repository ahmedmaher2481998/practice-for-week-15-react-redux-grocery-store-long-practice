import produce from "../mockData/produce.json";

//actions types
const POPULATE = "produce/POPULATE";
//actions creators
export const populateProduce = () => {
	return {
		type: POPULATE,
		produce,
	};
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
			return newData;
		default:
			return state;
	}
};

export default produceReducer;
