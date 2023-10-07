import { create } from 'zustand';

const useBookLists = create((set) => ({
	availableList: [],
	readingList: [],
	setAvailableList: (list) => {
		localStorage.setItem('available-list', JSON.stringify(list));
		set({ availableList: list });
	},
	setReadingList: (list) => {
		localStorage.setItem('reading-list', JSON.stringify(list));
		set({ readingList: list });
	},
	addBookToReadingList: (book) => set(state => {
		let index = state.availableList.findIndex(b => b.isbn === book.isbn);
		let newAvailableList = state.availableList;
		newAvailableList.splice(index, 1);

		let newReadingList = [...state.readingList];
		newReadingList.push(book);

		localStorage.setItem('available-list', JSON.stringify(newAvailableList));
		localStorage.setItem('reading-list', JSON.stringify(newReadingList));

		return {
			availableList: newAvailableList,
			readingList: newReadingList
		};
	}),
	removeBookFromReadingList: (book) => set(state => {
		let index = state.readingList.findIndex(b => b.isbn === book.isbn);
		let newReadingList = state.readingList;
		newReadingList.splice(index, 1);

		let newAvailableList = [...state.availableList];
		newAvailableList.push(book);

		localStorage.setItem('available-list', JSON.stringify(newAvailableList));
		localStorage.setItem('reading-list', JSON.stringify(newReadingList));

		return {
			availableList: newAvailableList,
			readingList: newReadingList
		};
	})
}));

export default useBookLists;