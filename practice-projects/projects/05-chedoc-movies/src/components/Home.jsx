import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';

function Home() {
	const [subtitle, setSubtitle] = useState('Titles');
	const navigation = useNavigation();

	return (
		<>
			<Header subtitle={subtitle}/>
			<div>
				{navigation.state === 'loading' ? 'Loading...' : ''}
				<Outlet context={setSubtitle}/>
			</div>
			<Footer/>
		</>
	);
}

export default Home;