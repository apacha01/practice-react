import { useState } from "react";
import FILTERS_CATEGORY from "../constants/filters.js";

function useFilters() {
	const [filters, setFilters] = useState({ price: 0, category: FILTERS_CATEGORY.ALL });

	const filterProducts = products => {
		return products.filter(
			(p) => {
				return p.price >= filters.price &&
					(
						p.category === filters.category
						|| filters.category === FILTERS_CATEGORY.ALL
					)
			}
		);
	}

	const updatePrice = (newPrice) => {
		setFilters(f => ({ ...f, price: newPrice }));
	}

	const updateCategory = (newCategory) => {
		setFilters(f => ({ ...f, category: newCategory }));
	}

	return { filters, updatePrice, updateCategory, filterProducts };
}

export default useFilters;