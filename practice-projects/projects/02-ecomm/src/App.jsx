import Product from './components/Product.jsx'
import { products } from './mocks/products.json'

function App() {

	return (
		<ul>
			{
				products.map(product => {
					return <li key={product.id}>
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

export default App
