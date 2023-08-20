const API_KEY = 'f5e92244';
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

async function searchMovies(input) {
	if (input === '') return null;

	const search = `&s=${input}`;
	const movies = await fetch(API_URL + search);
	const moviesJson = await movies.json();

	if (!moviesJson.Response)
		return null;

	return moviesJson.Search;
}

export default searchMovies;