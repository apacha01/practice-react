// https://www.coingecko.com/en/api/documentation

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/coins/';
const PAGINATED_URL	= (pp, p) => `markets?vs_currency=usd&order=market_cap_desc&per_page=${pp}&page=${p}&sparkline=false&locale=en`;
const COIN_ID_URL = (id) => `${id}?tickers=false&community_data=false&developer_data=false`;

const getCoinById = async (id) => {
	return await fetch(COINGECKO_API_URL + COIN_ID_URL(id)).then(res => res.json);
};

const getCoinsPaginated = async (perpage, page) => {
	return await fetch(COINGECKO_API_URL + PAGINATED_URL(perpage, page)).then(res => res.json);
};

export { getCoinById, getCoinsPaginated };