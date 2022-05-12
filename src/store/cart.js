const CART = "store/cart/addto";
const CART_INCREMENT = "store/cart/increment";
const CART_DECREMENT = "store/cart/decrement";
const CART_AMOUNT = "store/cart/amountis";
const CART_CLEAR = "store/cart/clear";
// Actions
export const addTocart = (id) => {
	return { type: CART, id };
};
export const incrementItem = (id) => {
	return { type: CART_INCREMENT, id };
};
export const decrementItem = (id) => {
	return { type: CART_DECREMENT, id };
};
export const amountItem = (id, amount) => {
	return { type: CART_AMOUNT, id, amount };
};
export const clearCart = () => {
	return { type: CART_CLEAR };
};
//reducer
let initstate = { cart: {} };
export const cartReducer = (state = initstate, action) => {
	let id = action.id;
	switch (action.type) {
		//add to cart
		case CART:
			let newCart = { ...state.cart };
			newCart[id] = { id, count: 1 };
			var newStateadd = { ...state, cart: newCart };
			return newStateadd;
		// +
		case CART_INCREMENT:
			var newStateinc = { ...state };
			newStateinc.cart[id].count++;
			return newStateinc;
		//-
		case CART_DECREMENT:
			var newStatedec = { ...state };
			newStatedec.cart[id].count--;
			if (+newStatedec.cart[id].count <= 0) delete newStatedec.cart[id];
			return newStatedec;
		// =
		case CART_AMOUNT:
			var newStateAmount = { ...state };
			newStateAmount.cart[id].count = action.amount;
			if (+newStateAmount.cart[id].count <= 0) {
				delete newStateAmount.cart[id];
			}
			return newStateAmount;
		case CART_CLEAR:
			let cleanCart = { ...state, cart: {} };
			return cleanCart;
		//default state
		default:
			return state;
	}
};
export default cartReducer;
