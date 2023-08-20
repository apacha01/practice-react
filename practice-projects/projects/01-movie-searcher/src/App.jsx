import { useState } from 'react'
import searchMovies from './services/movies';
import Movie from './components/Movie';
import './assets/app.css'

function App() {
	const [search, setSearch] = useState('');
	const [movies, setMovies] = useState(null);

	const handleSubmit = async () => {
		const movies = await searchMovies(search);
		setMovies(movies);
	}

	return (
		<main className="searcher">
			<h1 className="searcher-title">Movie Searcher</h1>
			<form action='#' className="searcher-form" onSubmit={handleSubmit}>
				<input onChange={e => setSearch(e.target.value)} className="form-input" type="text" placeholder="Batman, Superman, Spiderman..." />
				<button className="form-btn">Search</button>
			</form>
			<section className='movies'>
				<ul className='movies-list'>
					{movies
						? movies.map(
							m => {
								return (<li className='movie' key={m.imdbID}>
									<Movie
										title={m.Title}
										year={m.Year}
										imgUrl={m.Poster}
									></Movie>
								</li>)
							}
						)
						: "No movies"
					}
				</ul>
			</section>
		</main>
	)
}

export default App
