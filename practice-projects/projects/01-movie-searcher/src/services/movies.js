import env from '../../envars.json'
const API_KEY = env.API_KEY;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

async function searchMovies(input) {
	console.log(env);
	if (input === '') return null;

	const search = `&type=movie&s=${input}`;
	const moviesRes = await fetch(API_URL + search);
	const moviesJson = await moviesRes.json();

	if (moviesJson.Error)
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