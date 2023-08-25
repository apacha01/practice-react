import { useEffect } from "react";
import useFilters from '../hooks/useFilters.js';
import FILTERS_CATEGORY from "../constants/filters";

function Filters({ products, updateProductList }) {
	const { filters, updatePrice, updateCategory, filterProducts } = useFilters();

	useEffect(() => {
		updateProductList(filterProducts(products));
	}, [filters]);

	const onPriceChange = (e) => {
		updatePrice(e.target.value);
	}

	const onCategoryChange = (e) => {
		updateCategory(e.target.value);
	}

	return (
		<section className="filters">
			<div className="price-filter">
				<label htmlFor="price" className="price-label">From Price</label>
				<input type="range" id="price" min={0} max={2000} onChange={onPriceChange} />
				<p><strong>$</strong>{filters.price}</p>
			</div>

			<div className="category-filter">
				<label htmlFor="category" className="price-label">Category</label>
				<select id="category" onChange={onCategoryChange}>
					<option value={FILTERS_CATEGORY.ALL} >All</option>
					<option value={FILTERS_CATEGORY.HOME_DECORATION} >Home Decoration</option>
					<option value={FILTERS_CATEGORY.LAPTOPS} >Laptops</option>
					<option value={FILTERS_CATEGORY.SMARTPHONES} >Smartphones</option>
					<option value={FILTERS_CATEGORY.FRAGRANCES} >Fragrances</option>
					<option value={FILTERS_CATEGORY.SKINCARE} >Skincare</option>
					<option value={FILTERS_CATEGORY.GROCERIES} >Groceries</option>
				</select>
			</div>
		</section >
	)
}

export default Filters;