import CartItem from "./CartProduct";

function Cart({ products, addToCart, removeFromCart, resetCart }) {
	return (
		<>
			<label className="cart-toggle-btn" htmlFor="cart">Cart</label>
			<input type="checkbox" id="cart" className="cart-checkbox" />

			<aside className="cart">
				{
					products?.length > 0
						?
						<>
							{
								products.map(p => {
									return (
										<li className="product" key={p.id}>
											<CartItem
												product={p}
												addToCart={addToCart}
												removeFromCart={removeFromCart}
											>
											</CartItem>
										</li>
									)
								})
							}
							<button className="delete-all-btn" onClick={resetCart}>Delete All</button>
						</>
						: <p>No items in the cart</p>
				}
			</aside>
		</>
	)
}

export default Cart;