import About from '../components/About';
import Follow from '../components/Follow';
import Hero from '../components/Hero';
import Market from '../components/Market';

function Home () {
	return (
		<>
			<Hero />
			<Market />
			<About />
			<Follow />
		</>
	);
}

export default Home;