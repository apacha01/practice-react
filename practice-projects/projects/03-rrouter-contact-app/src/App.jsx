import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import ErrorPage from "./pages/error-page";
import Contact from "./pages/contact";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "contacts/:contactId",
				element: <Contact />,
			},
		],
	},
]);

function App() {

	return (
		<RouterProvider router={router} />
		// <BrowserRouter>
		// 	<Routes>
		// 		<Route path="/" element={<Root></Root>} />
		// 		<Route path="/contacts/:contactId" element={<Contact />} />
		// 		<Route path="*" element={<ErrorPage />} />
		// 	</Routes>
		// </BrowserRouter>
	)
}

export default App
