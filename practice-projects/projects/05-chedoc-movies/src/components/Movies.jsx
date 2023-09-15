import { useEffect } from 'react';
import { getFilteredMovies } from '../services/shows';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import ShowCard from './ShowCard';
import ShowModal from './ShowModal';
import useImage from '../stores/imgStore';

const loader = async () => {
	const movies = await getFilteredMovies(20);
	return { movies };
};

function Movies () {
	const {movies} = useLoaderData();
	const setSubtitle = useOutletContext();
	const {showAllInfo, setImg} = useImage();

	useEffect(() => setSubtitle('Movies'), [setSubtitle]);

	return (
		<>
			<main className="movies-container">
				{
					movies.map((m,i) => {
						const changeModalInfo = () => {
							setImg(m);
						};
						return (
							<ShowCard
								key={i}
								title={m.title}
								img={m.images['Poster Art'].url}
								changeInfo={changeModalInfo}
							/>
						);
					})
				}
				{showAllInfo ? <ShowModal /> : null}
			</main>
		</>
	);
}

export default Movies;
export {loader};