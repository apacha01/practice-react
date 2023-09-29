import { useEffect, useState } from 'react';
import { getAllBooks } from './services/books';
import Book from './components/Book';

function App() {
	const [availableBooks, setAvailableBooks] = useState(null);

	useEffect(() => {
		const renderBooks = async () => {
			const books = await getAllBooks();
			return books.map(e => {
				return (
					<Book key={e.isbn} {...e} />
				);
			}
			);
		};

		renderBooks().then(res => setAvailableBooks(res));
	}, []);

	return (
		<>
			<h1>Reading List</h1>
			<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
				{availableBooks}
			</main>
		</>
	);
}

export default App;
