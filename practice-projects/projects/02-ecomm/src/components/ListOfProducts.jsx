import Product from "./Product.jsx";

function ListOfProducts({ products }) {
	return (
		<ul className="product-list">
			{
				products.map(product => {
					return <li className="product" key={product.id}>
						<Product product={product} />
					</li>
				})
			}
		</ul>
	)
}

export default ListOfProducts;