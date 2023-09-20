import { useParams } from 'react-router-dom';

function Coin () {
	const { id } = useParams();

	return (
		<h1>Coin</h1>
	);
}

export default Coin;