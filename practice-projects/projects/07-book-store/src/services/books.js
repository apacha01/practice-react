import books from '../mocks/books.json';

const getAllBooks = async () => {
	return books.library.map(b => {
		return ({
			isbn: b.book.ISBN,
			author: b.book.author,
			cover: b.book.cover,
			genre: b.book.genre,
			pages: b.book.pages,
			synopsis: b.book.synopsis,
			title: b.book.title,
			year: b.book.year,
		});
	});
};


export { getAllBooks };