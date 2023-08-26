import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";

function Product({ title, price, imgUrl, addToCart, removeFromCart, isInCart }) {
	return (
		<>
			<h4>{title}</h4>
			<img src={imgUrl} alt={`Image for the product: ${title}`} />
			<p>Price: <strong>${price}</strong></p>
			<button
				className={`cart-btn ${isInCart ? "remove-cart-btn" : "add-cart-btn"}`}
				onClick={isInCart ? removeFromCart : addToCart}
			>
				{
					isInCart
						? <RemoveFromCartIcon></RemoveFromCartIcon>
						: <AddToCartIcon></AddToCartIcon>
				}
			</button>
		</>
	)
}

export default Product;