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
				setReadingBooks([]);
			};

			initializeAvailableBooks();
		}
		else {
			setAvailableBooks(JSON.parse(storedAvailable));
			setReadingBooks(JSON.parse(storedReading));
		}
	}, []);

	const updateBookPriority = (priority, isbn = '') => {
		const index = readingBooks.findIndex(b => !isbn.localeCompare(b.isbn));
		if (index != -1) {
			const newList = [...readingBooks];
			newList[index].priority = priority;
			setReadingBooks(newList);
		}
	};

	return { availableBooks, readingBooks, addToReadingList: addBookToReadingList, removeFromReadingList: removeBookFromReadingList, updateBookPriority };
};

export default useBooks;