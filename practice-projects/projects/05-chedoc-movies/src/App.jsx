import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Series, {loader as seriesLoader} from './components/Series';
import ErrorPage from './components/ErrorPage';
import NavCards from './components/NavCards';
import Movies, {loader as moviesLoader} from './components/Movies';

function App() {

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
			errorElement: <ErrorPage />,
			children: [
				{
					errorElement: <ErrorPage />,
					children: [
						{ index: true, element: <NavCards /> },
						{
							path: '/series',
							element: <Series />,
							loader: seriesLoader
						},
						{
							path: '/movies',
							element: <Movies />,
							loader: moviesLoader
						},
						{
							path: '/*',
							element: <ErrorPage />,
						}
					]
				}
			]
		},
	]);

	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
