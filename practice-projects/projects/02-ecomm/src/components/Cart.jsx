
function Cart({ products, addToCart, removeFromCart, resetCart }) {
	return (
		<>
			<label className="cart-toggle-btn" htmlFor="cart">Cart</label>
			<input type="checkbox" id="cart" className="cart-checkbox" />

			<aside className="cart">
				{
					products?.length > 0
						? products.map(p => {
							return (
								<li className="product" key={p.id}>
									<h4>{p.title}</h4>
									<img src={p.thumbnail} alt={`Image for the product: ${p.title}`} />
									<p>Price: <strong>${p.price}</strong></p>
									<div className="cart-product-quantity">
										<small>Qty: {p.quantity}</small>
										<button onClick={() => addToCart(p)}>+</button>
									</div>
									<button onClick={() => removeFromCart(p)}>x</button>
								</li>
							)
						})
						: <p>No items in the cart</p>
				}
				{
					products?.length > 0
						? <button className="delete-all-btn" onClick={resetCart}>Delete All</button>
						: null
				}

			</aside>
		</>
	)
}

export default Cart;