import Square from "./Square";

function Board({ board, updateBoard }) {
	return (
		<section className="board">
			{board.map((e, i) => {
				return <Square
					key = {i}
					index = {i}
					updateBoard = {updateBoard}
				>
					{e === null ? '' : e}
				</Square>
			})}
		</section>
	)
}

export default Board;