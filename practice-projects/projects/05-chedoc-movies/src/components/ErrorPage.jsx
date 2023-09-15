import { useRouteError } from 'react-router-dom';

function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div className="error-page">
			<p>Oops, something went wrong</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}

export default ErrorPage;