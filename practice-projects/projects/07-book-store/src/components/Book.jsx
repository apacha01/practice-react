function Book({ title, author, cover, isbn, genre, pages, synopsis, year, onClick }) {
	return (
		<div onClick={onClick} className="flex flex-col my-6 max-w-xs p-2 gap-2 border-black">
			<div className="flex justify-between">
				<h2 className="font-bold">{title}</h2>
			</div>
			<img className="max-w-full" src={cover} alt={'Cover of the book:' + title} />
			<strong>{author.name}</strong>
			<span className="">{year}</span>
		</div>
	);
}

export default Book;