function Product({ title, price, imgUrl }) {
	return (
		<>
			<h4>{title}</h4>
			<img src={imgUrl} alt={`Image for the product: ${title}`} />
			<p>Price: <strong>${price}</strong></p>
		</>
	)
}

export default Product;