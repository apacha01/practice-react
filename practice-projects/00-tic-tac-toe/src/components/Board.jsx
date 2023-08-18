import { useState } from "react";
import Square from "./Square";

function Board({ turn, toggleTurn }) {
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
			<button className="reset-btn">Reset</button>
		</>
	)
}

export default Board;