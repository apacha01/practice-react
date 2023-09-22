// https://www.coingecko.com/en/api/documentation

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/coins/';
const PAGINATED_URL = (pp, p) => `markets?vs_currency=usd&order=market_cap_desc&per_page=${pp}&page=${p}&sparkline=false&locale=en`;
const COIN_ID_URL = (id) => `${id}?tickers=false&community_data=false&developer_data=false`;

const getCoinById = async (id) => {
	try {
		const data = await fetch(COINGECKO_API_URL + COIN_ID_URL(id));
		const json = data.json();
		return json;
	} catch (error) {
		console.error(error);
	}

	return null;
};

const getCoinsPaginated = async (perpage, page) => {
	try {
		const data = await fetch(COINGECKO_API_URL + PAGINATED_URL(perpage, page));
		const json = await data.json();
		return json;
	} catch (error) {
		console.error(error);
	}

	return null;
};


// Regex for format from: https://stackoverflow.com/questions/721304/insert-commas-into-number-string
const formatCoins = (coins) => coins?.map(c =>
	({
		id: c.id,
		name: c.name,
		// Avoid inseting commas after decimal point
		currentPrice: formatNumber(c.current_price),
		priceChange24h: c.price_change_percentage_24h.toFixed(2) + '%',
		marketCap: 	formatNumber(c.market_cap)
	})
);

const formatNumber = (n) => {
	return n.toString().indexOf('.') != -1
		? n.toString().replace(/\d{1,3}(?=(\d{3})+(?=\.))/g, '$&,')
		: n.toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,');
};

export { getCoinById, getCoinsPaginated, formatCoins, formatNumber };