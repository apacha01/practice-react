import { useState } from 'react'
import ListOfProducts from './components/ListOfProducts.jsx'
import Filters from './components/Filters.jsx'
import { products } from './mocks/products.json'
import Cart from './components/Cart.jsx';

function App() {
	const [filteredProducts, setFilteredProducts] = useState(products);
	const [cartProducts, setCartProducts] = useState([]);

	const updateProductList = (products) => {
		setFilteredProducts(products);
	}

	const addToCart = (product) => {
		const productIndex = cartProducts.findIndex(p => p.id === product.id);

		// product already in cart
		if (productIndex >= 0) {
			const newCartProducts = cartProducts.map(p => {
				if (p.id === product.id)
					return { ...p, quantity: p.quantity + 1 }
				else
					return p;
			});
			setCartProducts(newCartProducts);
		}
		// product not in cart
		else {
			setCartProducts(cps => ([...cps, { ...product, quantity: 1 }]));
		}
	}

	const removeFromCart = (product) => {
		setCartProducts(cps => cps.filter(p => p.id != product.id));
	}

	const resetCart = () => {
		setCartProducts([]);
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