import useImage from '../stores/imgStore';

function ShowCard ({ title, img, changeInfo }) {
	const {showModal} = useImage();

	const handleClick = () => {
		changeInfo();
		showModal();
	};

	return (
		<div className="show-card" onClick={handleClick}>
			<img src={`${img}`} alt={`Poster for ${title}`} className="img" />
			<p className="show-title">{title}</p>
		</div>
	);
}

export default ShowCard;