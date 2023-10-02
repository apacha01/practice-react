import Book from './Book';

function BookList({ books = [], onBookClick = () => { }, isReadingList = false }) {
	return (
		<>
			{
				books.map(b => {
					return <Book onClick={() => onBookClick(b)} key={b.isbn} {...b} readingList={isReadingList} />;
				})
			}
		</>
	);
}

export default BookList;