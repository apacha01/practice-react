function Product({ title, price, imgUrl, addToCart }) {
	return (
		<>
			<h4>{title}</h4>
			<img src={imgUrl} alt={`Image for the product: ${title}`} />
			<p>Price: <strong>${price}</strong></p>
			<button className="cart-btn" onClick={addToCart}>
				<i className="fa-solid fa-cart-plus"></i>
			</button>
		</>
	)
}

export default Product;