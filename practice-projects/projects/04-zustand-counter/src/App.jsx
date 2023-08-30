import Counter from "./Counter";

function App() {
	let img = "https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg";

	return (
		<main className="counter">
			<h1>Zustand Counter</h1>
			<img className="zustand-img" src={img} alt="Zustand Bear" />
			<Counter></Counter>
		</main>
	)
}

export default App
