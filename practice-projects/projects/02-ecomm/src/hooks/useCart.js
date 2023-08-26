import { useState } from "react";

function useCart() {
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

	return { cartProducts, addToCart, removeFromCart, resetCart };
}

export default useCart;