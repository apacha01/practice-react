import Movie from "./Movie";

function ListOfMovies({ movies }) {
	return (
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
	)
}

export default ListOfMovies;