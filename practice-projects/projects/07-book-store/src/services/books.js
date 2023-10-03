import books from '../mocks/books.json';
import { DEFAULT_GENRE_TEXT } from '../constants/filters';

const getAllBooks = async () => {
	return books.library.map(b => ({
		isbn: b.book.ISBN,
		author: {
			name: b.book.author.name,
			otherBooks: b.book.author.otherBooks
		},
		cover: b.book.cover,
		genre: b.book.genre,
		pages: b.book.pages,
		synopsis: b.book.synopsis,
		title: b.book.title,
		year: b.book.year,
	})
	);
};

const getFilteredBooks = (books, filters = {}) => {
	return books.filter(b => {

		if (filters.isbn?.localeCompare(b.isbn)) return false;
		if ((filters.title !== undefined && !b.title.toLowerCase().includes(filters.title.toLowerCase()))
			&& (filters.author !== undefined && !b.author.name.toLowerCase().includes(filters.author.toLowerCase()))
		)
			return false;
		if (filters.genre?.localeCompare(b.genre) && filters.genre?.localeCompare(DEFAULT_GENRE_TEXT)) return false;
		if (filters.pages !== undefined && !(b.pages >= filters.pages.min && b.pages <= filters.pages.max)) return false;
		if (filters.year !== undefined && !(b.year >= filters.year.min && b.year <= filters.year.max)) return false;

		return true;
	});
};

const getGenresList = (books) => {
	return Array.from(new Set(books.map(b => b.genre)).add(DEFAULT_GENRE_TEXT)).sort();
};

export { getAllBooks, getFilteredBooks, getGenresList };