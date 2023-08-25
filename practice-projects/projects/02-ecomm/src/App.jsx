import { useState } from 'react'
import ListOfProducts from './components/ListOfProducts.jsx'
import Filters from './components/Filters.jsx'
import { products } from './mocks/products.json'

function App() {
	const [filteredProducts, setFilteredProducts] = useState(products);

	const updateProductList = (products) => {
		setFilteredProducts(products);
	}

	return (
		<>
			<h1>Apacha Ecomm</h1>
			<section className="filters">
				<Filters products={products} updateProductList={updateProductList}></Filters>
			</section>
			<main className='products'>
				<ListOfProducts products={filteredProducts}></ListOfProducts>
			</main>
		</>
	)
}

export default App;