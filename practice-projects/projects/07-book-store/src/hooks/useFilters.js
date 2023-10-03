import { useState } from 'react';
import { getFilteredBooks } from '../services/books';
import useBooks from './useBooks';

const useFilters = (initialFilters = {}, applyToReadingList = false) => {
	const { availableBooks, readingBooks } = useBooks();
	const [filters, setFilters] = useState(initialFilters);

	const filteredAvailableBooks = getFilteredBooks(availableBooks, filters);

	return {
		filteredAvailableBooks,
		filteredReadingBooks: applyToReadingList ? getFilteredBooks(readingBooks, filters) : readingBooks,
		filters,
		setFilters
	};
};

export default useFilters;