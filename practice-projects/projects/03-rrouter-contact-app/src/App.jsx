import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/root";
import ErrorPage from "./pages/error-page";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Root></Root>} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
