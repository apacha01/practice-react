import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from "./pages/root.jsx";
import ErrorPage from "./pages/error-page.jsx";
import Contact, { loader as contactLoader } from "./pages/contact.jsx";

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
				loader: contactLoader
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
