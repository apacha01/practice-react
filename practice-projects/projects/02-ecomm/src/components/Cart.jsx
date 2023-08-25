
function Cart({ products }) {
	return (
		<>
			<label className="cart-toggle-btn" htmlFor="cart">Cart</label>
			<input type="checkbox" id="cart" className="cart-checkbox" />

			<aside className="cart">
				{products?.map(p => {
					return (
						<li className="product" key={p.id}>
							<h4>{p.title}</h4>
							<img src={p.thumbnail} alt={`Image for the product: ${p.title}`} />
							<p>Price: <strong>${p.price}</strong></p>
							<div className="cart-product-quantity">
								<small>Qty: 0</small>
								<button>+</button>
							</div>
						</li>
					)
				})}
			</aside>
		</>
	)
}

export default Cart;