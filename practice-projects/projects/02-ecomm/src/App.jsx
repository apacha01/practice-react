import { useState } from 'react'
import { products } from './mocks/products.json'
import ListOfProducts from './components/ListOfProducts.jsx'
import Filters from './components/Filters.jsx'
import Cart from './components/Cart.jsx';
import useCart from './hooks/useCart.js';

function App() {
	const [filteredProducts, setFilteredProducts] = useState(products);
	const { cartProducts, addToCart, removeFromCart, resetCart } = useCart();

	const updateProductList = (products) => {
		setFilteredProducts(products);
	}

	return (
		<>
			<Cart
				products={cartProducts}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
				resetCart={resetCart}
			>
			</Cart>
			<h1>Apacha Ecomm</h1>
			<Filters products={products} updateProductList={updateProductList}></Filters>
			<main className='products'>
				<ListOfProducts
					products={filteredProducts}
					addToCart={addToCart}
				>
				</ListOfProducts>
			</main>
		</>
	)
}

export default App;