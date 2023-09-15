import useImage from '../stores/imgStore';

function ShowModal () {
	const {img, hideModal} = useImage();

	return (
		<div className="show-modal">
			<h4 className="modal-title">{img.title} ({img.releaseYear})</h4>
			<p className="modal-description">{img.description}</p>
			<img
				src={img.images['Poster Art'].url}
				alt={`Poster for ${img.title}`}
				className="modal-img"
			/>
			<button className="modal-close" onClick={hideModal}>Close</button>
		</div>
	);
}

export default ShowModal;