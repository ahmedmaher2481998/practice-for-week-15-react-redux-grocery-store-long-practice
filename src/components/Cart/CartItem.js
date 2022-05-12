import { useState, useEffect } from "react";
import { incrementItem, decrementItem, amountItem } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";
//component start
function CartItem({ item }) {
	// const [count, setCount] = useState(item.count);
	const count = useSelector((s) => s.cart.cart[item.id].count);
	//
	const cart = useSelector((state) => state.cart.cart);
	const produce = useSelector((state) => state.produce);
	const cartItems = Object.values(cart).map((item) => {
		return {
			...item,
			...produce[item.id],
		};
	});
	//
	console.log("log", count);
	const dispatch = useDispatch();
	useEffect(() => {}, [item.count]);

	return !cartItems.length ? (
		""
	) : (
		<li className='cart-item'>
			<div className='cart-item-header'>{item.name}</div>
			<div className='cart-item-menu'>
				<input
					type='number'
					onChange={(e) => {
						// setCount(+e.target.value);
						if (isNaN(e.target.value)) {
							dispatch(amountItem(item.id, count));
						} else {
							dispatch(amountItem(item.id, +e.target.value));
						}
					}}
					value={count}
				/>
				<button
					onClick={() => {
						dispatch(incrementItem(item.id));
					}}
					className='cart-item-button'
				>
					+
				</button>
				<button
					onClick={() => {
						dispatch(decrementItem(item.id));
					}}
					className='cart-item-button'
				>
					-
				</button>
				<button
					onClick={() => {
						dispatch(amountItem(item.id, 0));
					}}
					className='cart-item-button'
				>
					Remove
				</button>
			</div>
		</li>
	);
}

export default CartItem;
