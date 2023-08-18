import { useState } from "react";
import { TURN } from "../constants";
import Board from "./Board"


function App() {
	const [turn, setTurn] = useState(TURN.X);
	const [winner, setWinner] = useState(null);

	const toggleTurn = () => {
		const newTurn = turn === TURN.X ? TURN.O : TURN.X;
		setTurn(newTurn);
	}

	const updateWinner = (newWinner) => {
		if (newWinner === TURN.X || newWinner === TURN.O || newWinner === null)
			setWinner(newWinner)
		else console.log('Error setting winner.');
	}

	return (
		<main className="main">
			<h1>Tic-Tac-Toe Game</h1>
			<Board
				toggleTurn = { toggleTurn }
				turn = { turn }
				updateWinner = { updateWinner }
			></Board>
			<div>winner:{winner}</div>
		</main>
	)
}

export default App
