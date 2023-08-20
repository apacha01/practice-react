function Movie({ title, year, imgUrl }) {
	return (
		<>
			<h3 className="movie-title">{title}</h3>
			<img className="movie-img" src={imgUrl} alt={`Image for the search: ${title}`} />
			<p className="movie-year">{year}</p>
		</>
	);
}

export default Movie;