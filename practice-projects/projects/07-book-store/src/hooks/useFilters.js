import { useState } from 'react';
import { getFilteredBooks } from '../services/books';
import useBooks from './useBooks';
import { DEFAULT_GENRE_TEXT } from '../constants/filters';

const useFilters = (initialFilters = {}, applyToReadingList = false) => {
	const { availableBooks, readingBooks } = useBooks();
	const [filters, setFilters] = useState(initialFilters);

	const filteredAvailableBooks = getFilteredBooks(availableBooks, filters);

	return {
		filteredAvailableBooks,
		filteredReadingBooks: applyToReadingList ? getFilteredBooks(readingBooks, filters) : readingBooks,
		possibleGenres: Array.from(new Set(availableBooks.map(b => b.genre)).add(DEFAULT_GENRE_TEXT)).sort(),
		setFilters
	};
};

export default useFilters;