import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Coin from './pages/Coin';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path=':coinId' element={<Coin />}/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
