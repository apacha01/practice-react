import NavCard from './NavCard';
import PLACEHOLDER from '../assets/placeholder.png';

function NavCards () {
	return (
		<main className="sections-container">
			<NavCard title="Series" subtitle="Popular Series" img={PLACEHOLDER} to='/series'/>
			<NavCard title="Movies" subtitle="Popular Movies" img={PLACEHOLDER} to='/movies'/>
		</main>
	);
}

export default NavCards;