import { useState } from "react";
import { TURN } from "../constants";
import Board from "./Board"


function App() {
	const [turn, setTurn] = useState(TURN.X);

	const toggleTurn = () => {
		const newTurn = turn === TURN.X ? TURN.O : TURN.X;
		setTurn(newTurn);
	}

	return (
		<main className="main">
			<h1>Tic-Tac-Toe Game</h1>
			<Board
				toggleTurn={ toggleTurn }
				turn = { turn }
			></Board>
		</main>
	)
}

export default App
