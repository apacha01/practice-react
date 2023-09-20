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
				<Route path="/cryptopacha/" element={<Home />} />
				<Route path="/cryptopacha/coin" element={<Coin />}>
					<Route path=":id" element={<Coin />}></Route>
				</Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
