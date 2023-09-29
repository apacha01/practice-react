import { create } from 'zustand';

const useBookLists = create((set) => ({
	availableList: [],
	readingList: [],
	setAvailableList: (list) => set({ availableList: list }),
	setReadingList: (list) => set({ readingList: list }),
	addBookToReadingList: (book) => set(state => {
		let index = state.availableList.findIndex(b => b.isbn === book.isbn);
		let newAvailableList = state.availableList;
		newAvailableList.splice(index, 1);

		return {
			availableList: newAvailableList,
			readingList: [...state.readingList, book]
		};
	}),
	removeBookFromReadingList: (book) => set(state => {
		let index = state.readingList.findIndex(b => b.isbn === book.isbn);
		let newReadingList = state.readingList;
		newReadingList.splice(index, 1);

		return {
			availableList: [...state.availableList, book],
			readingList: newReadingList
		};
	})
}));

export default useBookLists;