import data from '../data/sample.json';

const getFilteredSeries = async (limit) => {
	return data.entries
		.filter(s => s.programType === 'series')
		.filter(s => s.releaseYear >= 2010)
		.slice(0, limit);
};

const getFilteredMovies = async (limit) => {
	return data.entries
		.filter(s => s.programType === 'movie')
		.filter(s => s.releaseYear >= 2010)
		.slice(0, limit);
};

export { getFilteredMovies, getFilteredSeries };