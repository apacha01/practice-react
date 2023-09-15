import { useEffect } from 'react';
import { getFilteredSeries } from '../services/shows';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import ShowCard from './ShowCard';
import ShowModal from './ShowModal';
import useImage from '../stores/imgStore';

const loader = async () => {
	const series = await getFilteredSeries(20);
	return { series };
};

function Series () {
	const {series} = useLoaderData();
	const setSubtitle = useOutletContext();
	const {showAllInfo, setImg} = useImage();

	useEffect(() => setSubtitle('Series'), [setSubtitle]);

	return (
		<>
			<main className="series-container">
				{
					series.map((s,i) => {
						const changeModalInfo = () => {
							setImg(s);
						};
						return (
							<ShowCard
								key={i}
								title={s.title}
								img={s.images['Poster Art'].url}
								changeInfo={changeModalInfo}
							/>
						);
					})
				}
			</main>
			{showAllInfo ? <ShowModal /> : null}
		</>
	);
}

export default Series;
export {loader};