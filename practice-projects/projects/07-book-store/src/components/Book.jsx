function Book({ title, author, cover, year, onClick, readingList = false }) {
	return (
		<div className="flex flex-col bg-white border-[1px] border-gray-400 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 mb-5 py-2">
			<div className="relative">
				<img className="max-w-90 w-80 m-auto rounded-lg aspect-[9/14] object-contain" src={cover} />
			</div>
			<div className="p-4">
				<h1 className="mt-4 text-3xl font-bold cursor-pointer">{title}</h1>
				<p className="mt-2 font-sans text-gray-700">{author.name} - {year}</p>
			</div>
			<button onClick={onClick} className={`m-auto text-lg text-white py-3 px-6 rounded-full cursor-pointer hover:scale-105 duration-3007 ${readingList ? 'bg-red-600' : 'bg-blue-600'}`}>
				{readingList ? 'Remove from list' : 'Add to list'}
			</button>
		</div>
	);
}

export default Book;