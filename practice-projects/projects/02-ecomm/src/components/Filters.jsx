import { useEffect, useState } from "react";

function Filters({ products, updateProductList }) {
	const [price, setPrice] = useState(0);
	const [category, setCategory] = useState('all');

	const onPriceChange = (e) => {
		setPrice(e.target.value);
	}

	const onCategoryChange = (e) => {
		setCategory(e.target.value);
	}

	useEffect(() => {
		updateProductList(products.filter(
			p => p.price >= price && (p.category === category || category === 'all')
		));
	}, [price, category]);

	return (
		<>
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
		</>
	)
}

export default Filters;