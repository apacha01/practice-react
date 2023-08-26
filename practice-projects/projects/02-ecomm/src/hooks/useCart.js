import { useContext } from "react";
import { CartContext } from "../contexts/cart";

function useCart() {
	const context = useContext(CartContext);

	if (context === undefined) {
		throw new Error('useCart must be called within a CartProvider.');
	}

	return context;
}

export default useCart;