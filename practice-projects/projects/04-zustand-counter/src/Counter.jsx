import useCounterStore from "./stores/counterStore";

function Counter() {
	const count = useCounterStore(state => state.count);
	const increment = useCounterStore(state => state.inc);
	const decrement = useCounterStore(state => state.dec);

	return (
		<div className="counter-info">
			<button className="add-btn" onClick={increment} >+</button>
			<p className="count">{count}</p>
			<button className="sub-btn" onClick={decrement} >-</button>
		</div>
	)
}

export default Counter;