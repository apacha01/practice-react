import useCounterStore from "./stores/counterStore";

function App() {
	let img = "https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg";
	const count = useCounterStore(state => state.count);
	const increment = useCounterStore(state => state.inc);
	const decrement = useCounterStore(state => state.dec);

	return (
		<main className="counter">
			<h1>Zustand Counter</h1>
			<img className="zustand-img" src={img} alt="Zustand Bear" />
			<div className="counter-info">
				<button className="add-btn" onClick={increment} >+</button>
				<p className="count">{count}</p>
				<button className="sub-btn" onClick={decrement} >-</button>
			</div>
		</main>
	)
}

export default App
