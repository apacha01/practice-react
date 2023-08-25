import ListOfProducts from './components/ListOfProducts.jsx'
import { products } from './mocks/products.json'

function App() {

	return (
		<main className='products'>
			<ListOfProducts products={products}></ListOfProducts>
		</main>
	)
}

export default App
