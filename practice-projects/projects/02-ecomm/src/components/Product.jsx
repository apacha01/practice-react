function Product({ title, price, imgUrl }) {
	return (
		<>
			<h3>{title}</h3>
			<img src={imgUrl} alt={`Image for the product: ${title}`} />
			<p>Price: ${price}</p>
		</>
	)
}

export default Product;