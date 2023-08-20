import { useRef, useState } from 'react'
import searchMovies from './services/movies';
import ListOfMovies from './components/ListOfMovies';
import batman from './examples/batman.json'
import './assets/app.css'

function App() {
	const [search, setSearch] = useState('');
	const [movies, setMovies] = useState(null);
	const prevSearch = useRef('');

	const handleSubmit = async () => {
		if (prevSearch.current === search) return;

		const movies = await searchMovies(search);
		prevSearch.current = search;
		setMovies(movies);
		// setMovies(batman.Search);
	}

	const handleChange = (event) => {
		let newSearch = event.target.value;

		// Avoid trailing spaces
		if (newSearch.startsWith(' ')) return;
		if (newSearch.endsWith(' ')) return;

		// No numbers
		if (newSearch.match(/\*\d\*/)) return;

		setSearch(newSearch);
	}

	console.log('render');

	return (
		<main className="searcher">
			<h1 className="searcher-title">Movie Searcher</h1>
			<form className="searcher-form" onSubmit={handleSubmit}>
				<input onChange={handleChange} value={search} className="form-input" type="text" placeholder="Batman, Superman, Spiderman..." />
				<button className="form-btn">Search</button>
			</form>
			<section className='movies'>
				<ListOfMovies movies={movies}></ListOfMovies>
			</section>
		</main>
	)
}

export default App
