function App() {
	let img = "https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg";

	return (
		<main className="counter">
			<h1>Zustand Counter</h1>
			<img className="zustand-img" src={img} alt="Zustand Bear" />
			<div className="counter-info">
				<button className="add-btn">+</button>
				<p className="count">0</p>
				<button className="sub-btn">-</button>
			</div>
		</main>
	)
}

export default App
