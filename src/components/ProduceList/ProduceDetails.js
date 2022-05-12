import { useDispatch } from "react-redux";
import { addTocart } from "../../store/cart";
import { likeProduce } from "../../store/produce";
function ProduceDetails({ produce }) {
	const cartItem = {};
	let dispatch = useDispatch();
	return (
		<li className='produce-details'>
			<span>{produce.name}</span>
			<span>
				<button
					className={
						"like-button" + (produce.liked ? " selected" : "")
					}
					onClick={() => {
						dispatch(likeProduce(produce.id));
					}}
				>
					<i className={"fas fa-heart"} />
				</button>
				<button
					onClick={() => dispatch(addTocart(+produce.id))}
					className={"plus-button" + (cartItem ? " selected" : "")}
				>
					<i className='fas fa-plus' />
				</button>
			</span>
		</li>
	);
}

export default ProduceDetails;
