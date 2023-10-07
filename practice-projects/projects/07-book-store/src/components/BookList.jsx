import Book from './Book';

function BookList({ books = [], onBookClick = () => { }, isReadingList = false }) {

	return (
		<>
			{
				books.map(b => {
					return <Book
						{...b}
						key={b.isbn}
						readingList={isReadingList}
						onClick={() => onBookClick(b)}
					/>;
				})
			}
		</>
	);
}

export default BookList;