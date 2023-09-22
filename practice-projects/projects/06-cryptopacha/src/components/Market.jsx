import { useState } from 'react';
import { getCoinsPaginated, formatCoins } from '../services/cryptos.js';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Market () {
	const [currentPage, setCurrentPage] = useState(1);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const paginationBtns = (() => {
		const pBtns = [];
		for (let i = 1; i <= 5; i++) {
			pBtns.push(
				<button
					key={i}
					onClick={() => setCurrentPage(i)}
					className={
						'text-center aspect-square h-8 border-2 text-white rounded-full' +
						(i === currentPage ? ' border-own-pink' : ' border-white')
					}
				>
					{i}
				</button>
			);
		}
		return pBtns;
	})();

	useEffect(() => {
		const getData = async () => {
			const market = await getCoinsPaginated(10, currentPage);
			if (market) {
				setData(market);
				setError(null);
			}
			else {
				setError('There was an error requesting the data. The Coingecko api calls probably runned out (if you swittched between pages to many times this may be the case).');
			}
		};
		getData();
	}, [currentPage]);

	return (
		<section id="markets" className="pt-28 w-full bg-dark-purple text-white flex flex-col items-center">
			<h2 className="text-5xl mb-5">Markets</h2>
			<div className="flex flex-col w-4/5 text-sm text-left px-4">
				<div className="flex text-sm uppercase font-bold bg-gradient-to-bl from-light-purple to-own-pink">
					<p className="flex-1 px-3 py-2">Coin</p>
					<p className="flex-1 px-3 py-2">Price</p>
					<p className="flex-1 px-3 py-2">24h Change</p>
					<p className="flex-1 px-3 py-2">MarketCap</p>
				</div>
				<div className="flex flex-col text-sm">
					{
						error
							? error
							: formatCoins(data)?.map((c) =>
								(
									<Link key={c.id} to={`/${c.id}`} className='flex w-full'>
										<p className="flex-1 px-3 py-2">{c.name}</p>
										<p className="flex-1 px-3 py-2">{c.currentPrice}</p>
										<p className="flex-1 px-3 py-2">{c.priceChange24h}</p>
										<p className="flex-1 px-3 py-2">{c.marketCap}</p>
									</Link>
								)
							)
					}
				</div>
			</div>
			<div className="w-4/5 flex flex-nowrap justify-center items-center gap-8 py-5">
				{
					paginationBtns.map(e =>
						e
					)
				}
			</div>
		</section>
	);

}

export default Market;