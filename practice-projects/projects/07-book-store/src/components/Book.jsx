import useBooks from '../hooks/useBooks';
import { getUpdatedPriority } from '../services/priority';

function Book({ isbn, title, author, cover, year, priority, onClick, readingList = false }) {
	const { updateBookPriority } = useBooks();

	const handlePriorityUpdate = (isbn, priority) => {
		const updatedPriority = getUpdatedPriority(priority);
		updateBookPriority(updatedPriority, isbn);
	};

	return (
		<div className="flex flex-col bg-white border-[1px] border-gray-400 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 py-2">
			<div className="relative">
				<img className="w-[95%] m-auto rounded-lg aspect-[9/14] object-contain" src={cover} />
			</div>
			<div className="p-4">
				<h1 className="mt-4 text-3xl font-bold cursor-pointer">{title}</h1>
				<p className="mt-2 font-sans text-gray-700">{author.name} - {year}</p>
			</div>
			<div className="flex w-full justify-evenly items-center">
				<button onClick={onClick} className={`text-lg text-white py-2 px-4 rounded-full cursor-pointer hover:scale-105 duration-300 ${readingList ? 'bg-red-600 text-sm' : 'bg-blue-600'}`}>
					{readingList ? 'Remove from list' : 'Add to list'}
				</button>
				{
					readingList
						? <button
							onClick={() => handlePriorityUpdate(isbn, priority)}
							className={`text-white py-2 px-4 rounded-full hover:scale-105 duration-300 ${priority.color}`}
						>
							{priority.text}
						</button>
						: null
				}
			</div>
		</div >
	);
}

export default Book;