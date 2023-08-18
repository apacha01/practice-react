import { useState } from "react";
import Square from "./Square";
import { WINNERS } from "../constants";

function Board({ turn, toggleTurn, updateWinner }) {
	const [board, setBoard] = useState(Array(9).fill(null));

	const updateBoard = (index) => {
		// Already used
		if (board[index]) return;

		// Update board
		let newBoard = [...board];
		newBoard[index] = turn;
		setBoard(newBoard);
		
		// Change Turn
		toggleTurn();

		// Check for a winner
		if (checkForWinner(newBoard))
			updateWinner(turn);
	}

	const checkForWinner = (board) => {
		for (const w of WINNERS){
			if (board[w[0]] === turn
				&& board[w[0]] === board[w[1]]
				&& board[w[0]] === board[w[2]])
				return true;
		}
		return false;
	}

	const resetGame = () => {
		setBoard(Array(9).fill(null));
		updateWinner(null);
	}

	return (
		<>
			<section className="board">
				{board.map((e, i) => {
					return <Square
						key={i}
						index={i}
						updateBoard={updateBoard}
					>
						{e === null ? '' : e}
					</Square>
				})}
			</section>
			<button className="reset-btn" onClick={resetGame}>Reset</button>
		</>
	)
}

export default Board;