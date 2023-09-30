import { useEffect } from 'react';
import useBookLists from '../contexts/bookLists';
import { getAllBooks } from '../services/books';

const useBooks = () => {
	const availableBooks = useBookLists(s => s.availableList);
	const readingBooks = useBookLists(s => s.readingList);
	const setAvailableBooks = useBookLists(s => s.setAvailableList);
	const setReadingBooks = useBookLists(s => s.setReadingList);
	const addBookToReadingList = useBookLists(s => s.addBookToReadingList);
	const removeBookFromReadingList = useBookLists(s => s.removeBookFromReadingList);

	useEffect(() => {
		let storedAvailable = localStorage.getItem('available-list');
		let storedReading = localStorage.getItem('reading-list');

		if (storedAvailable === null || storedAvailable?.length === 0) {
			const initializeAvailableBooks = async () => {
				const books = await getAllBooks();
				setAvailableBooks(books);
			};

			initializeAvailableBooks();
		}
		else {
			setAvailableBooks(JSON.parse(storedAvailable));
			setReadingBooks(JSON.parse(storedReading));
		}
	}, []);

	return { availableBooks, readingBooks, addToReadingList: addBookToReadingList, removeFromReadingList: removeBookFromReadingList };
};

export default useBooks;