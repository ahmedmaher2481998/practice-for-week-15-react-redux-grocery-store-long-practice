const CART = "store/addtocart";

export const addtoCart = (id) => {
	return { type: CART, id };
};
export const cartReducer = (state = {}, action) => {
	switch (action.type) {
		case CART:
			const id = action.id;
			let prod = { ...state.produce };
			let added = [...state.produce].find((ele) => ele.id === id);
			let newcart = state.cart
				? { ...state.cart, id: added }
				: { id: added };
			const newState = { prod, newcart };
			console.log(newState);
			return newState;
		default:
			return state;
	}
};
