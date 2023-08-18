import { useState } from "react";
import Board from "./Board";
import WinnerModal from "./WinnerModal";
import { TURN, WINNERS } from "../constants";

function TicTacToe() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [turn, setTurn] = useState(TURN.X);
	const [winner, setWinner] = useState(null);

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

	const toggleTurn = () => {
		const newTurn = turn === TURN.X ? TURN.O : TURN.X;
		setTurn(newTurn);
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
		setTurn(TURN.X);
		updateWinner(null);
	}

	const updateWinner = (newWinner) => {
		if (newWinner === TURN.X || newWinner === TURN.O || newWinner === null)
			setWinner(newWinner)
		else console.log('Error setting winner.');
	}

	return (
		<>
			<Board
				board = {board}
				updateBoard = {updateBoard}
			></Board>
			<button className="reset-btn" onClick={resetGame}>Reset</button>
			<WinnerModal
				winner = {winner}
				resetGame = {resetGame}
			></WinnerModal>
		</>
	)
}

export default TicTacToe;