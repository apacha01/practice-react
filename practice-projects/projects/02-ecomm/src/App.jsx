import { useState } from 'react'
import { products } from './mocks/products.json'
import ListOfProducts from './components/ListOfProducts.jsx'
import Filters from './components/Filters.jsx'
import Cart from './components/Cart.jsx';
import { CartProvider } from './contexts/cart.jsx';

function App() {
	const [filteredProducts, setFilteredProducts] = useState(products);

	const updateProductList = (products) => {
		setFilteredProducts(products);
	}

	return (
		<>
			<CartProvider>
				<Cart></Cart>
				<h1>Apacha Ecomm</h1>
				<Filters products={products} updateProductList={updateProductList}></Filters>
				<main className='products'>
					<ListOfProducts products={filteredProducts}>
					</ListOfProducts>
				</main>
			</CartProvider >
		</>
	)
}

export default App;