import { useState } from 'react'
import ListOfProducts from './components/ListOfProducts.jsx'
import Filters from './components/Filters.jsx'
import { products } from './mocks/products.json'
import Cart from './components/Cart.jsx';

function App() {
	const [filteredProducts, setFilteredProducts] = useState(products);

	const updateProductList = (products) => {
		setFilteredProducts(products);
	}

	return (
		<>
			<Cart products={products}></Cart>
			<h1>Apacha Ecomm</h1>
			<Filters products={products} updateProductList={updateProductList}></Filters>
			<main className='products'>
				<ListOfProducts products={filteredProducts}></ListOfProducts>
			</main>
		</>
	)
}

export default App;