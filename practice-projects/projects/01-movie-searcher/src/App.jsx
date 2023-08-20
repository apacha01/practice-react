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

	return (
		<main className="searcher">
			<h1 className="searcher-title">Movie Searcher</h1>
			<form className="searcher-form" onSubmit={handleSubmit}>
				<input onChange={e => setSearch(e.target.value)} className="form-input" type="text" placeholder="Batman, Superman, Spiderman..." />
				<button className="form-btn">Search</button>
			</form>
			<section className='movies'>
				<ListOfMovies movies={movies}></ListOfMovies>
			</section>
		</main>
	)
}

export default App
