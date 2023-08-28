import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from "./pages/root.jsx";
import ErrorPage from "./pages/error-page.jsx";
import Contact, { loader as contactLoader } from "./pages/contact.jsx";
import EditContact, { action as editAction } from "./pages/edit.jsx";
import { action as destroyAction } from "./pages/destroy.jsx";

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
			{
				path: "contacts/:contactId/edit",
				element: <EditContact />,
				loader: contactLoader,
				action: editAction
			},
			{
				path: "contacts/:contactId/destroy",
				action: destroyAction,
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
