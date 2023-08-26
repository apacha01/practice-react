function CartItem({ product, addToCart, removeFromCart }) {
	return (
		<>
			<h4>{product.title}</h4>
			<img src={product.thumbnail} alt={`Image for the product: ${product.title}`} />
			<p>Price: <strong>${product.price}</strong></p>
			<div className="cart-product-quantity">
				<small>Qty: {product.quantity}</small>
				<button onClick={() => addToCart(product)}>+</button>
			</div>
			<button onClick={() => removeFromCart(product)}>Remove</button>
		</>
	);
}

export default CartItem;