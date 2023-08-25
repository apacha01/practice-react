import { useEffect, useState } from 'react'
import ListOfProducts from './components/ListOfProducts.jsx'
import { products } from './mocks/products.json'

function App() {
	const [filteredProducts, setFilteredProducts] = useState(products);
	const [price, setPrice] = useState(0);
	const [category, setCategory] = useState(0);

	const onPriceChange = (e) => {
		setPrice(e.target.value);
	}

	const onCategoryChange = (e) => {
		setCategory(e.target.value)
	}

	useEffect(() => {
		setFilteredProducts(fps => products.filter(fp => fp.price >= price))
	}, [price, category]);

	return (
		<>
			<h1>Apacha Ecomm</h1>
			<section className="filters">
				<div className="price-filter">
					<label htmlFor="price" className="price-label">From Price</label>
					<input type="range" id="price" min={0} max={2000} onChange={onPriceChange} />
					<p><strong>$</strong>{price}</p>
				</div>
				<div className="category-filter">
					<label htmlFor="category" className="price-label">Category</label>
					<select id="category" onChange={onCategoryChange}>
						<option value='all'>All</option>
						<option value='home-decoration'>Home Decoration</option>
						<option value='laptops'>Laptops</option>
						<option value='smartphones'>Smartphones</option>
						<option value='fragrances'>Fragrances</option>
						<option value='skincare'>Skincare</option>
						<option value='groceries'>Groceries</option>
					</select>
				</div>
			</section>
			<main className='products'>
				<ListOfProducts products={filteredProducts}></ListOfProducts>
			</main>
		</>
	)
}

export default App;