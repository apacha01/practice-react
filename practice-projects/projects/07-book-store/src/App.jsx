import { useEffect, useState } from 'react';
import './app.css';
import { getAllBooks } from './services/books';

function App() {
	const [availableBooks, setAvailableBooks] = useState(null);

	useEffect(() => {
		const renderBooks = async () => {
			const books = await getAllBooks();
			return books.map(e => {
				return (
					<div key={e.isbn} className="book">
						{e.title} {e.year}
						<img src={e.cover} alt={'Cover of the book:' + e.title} />
						{e.author.name}
					</div>
				);
			}
			);
		};

		renderBooks().then(res => setAvailableBooks(res));
	}, []);

	return (
		<>
			<h1>Reading List</h1>
			<main className="available-books">
				{
					availableBooks
				}
			</main>
		</>
	);
}

export default App;
