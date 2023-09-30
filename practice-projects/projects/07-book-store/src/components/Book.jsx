function Book({ title, author, cover, year, onClick, reading = false }) {
	return (
		<div className="bg-white border-[1px] border-gray-400 rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 mb-5">
			<div className="p-4">
				<h1 className="mt-4 text-3xl font-bold hover:underline cursor-pointer">{title}</h1>
				<p className="mt-2 font-sans text-gray-700">{author.name} - {year}</p>
			</div>
			<div className="relative">
				<img className="max-w-90 w-80 m-auto" src={cover} />
				{
					reading
						? <button onClick={onClick} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-lg bg-red-600 text-white py-3 px-6 rounded-full cursor-pointer hover:scale-105 duration-3007">
							Remove from list
						</button>
						: <button onClick={onClick} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-lg bg-blue-600 text-white py-3 px-6 rounded-full cursor-pointer hover:scale-105 duration-300">
							Add to list
						</button>
				}
			</div>
		</div>
	);
}

export default Book;