// 1 Create the context
// 2 Create the provider
// 3 Consume the context

import { createContext, useState } from "react";

// 1
const CartContext = createContext();

// 2
function CartProvider({ children }) {
	const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || [];
	const [cartProducts, setCartProducts] = useState(cartInitialState);

	const updateLocalStorage = (cart) => {
		window.localStorage.setItem('cart', JSON.stringify(cart));
	}

	const addToCart = (product) => {
		const productIndex = cartProducts.findIndex(p => p.id === product.id);
		let newCartProducts;
		// product already in cart
		if (productIndex >= 0) {
			newCartProducts = cartProducts.map(p => {
				if (p.id === product.id)
					return { ...p, quantity: p.quantity + 1 }
				else
					return p;
			});
			setCartProducts(newCartProducts);
		}
		// product not in cart
		else {
			newCartProducts = [...cartProducts, { ...product, quantity: 1 }];
			setCartProducts(newCartProducts);
		}

		updateLocalStorage(newCartProducts);
	}

	const removeFromCart = (product) => {
		const newCartProducts = cartProducts.filter(p => p.id != product.id);
		setCartProducts(newCartProducts);
		updateLocalStorage(newCartProducts);
	}

	const resetCart = () => {
		setCartProducts([]);
		updateLocalStorage([]);
	}

	const isInCart = (product) => {
		return cartProducts.some(p => p.id === product.id);
	}

	return (
		<CartContext.Provider value={{
			cart: cartProducts,
			addToCart,
			removeFromCart,
			resetCart,
			isInCart
		}}
		>
			{children}
		</CartContext.Provider>
	);
}

export { CartContext, CartProvider };