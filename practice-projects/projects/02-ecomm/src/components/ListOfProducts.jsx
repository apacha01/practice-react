import Product from "./Product.jsx";

function ListOfProducts({ products }) {
	return (
		<ul className="product-list">
			{
				products.map(product => {
					return <li className="product" key={product.id}>
						<Product
							title={product.title}
							imgUrl={product.thumbnail}
							price={product.price}
						/>
					</li>
				})
			}
		</ul>
	)
}

export default ListOfProducts;