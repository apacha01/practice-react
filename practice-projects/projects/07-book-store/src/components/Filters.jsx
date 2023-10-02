import { useState } from 'react';
import ComboBox from './ComboBox';
import SearchInput from './TextInput';
import useFilters from '../hooks/useFilters';

function Filters({ setFilters }) {
	const [search, setSearch] = useState('');
	const { possibleGenres } = useFilters();


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

	return (
		<section className="flex items-center my-6 gap-4">
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
				options={possibleGenres}
			/>
		</section>
	);
}

export default Filters;