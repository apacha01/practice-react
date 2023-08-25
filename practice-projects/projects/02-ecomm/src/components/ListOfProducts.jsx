import Product from "./Product.jsx";

function ListOfProducts({ products, addToCart }) {
	return (
		<ul className="product-list">
			{
				products.map(product => {
					return <li className="product" key={product.id}>
						<Product
							title={product.title}
							imgUrl={product.thumbnail}
							price={product.price}
							addToCart={() => addToCart(product)}
						/>
					</li>
				})
			}
		</ul>
	)
}

export default ListOfProducts;