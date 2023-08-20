const API_KEY = 'f5e92244';
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

async function searchMovies(input) {
	if (input === '') return null;

	const search = `&s=${input}`;
	const moviesRes = await fetch(API_URL + search);
	const moviesJson = await moviesRes.json();

	if (!moviesJson.Response)
		return null;

	let movies = moviesJson.Search.map((m) => {
		return {
			id: m.imdbID,
			title: m.Title,
			imgUrl: m.Poster,
			year: m.Year
		}
	});
	return movies;
}

export default searchMovies;