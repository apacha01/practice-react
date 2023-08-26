import useCart from "../hooks/useCart.js";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";

function Product({ product }) {
	const { addToCart, removeFromCart, isInCart } = useCart();

	return (
		<>
			<h4>{product.title}</h4>
			<img src={product.thumbnail} alt={`Image for the product: ${product.title}`} />
			<p>Price: <strong>${product.price}</strong></p>
			<button
				className={`cart-btn ${isInCart(product) ? "remove-cart-btn" : "add-cart-btn"}`}
				onClick={isInCart(product)
					? () => removeFromCart(product)
					: () => addToCart(product)
				}
			>
				{
					isInCart(product)
						? <RemoveFromCartIcon></RemoveFromCartIcon>
						: <AddToCartIcon></AddToCartIcon>
				}
			</button>
		</>
	)
}

export default Product;