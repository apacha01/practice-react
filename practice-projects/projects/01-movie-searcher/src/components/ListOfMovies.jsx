import Movie from "./Movie";

function ListOfMovies({ movies }) {
	return (
		<ul className='movies-list'>
			{movies
				? movies.map(
					m => {
						return (<li className='movie' key={m.id}>
							<Movie
								title={m.title}
								year={m.year}
								imgUrl={m.imgUrl}
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