import { useState } from 'react';
import useBooks from './hooks/useBooks';
import useFilters from './hooks/useFilters';
import BookList from './components/BookList';
import Filters from './components/Filters';
import BooksIcon from './components/BooksIcon';
import ScratchedBooksIcon from './components/ScratchedBooksIcon';
import { Toaster, toast } from 'sonner';
import { sortBooksByPriority } from './services/books';

function App() {
	const { addToReadingList, removeFromReadingList } = useBooks();
	const [toggleReadingList, setToggleReadingList] = useState(false);
	const { filteredAvailableBooks, filteredReadingBooks, filters, setFilters } = useFilters({ genre: 'All', pages: { min: 0, max: 1200 } }, false);

	const handleAddingBook = (book) => {
		addToReadingList(book);
		toast.success(`'${book.title}' added to reading list`);
	};

	const handleRemovingBook = (book) => {
		removeFromReadingList(book);
		toast.error(`'${book.title}' removed to reading list`);
	};

	return (
		<div className='relative min-h-screen px-8'>
			<header className="flex justify-between py-6">
				<h1 className='text-center font-bold text-6xl'>Reading List</h1>
				<button className={`z-50 ${toggleReadingList ? 'text-white' : ''}`} onClick={() => setToggleReadingList(t => !t)}>
					{toggleReadingList ? <ScratchedBooksIcon /> : <BooksIcon />}
				</button>
			</header>
			<div className='flex flex-col md:flex-row justify-between items-center'>
				<Filters setFilters={setFilters} filters={filters} />
				<strong role='available-books-counter' className='mb-8 md:ml-8 md:mb-0 rounded-full p-3 bg-blue-400 text-white aspect-square'>{filteredAvailableBooks.length}</strong>
			</div>
			<main role='available-list' className="m-auto grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
				<BookList books={filteredAvailableBooks} onBookClick={handleAddingBook} />
			</main>
			<aside role='reading-list' className={`flex flex-col gap-4 absolute z-40 top-0 right-0 w-screen md:w-96 px-12 pt-32 transform duration-500 bg-black h-full overflow-y-scroll ${toggleReadingList ? '' : 'hidden'}`}>
				<strong role='reading-books-counter' className='rounded-full p-2 bg-red-400 text-white aspect-square ml-auto text-center'>{filteredReadingBooks.length}</strong>
				<BookList books={sortBooksByPriority(filteredReadingBooks)} onBookClick={handleRemovingBook} isReadingList />
			</aside>
			<Toaster position='top-center' richColors duration={2000} />
		</div>
	);
}

export default App;
