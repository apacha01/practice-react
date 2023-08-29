import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction, action } from "./pages/root.jsx";
import ErrorPage from "./pages/error-page.jsx";
import Contact, { loader as contactLoader, action as contactAction } from "./pages/contact.jsx";
import EditContact, { action as editAction } from "./pages/edit.jsx";
import { action as destroyAction } from "./pages/destroy.jsx";
import Index from "./pages/index.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		loader: rootLoader,
		action: rootAction,
		children: [
			// 'index: true' tells the router to match and render this route 
			// when the user is at the parent route's exact path ('/')
			{ index: true, element: <Index /> },
			{
				path: "contacts/:contactId",
				element: <Contact />,
				loader: contactLoader,
				action: contactAction
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
				errorElement: <h3>Oops! There was an error.</h3>,
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
