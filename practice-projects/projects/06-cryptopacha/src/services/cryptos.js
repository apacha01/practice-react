// https://www.coingecko.com/en/api/documentation

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/coins/';
const PAGINATED_URL = (pp, p) => `markets?vs_currency=usd&order=market_cap_desc&per_page=${pp}&page=${p}&sparkline=false&locale=en`;
const COIN_ID_URL = (id) => `${id}?tickers=false&community_data=false&developer_data=false`;

const getCoinById = async (id) => {
	const data = await fetch(COINGECKO_API_URL + COIN_ID_URL(id));
	const json = data.json();
	return json;
};

const getCoinsPaginated = async (perpage, page) => {
	const data = await fetch(COINGECKO_API_URL + PAGINATED_URL(perpage, page));
	const json = await data.json();
	return json;
};


// Regex for format from: https://stackoverflow.com/questions/721304/insert-commas-into-number-string
const formatCoins = (coins) => {
	return coins.map(c => {
		return {
			name: c.name,
			// Avoid inseting commas after decimal point
			currentPrice: c.current_price.toString().indexOf('.') != -1
				? c.current_price.toString().replace(/\d{1,3}(?=(\d{3})+(?=\.))/g, '$&,')
				: c.current_price.toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,'),
			priceChange24h: c.price_change_percentage_24h.toFixed(2),
			marketCap: 	c.market_cap.toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
		};
	});
};

export { getCoinById, getCoinsPaginated, formatCoins };