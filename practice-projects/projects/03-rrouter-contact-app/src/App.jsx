import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from "./pages/root";
import ErrorPage from "./pages/error-page";
import Contact from "./pages/contact";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		loader: rootLoader,
		action: rootAction,
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
	)
}

export default App
