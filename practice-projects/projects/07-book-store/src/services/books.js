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

		if (filters.isbn !== undefined) {
			if (!b.isbn.localeCompare(filters.isbn)) return false;
		}
		if (filters.author !== undefined) {
			if (!b.author?.name.localeCompare(filters.author.name)) return false;
		}
		if (filters.genre !== undefined) {
			if (b.genre !== filters.genre && filters.genre !== DEFAULT_GENRE_TEXT) return false;
		}
		if (filters.pages !== undefined) {
			if (!(b.pages >= filters.pages.min && b.pages <= filters.pages.max)) return false;
		}
		if (filters.title !== undefined) {
			if (!b.title.contains(filters.title)) return false;
		}
		if (filters.year !== undefined) {
			if (!(b.year >= filters.year.min && b.year <= filters.year.max)) return false;
		}

		return true;
	});
};

export { getAllBooks, getFilteredBooks };