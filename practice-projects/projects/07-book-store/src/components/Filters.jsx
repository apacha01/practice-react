import { useState } from 'react';
import ComboBox from './ComboBox';
import SearchInput from './TextInput';
import DoubleSlider from './DoubleSlider';
import useBooks from '../hooks/useBooks';
import { getGenresList } from '../services/books';

function Filters({ filters, setFilters }) {
	const [search, setSearch] = useState('');
	const { availableBooks } = useBooks();

	const filterGenre = (g) => {
		setFilters(f => ({ ...f, genre: g }));
	};

	const handleTyping = (e) => {
		let newSearch = e.target.value;
		let isbn = undefined, author = undefined, title = undefined;

		// cant type space at beggining
		if (newSearch.startsWith(' ')) return;

		// check if isbn
		let isbnSearch = newSearch.match(/\d{3}-\d{10}/g);
		if (isbnSearch != null) isbn = isbnSearch[0];
		// search by title / author
		else if (newSearch.length > 0) author = title = newSearch;

		setFilters(f => ({ ...f, isbn, title, author }));

		setSearch(newSearch);
	};

	const filterPages = (p) => {
		setFilters(f => ({ ...f, pages: { min: p.min, max: p.max } }));
	};

	return (
		<section className="flex items-center my-6 gap-8 w-2/3">
			<SearchInput
				label='Title / Author / ISBN'
				id='title-search'
				placeholder='Harry Potter, Orwell or 978-0618640157 ...'
				value={search}
				onType={handleTyping}
			/>

			<ComboBox
				id='genre-filter'
				label='Genre:'
				onChangeSelection={filterGenre}
				options={getGenresList(availableBooks)}
			/>

			<DoubleSlider
				range={{ min: 0, max: 1200 }}
				values={{ min: filters.pages?.min, max: filters.pages?.max }}
				onChange={filterPages}
			/>
		</section>
	);
}

export default Filters;