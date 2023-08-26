// 1 Create the context
// 2 Create the provider
// 3 Consume the context

import { createContext, useState } from "react";

// 1
const CartContext = createContext();

// 2
function CartProvider({ children }) {
	const [cartProducts, setCartProducts] = useState([]);

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