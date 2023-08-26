import useCart from "../hooks/useCart.js";
import CartProduct from "./CartProduct.jsx";

function Cart() {
	const { cart, resetCart } = useCart();

	return (
		<>
			<label className="cart-toggle-btn" htmlFor="cart">Cart</label>
			<input type="checkbox" id="cart" className="cart-checkbox" />

			<aside className="cart">
				{
					cart?.length > 0
						?
						<>
							{
								cart.map(p => {
									return (
										<li className="product" key={p.id}>
											<CartProduct product={p}></CartProduct>
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